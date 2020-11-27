import React, { useState } from "react";
import {
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";

import DateTimePicker from '@react-native-community/datetimepicker';

import { Button, Block, Input, Text } from "../Components";
import { theme } from "../constants";

import cadastrado from "../api/cadastro"

const SignUp = ({navigation}) => {

  const onChange = async (event, selectedDate) => {
    const currentDate = selectedDate || datanasc;
    await setDatanasc(currentDate);
    await setShow(false)
  };

  const [datanasc, setDatanasc] = useState(new Date());
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    Keyboard.dismiss();

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

    setLoading(true);

    let status_cadastro = await cadastrado(datanasc, email, nome, sobrenome, usuario, senha);

    if (status_cadastro == '200') {
      Alert.alert(
        "Sucesso!",
        "Sua conta foi criada!",
        [
          {
            text: "Continue",
            onPress: () => {
              navigation.navigate("GastosStack");
            }
          }
        ],
        { cancelable: false }
      );
    } else
      Alert.alert('Houve um erro no cadastro')
    
    setLoading(false);
  }

    return (
      <KeyboardAvoidingView style={styles.signup} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <Block middle>
            <Text h1 bold>
              Cadastro
            </Text>
            <Input
              label="Email"
              style={styles.input}
              defaultValue={email}
              onChangeText={text => setEmail(text)}
            />
            <Input
              label="Nome"
              style={styles.input}
              defaultValue={nome}
              onChangeText={text => setNome(text)}
            />
            <Input
              label="Sobrenome"
              style={styles.input}
              defaultValue={sobrenome}
              onChangeText={text => setSobrenome(text)}
            />
            <Input
              label="Usuário"
              style={styles.input}
              defaultValue={usuario}
              onChangeText={text => setUsuario(text)}
            />
            <Input
              secure
              label="Senha"
              style={styles.input}
              defaultValue={setSenha}
              onChangeText={text => setSenha(text)}
            />
            <Button onPress={() => setShow(!show)}>
            <Text
                gray
                caption
                center
              >
                {`'Data de nascimento'\n${datanasc.getDate() + "/" + (datanasc.getMonth() + 1) + "/" + datanasc.getFullYear()}`}
              </Text>
            </Button>

            {show && 
              <DateTimePicker
              testID="dateTimePicker"
              value={datanasc}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChange}
              />
            }
            
            <Button gradient onPress={() => handleSignUp}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Cadastrar
                </Text>
              )}
            </Button>

            <Button onPress={() => navigation.navigate("Login_new")}>
              <Text
                gray
                caption
                center
              >
                Voltar ao Login
              </Text>
            </Button>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    ); 
}

export default SignUp

const styles = StyleSheet.create({
  signup: {
    flex: 1,
    justifyContent: "center"
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent
  }
});
