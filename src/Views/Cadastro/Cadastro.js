import React, {Fragment} from 'react';
import { View, Text, TextInput, Button } from 'react-native'
import estilo_cadastro from "./estilo_cadastro";

// const Cadastro = () => {
//     const [datanasc, setDatanasc] = useState("");
//     const [email, setEmail] = useState("");
//     const [nome, setNome] = useState("");
//     const [sobrenome, setSobrenome] = useState("");
//     const [usuario, setUsuario] = useState("");
//     const [senha, setSenha] = useState("");

  
const Cadastro = () => {
  
      return (
        <Fragment>
          
            <TextInput 
            style={estilo_cadastro.titulo}
            >Cadastro Usuário
            </TextInput>
          <TextInput 
            style={estilo_cadastro.inputs}
            placeholder="Nome"
            onChangeText={texto => setNome(texto)}
          />
          <TextInput 
            style={estilo_cadastro.inputs}
            placeholder="Sobrenome"
            onChangeText={texto => setSobrenome(texto)}
          />
          <TextInput 
            style={estilo_cadastro.inputs}
            placeholder="CPF"
            onChangeText={texto => setCpf(INT)}
          />
          <TextInput 
            style={estilo_cadastro.inputs}
            placeholder="email"
            onChangeText={texto => setEmail(texto)}
          />
           <TextInput 
            style={estilo_cadastro.inputs}
            placeholder="Senha"
            secureTextEntry={true}
            onChangeText={texto => setSenha(texto)}
          />
          <TextInput 
            style={estilo_cadastro.inputs}
            placeholder="Data nascimento"
            onChangeText={texto => setDtnasc(texto)}
          />
          <Button
            title="Cadastre-se">
          </Button>
          
    
        </Fragment>
      )
    
};

export default Cadastro;

