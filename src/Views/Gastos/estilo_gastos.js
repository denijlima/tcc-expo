import { StyleSheet } from 'react-native';

const estilo_gastos = StyleSheet.create({
  surface: {
    marginTop: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 2
  },
  lastSurface: {
    marginTop: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 10
  },
  icon: {
    height: 60,
    width: 60
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  detalheForm: {
    padding:20
  },
  detalheFormInput: {
    marginTop: 10,
    marginHorizontal: 20
  },
  detalheSubmitButton: {
    marginHorizontal: 20,
    marginTop: 30
  }
});

export default estilo_gastos