import React, {Fragment, useState} from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native'
import estilo_empresa from "./estilo_empresa";
import cadastrado from "../../api/empresa"
import DateTimePicker from '@react-native-community/datetimepicker';

  
  const Empresa = ({ navigation }) => {
    
    const [nome, setNome] = useState("");
    const [cnpj, setCNPJ] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [telefone, setTelefone] = useState("");
    const [fimContrato, setFimContrato] = useState(new Date());
    const [descricao, setDescricao] = useState("");
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
    setFimContrato(selectedDate);
    };

    const cadastrar = async () => {
      if (!nome)
        return Alert.alert('Preencha o campo nome!')

      if (!cnpj)
        return Alert.alert('Preencha o campo cnpj!')

      if (!email)
        return Alert.alert('Preencha o campo email!')

      if (!senha)
        return Alert.alert('Preencha o campo senha!')

      if (!telefone)
        return Alert.alert('Preencha o campo telefone!')

      if (!descricao)
        return Alert.alert('Preencha o campo Descrição!')

    let status_cadastro = await cadastrado(nome, cnpj, email, senha, telefone, fimContrato, descricao);

     if (status_cadastro == '200')
       navigation.navigate('Cadastro')

    if (status_cadastro == '403')
       Alert.alert('Dados incorretos!')

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
            placeholder="nome"
            onChangeText={texto => setNome(texto)}
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
            style={estilo_empresa.botao}
            title="fimContrato"
            onPress={() => setShow(!show)}
          />

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={fimContrato}
            mode='date'
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )

        }

        <TextInput 
            style={estilo_empresa.inputs}
            placeholder="Descrição"
            onChangeText={texto => setDescricao(texto)}
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

