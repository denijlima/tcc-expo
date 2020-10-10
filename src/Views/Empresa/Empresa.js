import React, {Fragment} from 'react';
import { View, Text, TextInput, Button } from 'react-native'
import estilo_empresa from "./estilo_empresa";

// const Cadastro = () => {
//     const [datanasc, setDatanasc] = useState("");
//     const [email, setEmail] = useState("");
//     const [nome, setNome] = useState("");
//     const [sobrenome, setSobrenome] = useState("");
//     const [usuario, setUsuario] = useState("");
//     const [senha, setSenha] = useState("");

  
const Empresa = () => {
  
      return (
        <Fragment>
          
            <TextInput 
            style={estilo_empresa.titulo}
            >Cadastro empresa 
            </TextInput>
          <TextInput 
            style={estilo_empresa.inputs}
            placeholder="Razão social"
            onChangeText={texto => setNome(texto)}
          />
          <TextInput 
            style={estilo_empresa.inputs}
            placeholder="CNPJ"
            onChangeText={texto => setCpf(int)}
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
            onChangeText={texto => setDtnasc(int)}
          />
          <Button
            title="Cadastre-se">
          </Button>
          
    
        </Fragment>
      )
    
};

export default Empresa;

