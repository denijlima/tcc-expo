import AppState from '../state/AppState'

const API_URL = 'iwallet-e.herokuapp.com';

export const salvarGasto = async (product, description, cash, recurrent) => {
    const cabecalhoHTTP = {
        method: "POST",
        body: JSON.stringify({
            cash: cash,
            description: description,
            id_product: product,
            recurrent: recurrent
        }),
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${AppState.getInstance().get('token')}`,
        }
    }

    const response = await fetch(`https://${API_URL}/api/Spent/SaveSpent`, cabecalhoHTTP);
    return response.status
}

export const listarGastos = async () => {
    const cabecalhoHTTP = {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${AppState.getInstance().get('token')}`,
        }
    }

    const response = await fetch(`https://${API_URL}/api/Spent/GetSpent`, cabecalhoHTTP);
    return await response.json();
}