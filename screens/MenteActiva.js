import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";

const MenteActiva = ( { navigation } ) => {
    return(
            <View style={styles.container}>
                <ScrollView >
                    <View style={styles.containerDos}>
                        <Text style={styles.textHeader}>MenteActiva</Text>
                        <Text style={styles.mensaje}>Mente activa es un espacio donde podrás encontrar 4 ejercicios mentales para realizar cada día de la semana. ¡Allá vamos!!</Text>

                        <TouchableOpacity style={styles.boton}
                            onPress={ () => {
                                navigation.navigate('Lunes')
                            }}
                        >
                            <Text style={styles.botonText}>Lunes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.boton}
                            onPress={ () => {
                                navigation.navigate('Martes')
                            }}
                        >
                            <Text style={styles.botonText}>Martes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.boton}
                            onPress={ () => {
                                navigation.navigate('Miercoles')
                            }}
                        >
                            <Text style={styles.botonText}>Miercoles</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.boton}
                            onPress={ () => {
                                navigation.navigate('Jueves')
                            }}
                        >
                            <Text style={styles.botonText}>Jueves</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.boton}
                            onPress={ () => {
                                navigation.navigate('Viernes')
                            }}
                        >
                            <Text style={styles.botonText}>Viernes</Text>
                        </TouchableOpacity>

                        <View style={styles.botonVolver}>
                            <TouchableOpacity style={styles.botonStyles}
                                onPress={ () => {
                                navigation.navigate('Home')}}
                            >
                                <Text style={styles.textBotnon}>Volver</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

            </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003768',
      alignItems: 'center'
    },
    containerDos: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 50
    },
    textHeader: {
        color: '#3CD4CA',
        fontSize: 38,
        marginVertical: 40
    },
    mensaje: {
        color: '#fff',
        padding: 18,
        fontSize: 18,
        marginBottom: 10
    },
    boton: {
        backgroundColor: '#3CD4CA',
        width: '50%',
        padding: 12,
        alignItems: 'center',
        marginVertical: 12,
        borderRadius: 8
    },
    botonText: {
        fontSize: 20
    },
    botonVolver: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    botonStyles: {
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

export default MenteActiva