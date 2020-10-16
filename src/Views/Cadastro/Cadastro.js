import React, {Fragment, useState} from 'react';
import { View, Text, TextInput, Button } from 'react-native'
import estilo_cadastro from "./estilo_cadastro";
import cadastrado from "../../api/cadastro"

const Cadastro = ({navigation}) => {
    const [datanasc, setDatanasc] = useState("");
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
  

   const cadastrar = async () =>{
    let cadastrar = await cadastrado (datanasc, email, nome, sobrenome, usuario, senha);

    if(cadastrar == '200')
      navigation.navigate('Cadastro')

    if(cadastrar == '403')
      Alert.alert('Dados incorretos!')

  }

  
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
         style={estilo.botao} 
         title="Entrar" 
         onPress={cadastrar} 
         />
          <Button
            title="Cadastre-se">
          </Button>
          
        </Fragment>
      )
    
};

export default Cadastro;

