import {StyleSheet, Dimensions} from "react-native"

const largura = Dimensions.get("screen").width;
const estilo_empresa = StyleSheet.create({
    conteiner:{
        flexGrow:2,
        justifyContent:"center",
        alignItems:"center"
    },
    inputs:{
        width:largura*0.8,
        textAlign: "center",
        marginTop:10,
        marginBottom:10,
        fontSize:20,
        fontWeight: "bold",
        width: '65%',
        height: 40,
        borderWidth: 1,
        borderColor: 'green',
        backgroundColor: '#fff',
        justifyContent:"center",
        alignItems:"center",
        marginLeft:60
    },

    texto: {
        fontWeight: "bold",
        fontSize:25,
        marginBottom:50
    },


    titulo: {
        fontWeight: "bold",
        fontSize:25,
        marginBottom:50,
        textAlign:'center',
        marginTop:100,
    },


});     
export default estilo_empresa;