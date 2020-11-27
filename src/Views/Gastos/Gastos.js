import React, { Fragment, useEffect, useState, fetchData } from 'react';
import { FlatList, Modal, Text, View, TouchableHighlight } from 'react-native'
import { List, Surface, FAB, ActivityIndicator } from 'react-native-paper';
import sugestionList from '../../utils/sugestion'

import { listarGastos } from '../../api/gastos';
import { buscarSugestao } from '../../api/sugestao';

import estilo_gastos from "./estilo_gastos";

const Gastos = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setdata] = useState([]);
  const [sugestoes, setSugestoes] = useState([])

  useEffect(() => {
    data.map((gasto) => { 
      const fetchData = async () => {
        
        let sugestao = await buscarSugestao(sugestionList[gasto.product.classification], gasto.cash, gasto.product.name, gasto.id)

        sugestao["id"] = gasto.id
        setSugestoes(...sugestoes, sugestao)
      }
      fetchData()
    })

  }, [data])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const response = await listarGastos();

      if (response.length > 0)
        setdata(response)


      // console.log(data)
     
        // para cada produto buscar uma sugestão e setar uma flag no produto ou criar um map de produto -> sugestão

      setIsLoading(false);
    }
    if (data.length == 0)
      fetchData()
  }, [])

  // TODO refatorar layout
  return (
    <Fragment>
      {!isLoading ?
        <FlatList data={data}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) =>
            <Surface style={(index === data.length - 1) ? estilo_gastos.lastSurface : estilo_gastos.surface}>
              <List.Item
                descriptionNumberOfLines={10}
                title={`${item.product.company}`}
                description={`Recorrente: ${item.recurrent ? 'Sim' : 'Não'}\n\nCategoria: ${item.product.classification}\nCusto: R$ ${item.cash}\nDescrição:\n    ${item.product.description}`}
                left={props => <List.Icon {...props} style={estilo_gastos.icon} icon={item.product.name.toLowerCase()} />}
                onPress={() => navigation.push('GastosDetalhe', { ...item })}
              />
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => alert('Pressed!')}>
                <View style={estilo_gastos.buttonSugestion}>
                  <Text style={estilo_gastos.buttonText}>Sugestão disponível</Text>
                  {console.log(sugestoes)}
                </View>
              </TouchableHighlight>

            </Surface>
          }
        />
        :
        <ActivityIndicator animating={true} size="large" style={estilo_gastos.loading} />
      }
      <FAB
        style={estilo_gastos.fab}
        icon="plus"
        onPress={() => navigation.push('GastosDetalhe', { product: { id: 0 } })}
      />
    </Fragment>
  )
}

export default Gastos;