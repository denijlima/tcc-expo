import token from './token'

const API_URL = 'iwallet-e.herokuapp.com';

export const listarProdutos = async () => {
    const cabecalhoHTTP = {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    }

    const response = await fetch(`https://${API_URL}/api/Product/GetProduct`, cabecalhoHTTP);
    return await response.json();
}