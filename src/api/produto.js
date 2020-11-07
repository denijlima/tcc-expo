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

const cadastrarProduto =  async (empresa, tipo, categoria, custo, nome) =>{
    let url = "iwallet-e.herokuapp.com";
    const cabecalhoHTTP = {
        method:"POST",
        body:JSON.stringify({
          description: string,
          id_classification: 0,
          id_company: 0,
          name: nome,
          price: 0
        }),
        headers:{ 
            "Content-type" : "application/json",
            "Authorization": `Bearer ${token}`,
        }
}

    const resposta = await fetch(`https://${url}/api/Product/SaveProduct`, cabecalhoHTTP);
    let status = await resposta.status
    console.log(status)
    return await status
    }

export default cadastrarProduto
