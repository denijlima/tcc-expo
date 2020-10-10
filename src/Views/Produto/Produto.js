import React, {Fragment} from 'react';
import { View, Text, TextInput, Button } from 'react-native'
import estilo_produto from "./estilo_produto";

// const Cadastro = () => {
//     const [datanasc, setDatanasc] = useState("");
//     const [email, setEmail] = useState("");
//     const [nome, setNome] = useState("");
//     const [sobrenome, setSobrenome] = useState("");
//     const [usuario, setUsuario] = useState("");
//     const [senha, setSenha] = useState("");

  
const Produto = () => {
  
      return (
        <Fragment>
            <TextInput 
            style={estilo_produto.titulo}
            >Conheça o melhor preço do mercado
            </TextInput>      
            <TextInput 
            style={estilo_produto.subtitulo}
            >Cadastre seu produto
            </TextInput>
          <TextInput 
            style={estilo_produto.inputs}
            placeholder="Nome"
            onChangeText={texto => setNome(texto)}
          />
          <TextInput 
            style={estilo_produto.inputs}
            placeholder="Valor"
            onChangeText={texto => setSobrenome(texto)}
          />
          <TextInput 
            style={estilo_produto.inputs}
            placeholder="Data validade"
            onChangeText={texto => setCpf(INT)}
          />
          <TextInput 
            style={estilo_produto.inputs}
            placeholder="Descrição"
            onChangeText={texto => setEmail(texto)}
          />

          <Button
            title="Inserir produto">
          </Button>
          
    
        </Fragment>
      )
    
};

export default Produto;

