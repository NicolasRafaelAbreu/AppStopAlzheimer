import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const ElevacionesFrontales = ( { navigation } ) => {
    return(
        <View style={styles.container}>
            <Text style={styles.textHeader}>Elevaciones Frontales</Text>
            <Image style={styles.logo} source={{uri: 'https://th.bing.com/th/id/R.089190232e18be5e9f9ef77c8284e8c1?rik=yqw3nNuOljf%2f%2fA&riu=http%3a%2f%2fvivisaludable.com%2fwp-content%2fuploads%2f2016%2f06%2fLevantamiento-de-mancuerna-frontal.gif&ehk=fheTXhRiuI0663mI7AWlein%2bag3xe13HCVsTZ47Ms2I%3d&risl=&pid=ImgRaw&r=0'}} />
            
            <TouchableOpacity style={styles.boton}
                onPress={ () => {
                    navigation.navigate('Biceps')
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
        height: '50%',
        marginLeft: 40
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

export default ElevacionesFrontales