import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Ejercicio = ( { navigation } ) => {
    return(
        <View style={styles.container}>
            <Text style={styles.textHeader}>Ejercicio</Text>
            <Text style={styles.mensajePrincipal}>Todos estos ejercicios estan pensado para que sean 4 series de 10 repeticiónes, con dos botellas de 500 ml. Recuerda que se pueden adaptar a su forma física.</Text>
            <TouchableOpacity style={styles.boton}
                onPress={ () => {
                    navigation.navigate('Elevaciones')
                }}
            >
                <Text style={styles.textBotnon}>Comenzar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003768',
      alignItems: 'center'
    },
    textHeader: {
        color: '#3CD4CA',
        fontSize: 50,
        marginTop: 60,
        marginBottom: 20
    },
    mensajePrincipal: {
        color: '#fff',
        fontSize: 24,
        padding: 14,
        marginTop: 30
    },
    boton: {
        backgroundColor: '#58D883',
        padding: 12,
        borderRadius: 8,
        marginVertical: 60
    },
    textBotnon: {
        fontSize: 18
    },
})

export default Ejercicio