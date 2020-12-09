import AppState from '../state/AppState'

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
    let response = await resposta.json()

    console.log(await response)

    AppState.getInstance().setValue('token', status == 200 ? response.token : '')

    return await status
    }


export default efetuarLogin