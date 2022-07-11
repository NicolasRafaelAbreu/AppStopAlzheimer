import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const ElevacionRodilla = ( { navigation } ) => {
    return(
        <View style={styles.container}>
            <Text style={styles.textHeader}>Elevacion de rodilla</Text>
            <Image style={styles.logo} source={{uri: 'https://i.pinimg.com/originals/4a/3a/46/4a3a46222fd43770b2f765c3f9963113.gif'}} />
            
            <TouchableOpacity style={styles.boton}
                onPress={ () => {
                    navigation.navigate('Tobillos')
                }}
            >
                <Text style={styles.textBotnon}>Siguiente</Text>
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
        fontSize: 30,
        marginTop: 40,
        marginBottom: 20
    },
    logo: {
        width: '72%',
        height: '50%'
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

export default ElevacionRodilla