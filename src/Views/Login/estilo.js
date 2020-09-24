import {StyleSheet, Dimensions} from "react-native"

const largura = Dimensions.get("screen").width;
const estilo = StyleSheet.create({
    conteiner:{
        flexGrow:2,
        justifyContent:"center",
        alignItems:"center"
    },
    inputs:{
        width:largura*0.8,
        textAlign: "center",
        marginTop:20,
        marginBottom:20,
        fontSize:20,
        fontWeight: "bold",
        width: '65%',
        height: 40,
        textAlign:'center',
        borderWidth: 1,
        borderColor: 'green',
        backgroundColor: '#fff',
    },

    texto: {
        fontWeight: "bold",
        fontSize:15,
        marginTop: 30
    },

});     
export default estilo;