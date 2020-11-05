import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import salvarGasto from '../../api/gastos';

import estilo_gastos from './estilo_gastos';

const GastosDetalhe = ({ route, navigation }) => {
  const [empresa, setEmpresa] = useState(route.params.empresa);
  const [tipo, setTipo] = useState(route.params.tipo);
  const [categoria, setCategoria] = useState(route.params.categoria);
  const [custo, setCusto] = useState(route.params.custo);
  const [recorrencia, setRecorrencia] = useState(route.params.recorrencia);

  return (
    <View style={estilo_gastos.detalheForm}>
      <TextInput
        style={estilo_gastos.detalheFormInput}
        mode="outlined"
        label="Empresa"
        value={empresa}
        onChangeText={value => setEmpresa(value)}
      >
      </TextInput>
      <TextInput
        style={estilo_gastos.detalheFormInput}
        mode="outlined"
        label="Tipo"
        value={tipo}
        onChangeText={value => setTipo(value)}
      >
      </TextInput>
      <TextInput
        style={estilo_gastos.detalheFormInput}
        mode="outlined"
        label="Categoria"
        value={categoria}
        onChangeText={value => setCategoria(value)}
      >
      </TextInput>
      <TextInput
        style={estilo_gastos.detalheFormInput}
        mode="outlined"
        label="Custo"
        value={custo}
        onChangeText={value => setCusto(value)}
      >
      </TextInput>
      <TextInput
        style={estilo_gastos.detalheFormInput}
        mode="outlined"
        label="Recorrência"
        value={recorrencia}
        onChangeText={value => setRecorrencia(value)}
      >
      </TextInput>
      <Button style={estilo_gastos.detalheSubmitButton} mode="contained"
      // onPress={() => salvarGasto()}
      >
        Salvar
      </Button>
    </View>
  )
}

export default GastosDetalhe;