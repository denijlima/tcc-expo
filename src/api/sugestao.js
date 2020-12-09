import AppState from '../state/AppState'

const API_URL = 'iwallet-e.herokuapp.com';

export const buscarSugestao = async (classification, price, product) => {

    const cabecalhoHTTP = {
        method: "POST",
        body: JSON.stringify({
            classification: classification,
            price: price,
            product: product,
        }),
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${AppState.getInstance().get('token')}`,
        }
    }

    const response = await fetch(`https://${API_URL}/api/Suggestion/GetSuggestion`, cabecalhoHTTP);
    return await response.json();
}