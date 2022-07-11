import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Login = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.nombreText}>STOP ALZHEIMER</Text>
            <Text style={styles.saludo}>Bienvenidos</Text>
            <TouchableOpacity style={styles.boton}
                onPress={ () => {                    
                    navigation.navigate('Home')
                }}
            >
                <Text style={styles.bontonText}>Ingresar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003768',
      alignItems: 'center',
      justifyContent: 'center'
    },
    nombreText: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold'
    },
    saludo: {
        color: '#3CD4CA',
        marginTop: 12,
        fontSize: 30,
        fontWeight: 'bold'
    },
    boton: {
        backgroundColor: '#D75656',
        width: '30%',
        padding: 10,
        marginTop: 40,
        alignItems: 'center',
        borderRadius: 12
    },
    bontonText: {
        fontSize: 18
    },
  });

export default Login