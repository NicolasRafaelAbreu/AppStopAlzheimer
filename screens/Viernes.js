import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";

const Viernes = ( { navigation } ) => {
    return(
            <View style={styles.container}>
                <Text style={styles.textHeader}>Viernes</Text>
                <Text style={styles.subTitulo}>Restos de Hoy!!</Text>

                <View>
                    <Text style={styles.mensaje}>1) Lee las noticias.</Text>
                    <Text style={styles.mensaje}>2) Recuerda tod lo que hicistes el Miercoles.</Text>
                    <Text style={styles.mensaje}>3) Escribe la receta de una comida que te guste, paso por paso.</Text>
                    <Text style={styles.mensaje}>4) Juega y completa una sopa de letras.</Text>
                </View>

                <View style={styles.botonVolver}>
                    <TouchableOpacity style={styles.boton}
                        onPress={ () => {
                            navigation.navigate('MenteActiva')
                        }}
                    >
                        <Text style={styles.textBotnon}>Volver</Text>
                    </TouchableOpacity>
                </View>

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
        fontSize: 38,
        marginTop: 40,
        marginBottom: 10
    },
    subTitulo: {
        color: '#DB5454',
        fontWeight: 'bold',
        marginVertical: 10,
        fontSize: 28,
    },
    mensaje: {
        color: '#fff',
        fontSize: 18,
        marginVertical: 10,
        padding: 10
    },
    botonVolver: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    boton: {
        alignItems: 'center',
        backgroundColor: '#58D883',
        padding: 12,
        borderRadius: 8,
        marginVertical: 30,
        width: '50%',    
    },
    textBotnon: {
        fontSize: 18
    },
})

export default Viernes