import React, { useState, useEffect, Fragment } from 'react';
import { View, Picker } from 'react-native';
import { TextInput, Button, Checkbox, Text } from 'react-native-paper';

import { cadastrarProduto } from '../../api/produto';

import { listarClassificacao } from '../../api/produto';
import { listarEmpresa } from '../../api/produto';

import estilo_produto from './estilo_produto';

const Produto = ({navigation }) => {
  const [classification, setClassification] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");

  const [data, setdata] = useState([])
  const [empresa, setEmpresa] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      const response = await listarClassificacao();
      const empresa = await listarEmpresa();
      setdata(response)
      setEmpresa(empresa)
    }
    if (data.length == 0)
      fetchData()
  }, [])

  return (
    <View style={estilo_produto.detalheForm}>
      <View>
        <Text>
          Classificação
        </Text>
        <Picker
          style={estilo_produto.detalheForm}
          mode="dialog"
          selectedValue={classification}
          onValueChange={(itemValue, itemIndex) => setClassification(itemValue)}
        >
          {data && data.length > 0 ?
            data.map((val, index) =>
              <Picker.Item key={val.id} label={val.name} value={val.id} />
            )
            :
            <Picker.Item label="Carregando" value="0" />
          }
        </Picker>
        
        <Text>
          Empresa
        </Text>
        <Picker
          style={estilo_produto.detalheForm}
          mode="dropdown"
          selectedValue={company}
          onValueChange={(itemValue, itemIndex) => setCompany(itemValue)}
        >
          {empresa && empresa.length > 0 ?
            empresa.map((val, index) =>
              <Picker.Item key={val.id} label={val.name} value={val.id} />
            )
            :
            <Picker.Item label="Carregando" value="0" />
          }
        </Picker>
      </View>

      <TextInput
        style={estilo_produto.detalheFormInput}
        multiline
        mode="outlined"
        label="Nome"
        value={name}
        onChangeText={value => setName(value)}
      />
      <TextInput
        style={estilo_produto.detalheFormInput}
        mode="outlined"
        label="Valor"
        type="number"
        value={price && price + ""}
        onChangeText={value => setPrice(parseInt(value))}
      />
  
      <TextInput
        style={estilo_produto.detalheFormInput}
        multiline
        mode="outlined"
        label="Descrição"
        value={description}
        onChangeText={value => setDescription(value)}
      />
      <Button style={estilo_produto.detalheSubmitButton} mode="contained"
      onPress={async () => {
        const status = await cadastrarProduto(description, classification, company, name, price)
        status == '200' ? navigation.goBack : {}
      }}
      >
        Salvar
      </Button>
    </View>
  )
}

export default Produto;