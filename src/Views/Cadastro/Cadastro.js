import * as React from "react";
import { View, Text, TextInput, Button } from 'react-native'
import estilo_cadastro from "./estilo_cadastro";
import estilo from "../Login/estilo";


export default function Cadastro(){
    return (
       <React.Fragment>
        <View style={estilo_cadastro.conteiner}>
        <View>
            <Text style={estilo_cadastro.texto} >Cadastre-se</Text>
        </View>

        <TextInput 
        style={estilo_cadastro.inputs}
        placeholder="Nome"
        />
        <TextInput 
        style={estilo_cadastro.inputs}
        placeholder="Sobrenome"
        />
        <TextInput 
        style={estilo_cadastro.inputs}
        placeholder="Data nascimento"
        />
        
        <TextInput 
        style={estilo_cadastro.inputs}
        placeholder="e-mail"
        />
        <TextInput 
        style={estilo_cadastro.inputs}
        placeholder="login"
        />
        <TextInput 
        style={estilo_cadastro.inputs}
        placeholder="senha"
        />
        <Button 
         style={estilo_cadastro.botao} 
         title="Cadastrar" 
        //  onPress={} 
         />
        </View>
       </React.Fragment>
    )



    
}