import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const Tobillos = ( { navigation } ) => {
    return(
        <View style={styles.container}>
            <Text style={styles.textHeader}>Elevacion de tobillos</Text>
            <Text style={styles.subTitulo}>(Sin peso)</Text>
            <Image style={styles.logo} source={{uri: 'https://th.bing.com/th/id/R.73f40671ebf33d13c46f469787207db3?rik=RFv4aLVmpwNyHg&riu=http%3a%2f%2fwww.yomeentreno.com%2fwp-content%2fuploads%2f2018%2f03%2fSeated_Calf_Raises.gif&ehk=SuQOAh7xhnBvKLjsLvttL%2bs%2bZWtyvkvn85ACb1qAafg%3d&risl=&pid=ImgRaw&r=0'}} />
            
            <TouchableOpacity style={styles.boton}
                onPress={ () => {
                    navigation.navigate('Home')
                }}
            >
                <Text style={styles.textBotnon}>Terminar</Text>
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
    subTitulo: {
        color: '#fff',
        marginBottom: 20,
        fontSize: 24
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

export default Tobillos