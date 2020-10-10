
const cadastrarCliente =  async (datanasc, email,nome,sobrenome,usuario,senha) =>{
    let url = "iwallet-e.herokuapp.com";

    const cabecalhoHTTP = {
        method:"POST",
        body:JSON.stringify({
            birthday:datanasc,
            email:email,
            firstName:nome,
            lastName:sobrenome,
            login:usuario,
            password:senha
        }),
        headers:{
            "Content-type" : "application/json"
        }
    }
    const resposta = await fetch(`https://${url}/api/Customer/SaveCustomer`, cabecalhoHTTP);
    let status = await resposta.status
    console.log(status)
    return await status
    }


export default inserirCadastro
