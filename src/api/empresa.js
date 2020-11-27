import token from './token'

const cadastrarEmpresa =  async (nome, cnpj, email, senha, telefone, fimContrato, descricao) =>{
    let url = "iwallet-e.herokuapp.com";
    const cabecalhoHTTP = {
        method:"POST",
        body:JSON.stringify({
          cnpj: cnpj,
          contract_deadline:fimContrato,
          description: descricao,
          email: email,
          name: nome,
          password: senha,
          telephone: telefone
        }),
        headers:{ 
            "Content-type" : "application/json",
            "Authorization": `Bearer ${token}`,
        }
}

    const resposta = await fetch(`https://${url}/api/Company/SaveCompany`, cabecalhoHTTP);
    let status = await resposta.status
    return await status
    }

export default cadastrarEmpresa