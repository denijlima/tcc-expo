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

  const hasOptimalPrice = (price) => Math.sign(price) == 1 ? true : false

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const response = await listarGastos();

      if (response.length > 0) {
        response.map(async gasto => {
          let sugestao = await buscarSugestao(sugestionList[gasto.product.classification], gasto.cash, gasto.product.name, gasto.id);
          return Object.assign(gasto, { sugestao: sugestao })
        })
        setdata(response);
      }

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
                onPress={() => console.log(item)}>
                <View style={item.sugestao && hasOptimalPrice(item.sugestao.price_rate) ? estilo_gastos.buttonSugestion : estilo_gastos.buttonSugestionHasOptimal}>
                  <Text style={estilo_gastos.buttonText}>
                    {item.sugestao && hasOptimalPrice(item.sugestao.price_rate) ? 
                      `Melhor oferta! ${item.sugestao.company}: ${item.sugestao.price_rate}% OFF`
                      :
                      'Já está economizando!'}
                  </Text>
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