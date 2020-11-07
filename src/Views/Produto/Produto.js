import React, { useState, useEffect, Fragment } from 'react';
import { View, Picker } from 'react-native';
import { TextInput, Button, Checkbox, Text } from 'react-native-paper';

import { salvarGasto } from '../../api/produto';
import { listarProdutos } from '../../api/produto';
import { listarClassificacao } from '../../api/produto';
import { listarEmpresa } from '../../api/produto';

import estilo_produto from './estilo_produto';

const Produto = ({navigation }) => {
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [cash, setCash] = useState("");
  const [recurrent, setRecurrent] = useState("");

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
          selectedValue={product}
          onValueChange={(itemValue, itemIndex) => setProduct(itemValue)}
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
          selectedValue={product}
          onValueChange={(itemValue, itemIndex) => setProduct(itemValue)}
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
        value={description}
        onChangeText={value => setDescription(value)}
      />
      <TextInput
        style={estilo_produto.detalheFormInput}
        mode="outlined"
        label="Valor"
        type="number"
        value={cash && cash + ""}
        onChangeText={value => setCash(parseInt(value))}
      />
  
      <TextInput
        style={estilo_produto.detalheFormInput}
        multiline
        mode="outlined"
        label="Descrição"
        value={description}
        onChangeText={value => setDescription(value)}
      />
      <View style={estilo_produto.detalheLabelValue}>
      <Text>
        Recorrente
      </Text>
      <Checkbox
      status={recurrent ? 'checked' : 'unchecked'}
      onPress={() => {
        setRecurrent(!recurrent);
      }}
    /></ View>
      <Button style={estilo_produto.detalheSubmitButton} mode="contained"
      onPress={async () => {
        const status = await salvarGasto(product, description, cash, recurrent)
        status == '200' ? navigation.goBack : {}
      }}
      >
        Salvar
      </Button>
    </View>
  )
}

export default Produto;