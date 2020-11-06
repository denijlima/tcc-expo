import React, { useState, useEffect, Fragment } from 'react';
import { View, Picker } from 'react-native';
import { TextInput, Button, Checkbox, Text } from 'react-native-paper';

import { salvarGasto } from '../../api/gastos';
import { listarProdutos } from '../../api/produto';

import estilo_gastos from './estilo_gastos';

const GastosDetalhe = ({ route, navigation }) => {
  const [product, setProduct] = useState(route.params.product.id || 5);
  const [description, setDescription] = useState(route.params.description || "");
  const [cash, setCash] = useState(route.params.cash || "0");
  const [recurrent, setRecurrent] = useState(route.params.recurrent || false);

  const [data, setdata] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await listarProdutos();
      setdata(response)
    }
    if (data.length == 0)
      fetchData()
  }, [])

  return (
    <View style={estilo_gastos.detalheForm}>
      <View>
        <Text>
          Produto
        </Text>
        <Picker
          style={estilo_gastos.detalheForm}
          mode="dropdown"
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
      </View>
      <TextInput
        style={estilo_gastos.detalheFormInput}
        mode="outlined"
        label="Valor"
        type="number"
        value={cash && cash + ""}
        onChangeText={value => setCash(parseInt(value))}
      />
      <TextInput
        style={estilo_gastos.detalheFormInput}
        multiline
        mode="outlined"
        label="Descrição"
        value={description}
        onChangeText={value => setDescription(value)}
      />
      <View style={estilo_gastos.detalheLabelValue}>
      <Text>
        Recorrente
      </Text>
      <Checkbox
      status={recurrent ? 'checked' : 'unchecked'}
      onPress={() => {
        setRecurrent(!recurrent);
      }}
    /></ View>
      <Button style={estilo_gastos.detalheSubmitButton} mode="contained"
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

export default GastosDetalhe;