import React, { Component } from "react";
import {
  ActivityIndicator,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";

import { Button, Block, Input, Text } from "../Components";
import { theme } from "../constants";

import logando from "../api/login";

export default class Login_new extends Component {
  state = {
    loading: false
  };

  handleLogin = async () => {
    const { navigation } = this.props;
    const { email, password } = this.state;

    Keyboard.dismiss();
    this.setState({ loading: true });

    let logado = await logando(email, password);

    if (logado == '200') {
      this.setState({ loading: false });
      navigation.navigate('GastosStack')
    } else {
      this.setState({ loading: false });
      Alert.alert('Dados incorretos')
    }
  }

  render() {
    const { loading } = this.state;

    return (
      <KeyboardAvoidingView style={styles.login} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <Block middle>
            <Text h1 bold>
              Login
            </Text>
            <Input
              label="Email"
              style={styles.input}
              placeholder="Seu email"
              defaultValue={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            />
            <Input
              secure
              label="Senha"
              placeholder="Sua senha"
              style={styles.input}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
            <Button gradient onPress={() => this.handleLogin()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                  <Text bold white center>
                    Entrar
                  </Text>
                )}
            </Button>

            {/* <Button onPress={() => navigation.navigate("Forgot")}>
              <Text
                gray
                caption
                center
                style={{ textDecorationLine: "underline" }}
              >
                Forgot your password?
              </Text>
            </Button> */}
          </Block>
        </Block>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  login: {
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