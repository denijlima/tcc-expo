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
// import {} from 'react-native-paper';
import logando from "../../api/login";


const Login = ({navigation}) => {
const [usuario, setUsuario] = useState("");
const [senha, setSenha] = useState("");
  

   const tentarLogar = ()=>{
    console.log("Logando",usuario, senha);
    let logado = logando(usuario,senha);
    console.log(logado);

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
         onPress={tentarLogar} 
         />
        <Text style={estilo.texto} >Ainda não tem uma conta?</Text>
        <Button 
          title="Cadastre-se"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
    </Fragment>
    
  )
};
export default Login;
