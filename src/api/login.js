import token from './token'

const efetuarLogin =  async (usuario, senha) =>{
    let url = "iwallet-e.herokuapp.com";

    const cabecalhoHTTP = {
        method:"POST",
        body:JSON.stringify({
            login:usuario,
            password:senha
        }),
        headers:{
            "Content-type" : "application/json"
        }
    }
    const resposta = await fetch(`https://${url}/auth`, cabecalhoHTTP);
    let status = await resposta.status
    return await status
    }


export default efetuarLogin