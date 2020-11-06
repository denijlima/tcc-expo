import React, {Fragment, useState} from 'react';
import {
  Text,
  TextInput,
  Button,
  View,
  Image,
  Alert
} from "react-native";
import estilo from "./estilo";
import { RadioButton } from 'react-native-paper';
import logando from "../../api/login";


const Login = ({navigation}) => {
const [usuario, setUsuario] = useState("");
const [senha, setSenha] = useState("");
const [opcao, setOpcao] = useState('cadastro');

   const navegacao = () => {
    if(opcao === 'empresa')
      navigation.navigate('Empresa')

    if (opcao === 'cadastro')
      navigation.navigate('Cadastro')
   }

   console.log(opcao)

   const tentarLogar = async () =>{
    let logado = await logando(usuario, senha);

    if(logado == '200')
      navigation.navigate('GastosStack')

    if(logado == '403')
      Alert.alert('Credenciais incorretas!')

  }
  
  return (
    <Fragment>
      <View style={estilo.conteiner}>
      <Image  source={require("../../../res/img/logo.png")}
            style={estilo.fotoUsuario}
            />
        <TextInput 
         style={estilo.inputs}
         placeholder="Usuario"
         onChangeText={texto => setUsuario(texto)
        }
         />
         <TextInput 
         style={estilo.inputs}
         placeholder="Senha"
         secureTextEntry={true}
         onChangeText={texto => setSenha(texto)}
         />
        <Button 
          title="Esqueci a senha"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
         <Button 
         style={estilo.botao} 
         title="Entrar" 
         onPress={() => tentarLogar()} 
         />
        <Text style={estilo.texto} >Ainda não tem uma conta?</Text>
        <Button 
          title="Cadastre-se"
          onPress={() => navegacao() }
        />
        <Text>cadastro</Text>
        <RadioButton
          value="cadastro"
          status={opcao === 'cadastro' ? 'checked' : 'unchecked'}
          onPress={() => setOpcao('cadastro')}
        />
        <Text>empresa</Text>
        <RadioButton
          value="empresa"
          status={opcao === 'empresa' ? 'checked' : 'unchecked'}
          onPress={() => setOpcao('empresa')}
        />

      </View>
    </Fragment>
    
  )
};
export default Login;
