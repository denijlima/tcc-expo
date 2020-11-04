import React, {Fragment, useState} from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native'
import estilo_cadastro from "./estilo_cadastro";
import cadastrado from "../../api/cadastro"
import DateTimePicker from '@react-native-community/datetimepicker';



const Cadastro = ({navigation}) => {

  const cadastrar = async () => {


    if(!email)
      return Alert.alert('Preencha o campo email!')

    if (!nome)
      return Alert.alert('Preencha o campo nome!')

    if (!sobrenome)
     return Alert.alert('Preencha o campo sobrenome!')

    if (!usuario)
     return Alert.alert('Preencha o campo usuario!')

    if (!senha)
     return Alert.alert('Preencha o campo senha!')

    if (!cpf)
     return Alert.alert('Preencha o campo sobrenome!')

    let status_cadastro = await cadastrado(datanasc, email, nome, sobrenome, usuario, senha);

     if (status_cadastro == '200')
       navigation.navigate('Cadastro')

      if (status_cadastro == '403')
       Alert.alert('Dados incorretos!')

    navigation.navigate('Produto')
  }


  const onChange = (event, selectedDate) => {
    setDatanasc(selectedDate);
  };

  const [datanasc, setDatanasc] = useState(new Date());
  const [email, setEmail] = useState(false);
  const [nome, setNome] = useState(false);
  const [sobrenome, setSobrenome] = useState(false);
  const [usuario, setUsuario] = useState(false);
  const [senha, setSenha] = useState(false);
  const [cpf, setCpf] = useState(false);
  const [show, setShow] = useState(false);
  
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
            onChangeText={texto => setCpf(texto)}
            keyboardType='numeric'
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
            placeholder="Usuario"
            onChangeText={texto => setUsuario(texto)}
          />

          <Button
            style={estilo_cadastro.botao}
            title="DataNascimento"
            onPress={() => setShow(!show)}
          />

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={datanasc}
            mode='date'
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )

        }
      <Button 
         style={estilo_cadastro.botao} 
         title="Entrar" 
            onPress={() => cadastrar()} 
         />
      </Fragment>
      )
    
};

export default Cadastro;