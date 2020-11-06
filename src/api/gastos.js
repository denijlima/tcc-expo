import token from '../api/token'

const API_URL = 'iwallet-e.herokuapp.com';

export const salvarGasto = async (empresa, tipo, categoria, custo, recorrencia, descricao) => {
    const cabecalhoHTTP = {
        method: "POST",
        body: JSON.stringify({
            cash: custo,
            description: descricao,
            id_product: 1,
            recurrent: false
        }),
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    }

    const response = await fetch(`https://${API_URL}/api/Spend/SaveSpend`, cabecalhoHTTP);
    return await response.json()
}

export const listarGastos = async () => {
    const cabecalhoHTTP = {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    }

    const response = await fetch(`https://${API_URL}/api/Spend/GetSpend`, cabecalhoHTTP);
    console.log(await response.json())
    return response.status !== 200 ? await response.json() : [];
}