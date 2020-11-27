import { StyleSheet } from 'react-native';

const estilo_gastos = StyleSheet.create({
  surface: {
    flex: 1,
    flexDirection: 'column',
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
    padding: 20
  },
  detalheFormInput: {
    marginTop: 10,
    marginHorizontal: 20
  },
  detalheSubmitButton: {
    marginHorizontal: 20,
    marginTop: 30
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  },
  detalheLabelValue: {
    marginTop: 10,
    marginHorizontal: 20,
    display: "flex",
    flexDirection: "row"
  },
  buttonSugestionHasOptimal: {
    height: 40,
    width: '100%',
    borderRadius: 4,
    backgroundColor: '#00b800',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonSugestion: {
    height: 40,
    width: '100%',
    borderRadius: 4,
    backgroundColor: '#6200EE',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 16
  }
});

export default estilo_gastos