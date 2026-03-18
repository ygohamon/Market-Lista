import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../config';

const getToken = async () => AsyncStorage.getItem('token');

const request = async (method, path, body = null) => {
  const token = await getToken();
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const config = { method, headers };
  if (body) config.body = JSON.stringify(body);

  const response = await fetch(`${API_URL}${path}`, config);
  const data = await response.json();

  if (!response.ok) throw new Error(data.erro || 'Erro na requisição');
  return data;
};

export const AuthAPI = {
  login: (email, senha) =>
    request('POST', '/auth/login', { email, senha }),
  cadastro: (nome, email, senha) =>
    request('POST', '/auth/cadastro', { nome, email, senha }),
};

export const ListaAPI = {
  getAtual: () => request('GET', '/listas/atual'),
  atualizar: (dados) => request('PUT', '/listas/atual', dados),
  getHistorico: () => request('GET', '/listas/historico'),
  reaproveitar: (id) => request('POST', `/listas/reaproveitar/${id}`),
};

export const UserAPI = {
  buscar: (email) => request('GET', `/users/buscar?email=${encodeURIComponent(email)}`),
  adicionarMembro: (userId) => request('POST', '/users/adicionar-membro', { userId }),
  removerMembro: (userId) => request('POST', '/users/remover-membro', { userId }),
  perfil: () => request('GET', '/users/perfil'),
};
