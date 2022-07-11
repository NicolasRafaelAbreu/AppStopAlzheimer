import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import *as Linking from 'expo-linking';
import *as WebBrowser from 'expo-web-browser';

const Nosotros = ( { navigation } ) => {
    return(
        <View style={styles.container}>
            <Text style={styles.textHeader}>Contactanos en:</Text>

            <View>
                <TouchableOpacity style={[ styles.boton,  {backgroundColor: '#68D293' } ]}
                    onPress={() => Linking.openURL('https://www.instagram.com/nico.abreu8/')}
                >
                    <Text style={styles.nombreBoton}>Instagram</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[ styles.boton,  {backgroundColor: '#68D293' } ]}
                    onPress={() => Linking.openURL('https://www.facebook.com/profile.php?id=100011117449607')}
                >
                    <Text style={styles.nombreBoton}>Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[ styles.boton,  {backgroundColor: '#68D293' } ]}
                    onPress={() => Linking.openURL('mailto:StopAlzheimer@outlook.es')}
                >
                    <Text style={styles.nombreBoton}>Correo</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[ styles.boton,  {backgroundColor: '#68D293' } ]}
                    onPress={() => Linking.openURL('https://nicolasrafaelabreu.github.io/PoliticaDePrivacidad/')}
                >
                    <Text style={styles.nombreBoton}>Política de Privacidad</Text>
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
        marginVertical: 60
    },
    boton: {
        alignItems: 'center',
        padding: 15,
        borderRadius: 12,
        marginVertical: 18
    },
    nombreBoton: {
        fontSize: 24
    },
})

export default Nosotros