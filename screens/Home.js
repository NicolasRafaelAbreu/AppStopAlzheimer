import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";

const Home = ( { navigation } ) => {
    return(
        
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.containerDos}>
                        <Text style={styles.textHeader}>Stop Alzheimer</Text>

                        <TouchableOpacity style={ [styles.buttonDefault, { backgroundColor: '#9EE259' }]}
                            onPress={ () => {
                                navigation.navigate('Dieta')
                            }}
                        >
                            <Text style={{ fontSize: 24 }}>Dieta</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={ [styles.buttonDefault, { backgroundColor: '#E259E2' }]}
                            onPress={ () => {
                                navigation.navigate('Ejercicio')
                            }}
                        >
                            <Text style={{ fontSize: 24 }}>Ejercicios</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={ [styles.buttonDefault, { backgroundColor: '#59E2D4' }]}
                            onPress={ () => {
                                navigation.navigate('MenteActiva')
                            }}
                        >
                            <Text style={{ fontSize: 24 }}>Mente Activa</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={ [styles.buttonDefault, { backgroundColor: '#E2B059' }]}
                            onPress={ () => {
                                navigation.navigate('VidaSocial')
                            }}
                        >
                            <Text style={{ fontSize: 24 }}>VidaSocial</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={ [styles.buttonDefault, { backgroundColor: '#0017E4' }]}
                            onPress={ () => {
                                navigation.navigate('Lectura')
                            }}
                        >
                            <Text style={{ fontSize: 24 }}>Lectura</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={ [styles.buttonDefault, { backgroundColor: '#E26B59' }]}
                            onPress={ () => {
                                navigation.navigate('Nosotros')
                            }}
                        >
                            <Text style={{ fontSize: 24 }}>Nosotros</Text>
                        </TouchableOpacity>

                        <Text style={styles.derechosAutor}>Creado por Nicolás Abreu</Text>
                    </View>
                </ScrollView>

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
    buttonDefault: {
        alignItems: 'center',
        width: '80%',
        marginVertical: 20,
        padding: 12,
        borderRadius: 8
    },
    derechosAutor: {
        color: '#fff',
        marginTop: 10,
        marginBottom: 50
    },
})

export default Home