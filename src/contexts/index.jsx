import React, { createContext, useReducer, useEffect, useRef } from 'react';
import { ListaAPI } from '../services/api';

const AppContext = createContext({});

const initialState = {
    listaId: null,
    total: 0,
    orcamento: 0,
    show_done: false,
    show_modal: false,
    is_edit: false,
    edit_item: {},
    produtos: [],
    membros: [],
    ownerEmail: null,
};

const actions = {
    setDadosCompletos(state, action) {
        const lista = action.payload;
        return {
            ...state,
            listaId: lista._id,
            produtos: lista.produtos || [],
            total: lista.total || 0,
            orcamento: lista.orcamento || 0,
            membros: lista.membros || [],
            ownerEmail: lista.owner?.email || null,
        };
    },
    setMembros(state, action) {
        return { ...state, membros: action.payload };
    },
    setOrcamento(state, action) {
        return { ...state, orcamento: action.payload };
    },
    handleShowDone(state, action) {
        return { ...state, show_done: action.payload };
    },
    handleIsEdit(state, action) {
        return { ...state, is_edit: action.payload };
    },
    setEditItem(state, action) {
        return { ...state, edit_item: action.payload };
    },
    handleModal(state, action) {
        return { ...state, show_modal: action.payload };
    },
    handleAddNewProduto(state, action) {
        return { ...state, produtos: [action.payload, ...state.produtos] };
    },
    handleEditProduto(state, action) {
        const produto = action.payload;
        const produtos = state.produtos.map(item =>
            item.id === produto.id
                ? { ...item, nome: produto.nome, quantidade: produto.quantidade, preco: produto.preco }
                : item
        );
        return { ...state, produtos };
    },
    handleDeleteProduto(state, action) {
        return { ...state, produtos: state.produtos.filter(i => i.id !== action.payload) };
    },
    handleToggleDone(state, action) {
        const { id, done } = action.payload;
        const produtos = state.produtos.map(item =>
            item.id === id ? { ...item, done } : item
        );
        return { ...state, produtos };
    },
    handleTotal(state) {
        const total = state.produtos
            .filter(item => !item.done)
            .reduce((acc, item) => acc + (parseInt(item.quantidade) * parseFloat(item.preco)), 0);
        return { ...state, total: parseFloat(total).toFixed(2) };
    },
};

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
        (state, action) => {
            const fn = actions[action.type];
            return fn ? fn(state, action) : state;
        },
        initialState
    );

    const fromAPI = useRef(false);
    const saveTimer = useRef(null);

    // Salva no backend (debounce 1.5s) quando produtos/total/orcamento mudam
    useEffect(() => {
        if (fromAPI.current) { fromAPI.current = false; return; }
        if (!state.listaId) return;

        if (saveTimer.current) clearTimeout(saveTimer.current);
        saveTimer.current = setTimeout(() => {
            ListaAPI.atualizar({
                produtos: state.produtos,
                total: state.total,
                orcamento: state.orcamento,
            }).catch(() => {}); // silencioso — dados já estão no estado local
        }, 1500);

        return () => { if (saveTimer.current) clearTimeout(saveTimer.current); };
    }, [state.produtos, state.total, state.orcamento]);

    // Sync colaborativo: refaz fetch a cada 30 segundos
    useEffect(() => {
        if (!state.listaId) return;
        const interval = setInterval(async () => {
            try {
                const lista = await ListaAPI.getAtual();
                fromAPI.current = true;
                dispatch({ type: 'setDadosCompletos', payload: lista });
            } catch {}
        }, 30000);
        return () => clearInterval(interval);
    }, [state.listaId]);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
