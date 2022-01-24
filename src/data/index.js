import AsyncStorage from '@react-native-async-storage/async-storage';

//AsyncStorage.removeItem('marketlista');

export default {
    total: 0,
    show_done: false,
    show_modal: false,
    is_edit: false,
    edit_item: {},
    produtos: [],
    produtos_filtered: []
};

export const Api = {
    getDados: async () => {
        pegaDados = await AsyncStorage.getItem('marketlista');
        if(JSON.parse(pegaDados)){
            dados = JSON.parse(pegaDados);
        } else {
            await AsyncStorage.setItem('marketlista', JSON.stringify({
                total: 0, 
                show_done: false,
                show_modal: false,
                is_edit: false,
                edit_item: {},
                produtos: [],
                produtos_filtered: []
            }));
            pegaDados = await AsyncStorage.getItem('marketlista');
            dados = JSON.parse(pegaDados);
        }

        return dados;
    },

    setDados: async (state) => {
        await AsyncStorage.setItem('marketlista', JSON.stringify(state));
    }    
}