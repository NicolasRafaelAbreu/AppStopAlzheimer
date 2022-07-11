import React from "react";
import * as Linking from 'expo-linking';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const VidaSocial = ( { navigation } ) => {
    return(
        <View style={styles.container}>
            <Text style={styles.textHeader}>VidaSocial</Text>

            <Text style={styles.textoPrincipal}>Relacionarse con otras personas nos ayuda a mantener las conexiones neuronales activas y resulta clave para nuestro bienestar. Por eso les quiero recomendar una página web que se llama "MEETUP" en esta página podras encontrar distintos grupos de personas de todas las edades con distintas actividades que te pueda imaginar. Si es de tú interes puedes descargarla para tu celular.</Text>

            <Text style={styles.nombreApp}>www.meetup.com</Text>
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
        marginBottom: 15
    },
    textoPrincipal: {
        color: '#fff',
        fontSize: 22,
        padding: 10
    },
    nombreApp: {
        color: '#D85252',
        fontSize: 24,
        marginTop: 15
    },
})

export default VidaSocial