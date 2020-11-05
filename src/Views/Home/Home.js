import React, { Fragment, useState } from 'react';
import { Provider as PaperProvider, BottomNavigation } from 'react-native-paper';

import Produto from "../Produto/Produto";
import Gastos from "../Gastos/Gastos";


const Home = ({navigation}) => {
  const [index, setIndex] = useState(1);
  const [routes] = useState([
    { key: 'produtos', title: 'Produtos', icon: 'wallet' },
    { key: 'gastos', title: 'Gastos', icon: 'cash-multiple' }
  ]);

  const ProdutoRoute = () => <Produto />;
  
  const GastosRoute = () => <Gastos navigation={navigation} />;

  const renderScene = BottomNavigation.SceneMap({
    produtos: ProdutoRoute,
    gastos: GastosRoute
  });

  return (
    <Fragment>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </Fragment>
  );
};

export default Home;
