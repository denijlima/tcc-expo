
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
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUEkgQmFuayIsInN1YiI6IjEiLCJpYXQiOjE2MDQ1MzAyMjksImV4cCI6MTYwNDYxNjYyOX0.143O1iw-2LP-Dtjz-4DNyR5UKojcizy6zv-kFiPaHkY",
        
    }
}

    const resposta = await fetch(`https://${url}/api/Company/SaveCompany`, cabecalhoHTTP);
    let status = await resposta.status
    console.log(status)
    return await status
    }

export default cadastrarEmpresa