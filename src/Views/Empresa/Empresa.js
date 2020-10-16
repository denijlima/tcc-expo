import React, {Fragment, useState} from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native'
import estilo_empresa from "./estilo_empresa";
  
  const Empresa = ({ navigation }) => {
    
    const [razao, setRazao] = useState("");
    const [cnpj, setCNPJ] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [telefone, setTelefone] = useState("");

    const cadastrar = () => {
      if (!razao)
        return Alert.alert('Preencha o campo razao!')

      if (!cnpj)
        return Alert.alert('Preencha o campo cnpj!')

      if (!email)
        return Alert.alert('Preencha o campo email!')

      if (!senha)
        return Alert.alert('Preencha o campo senha!')

      if (!telefone)
        return Alert.alert('Preencha o campo telefone!')

      Alert.alert('Cadastrado com sucesso')

      navigation.navigate('Produto')
    }

      return (
        <Fragment>
          
            <TextInput 
            style={estilo_empresa.titulo}
            >Cadastro empresa 
            </TextInput>
          <TextInput 
            style={estilo_empresa.inputs}
            placeholder="Razão social"
            onChangeText={texto => setRazao(texto)}
          />
          <TextInput 
            style={estilo_empresa.inputs}
            placeholder="CNPJ"
            onChangeText={texto => setCNPJ(texto)}
          />
          <TextInput 
            style={estilo_empresa.inputs}
            placeholder="email"
            onChangeText={texto => setEmail(texto)}
          />
           <TextInput 
            style={estilo_empresa.inputs}
            placeholder="Senha"
            secureTextEntry={true}
            onChangeText={texto => setSenha(texto)}
          />
          <TextInput 
            style={estilo_empresa.inputs}
            placeholder="Telefone"
            onChangeText={texto => setTelefone(texto)}
          />
          <Button
            title="Cadastre-se"
            onPress={() => cadastrar()}
            >
          </Button>
          
    
        </Fragment>
      )
    
};

export default Empresa;

