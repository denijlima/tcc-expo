import React, { Fragment, useEffect, useState } from 'react';
import { FlatList } from 'react-native'
import { List, Surface, FAB } from 'react-native-paper';

import listarGastos from '../../api/gastos';

import estilo_gastos from "./estilo_gastos";

const SPEND_MOCKUP = [
  {
    id: '1',
    empresa: 'Netflix',
    tipo: 'Assinatura mensal',
    categoria: 'Entreterimento',
    custo: '24,90',
    recorrencia: 'Todo dia 15',
    icon: 'netflix',
    descricao: 'Desc de um filme bom'
  },
  {
    id: '2',
    empresa: 'Amazon Web Services',
    tipo: 'Assinatura mensal',
    categoria: 'Outros',
    custo: '150',
    recorrencia: 'Todo dia 23',
    icon: 'aws',
    descricao: 'Melhor que Azure'
  },
  {
    id: '3',
    empresa: 'Netflix',
    tipo: 'Assinatura mensal',
    categoria: 'Entreterimento',
    custo: '24,90',
    recorrencia: 'Todo dia 15',
    icon: 'netflix',
    descricao: 'Desc de um filme bom'
  },
  {
    id: '4',
    empresa: 'Amazon Web Services',
    tipo: 'Assinatura mensal',
    categoria: 'Outros',
    custo: '150',
    recorrencia: 'Todo dia 23',
    icon: 'aws',
    descricao: 'Melhor que Azure'
  },
  {
    id: '5',
    empresa: 'Netflix',
    tipo: 'Assinatura mensal',
    categoria: 'Entreterimento',
    custo: '24,90',
    recorrencia: 'Todo dia 15',
    icon: 'netflix',
    descricao: 'Desc de um filme bom'
  },
  {
    id: '6',
    empresa: 'Amazon Web Services',
    tipo: 'Assinatura mensal',
    categoria: 'Outros',
    custo: '150',
    recorrencia: 'Todo dia 23',
    icon: 'aws',
    descricao: 'Melhor que Azure'
  },
  {
    id: '7',
    empresa: 'Netflix',
    tipo: 'Assinatura mensal',
    categoria: 'Entreterimento',
    custo: '24,90',
    recorrencia: 'Todo dia 15',
    icon: 'netflix',
    descricao: 'Desc de um filme bom'
  },
  {
    id: '8',
    empresa: 'Amazon Web Services',
    tipo: 'Assinatura mensal',
    categoria: 'Outros',
    custo: '150',
    recorrencia: 'Todo dia 23',
    icon: 'aws',
    descricao: 'Melhor que Azure'
  }]

const Gastos = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setdata] = useState([])

  useEffect(() => {
    // let gastos = listarGastos();
    setdata(SPEND_MOCKUP)
  })

  return (
    <Fragment>
      <FlatList data={data}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) =>
          <Surface style={(index === data.length - 1) ? estilo_gastos.lastSurface : estilo_gastos.surface}>
            <List.Item
              descriptionNumberOfLines={10}
              title={`${item.empresa}`}
              description={`${item.tipo}\n\nCategoria: ${item.categoria}\nCusto: R$ ${item.custo}\nRecorrência: ${item.recorrencia}\nDescrição:\n    ${item.descricao}`}
              left={props => <List.Icon {...props} style={estilo_gastos.icon} icon={item.icon} />}
              onPress={() => navigation.push('GastosDetalhe', { ...item })}
            />
          </Surface>
        }
      />
      <FAB
        style={estilo_gastos.fab}
        icon="plus"
        onPress={() => navigation.push('GastosDetalhe', {})}
      />
    </Fragment>
  )
}

export default Gastos;