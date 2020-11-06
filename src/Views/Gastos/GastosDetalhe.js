import React, { useState } from 'react';
import { View, Picker } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import salvarGasto from '../../api/gastos';

import estilo_gastos from './estilo_gastos';

const GastosDetalhe = ({ route, navigation }) => {
  const [product, setProduct] = useState(route.params.product.id);
  const [tipo, setTipo] = useState(route.params.tipo);
  const [categoria, setCategoria] = useState(route.params.categoria);
  const [custo, setCusto] = useState(route.params.custo);
  const [recorrencia, setRecorrencia] = useState(route.params.recorrencia);

  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <View style={estilo_gastos.detalheForm}>
      <TextInput
        style={estilo_gastos.detalheFormInput}
        mode="outlined"
        label="Produto"
        value={product}
        onChangeText={value => setProduct(value)}
      >
      </TextInput>
      <Picker
        mode="dropdown"
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      <Button style={estilo_gastos.detalheSubmitButton} mode="contained"
      // onPress={() => salvarGasto()}
      >
        Salvar
      </Button>
    </View>
  )
}

export default GastosDetalhe;