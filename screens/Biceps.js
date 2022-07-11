import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const Biceps = ( { navigation } ) => {
    return(
        <View style={styles.container}>
            <Text style={styles.textHeader}>Biceps</Text>
            <Image style={styles.logo} source={{uri: 'https://media.giphy.com/media/4PTqYDTEeTBcs/giphy.gif'}} />
            
            <TouchableOpacity style={styles.boton}
                onPress={ () => {
                    navigation.navigate('Sentadillas')
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
        fontSize: 50,
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

export default Biceps