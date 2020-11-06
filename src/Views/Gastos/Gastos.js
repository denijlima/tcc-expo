import React, { Fragment, useEffect, useState } from 'react';
import { FlatList } from 'react-native'
import { List, Surface, FAB, ActivityIndicator } from 'react-native-paper';

import { listarGastos } from '../../api/gastos';

import estilo_gastos from "./estilo_gastos";

const SPEND_MOCKUP = []

const Gastos = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setdata] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const response = await listarGastos();
      setdata(response.length > 0 ? response : SPEND_MOCKUP)

      setIsLoading(false);
    }
    if (data.length == 0)
      fetchData()
  }, [])

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
            </Surface>
          }
        />
        :
        <ActivityIndicator animating={true} size="large" style={estilo_gastos.loading}/>
      }
      <FAB
        style={estilo_gastos.fab}
        icon="plus"
        onPress={() => navigation.push('GastosDetalhe', {})}
      />
    </Fragment>
  )
}

export default Gastos;