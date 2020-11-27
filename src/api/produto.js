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

export const listarClassificacao = async () => {
    const cabecalhoHTTP = {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    }

    const response = await fetch(`https://${API_URL}/api/Classification/GetClassification`, cabecalhoHTTP);
    return await response.json();
}

export const listarEmpresa = async () => {
    const cabecalhoHTTP = {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    }

    const response = await fetch(`https://${API_URL}/api/Company/GetCompany`, cabecalhoHTTP);
    return await response.json();
}

export const cadastrarProduto =  async (description, id_classification, id_company, name, price) =>{
    let url = "iwallet-e.herokuapp.com";
    const cabecalhoHTTP = {
        method:"POST",
        body:JSON.stringify({
          description: description,
          id_classification: id_classification,
          id_company: id_company,
          name: name,
          price: price
        }),
        headers:{ 
            "Content-type" : "application/json",
            "Authorization": `Bearer ${token}`,
        }
}

    const resposta = await fetch(`https://${url}/api/Product/SaveProduct`, cabecalhoHTTP);
    let status = await resposta.status
    return await status
    }