
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
    let status
    const resposta = await fetch(`https://${url}/auth`, cabecalhoHTTP).then((response) => { status = response.status });
    console.log(status)
    return status

    }


export default efetuarLogin