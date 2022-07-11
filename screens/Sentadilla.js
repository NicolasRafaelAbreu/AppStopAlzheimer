import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const Sentadillas = ( { navigation } ) => {
    return(
        <View style={styles.container}>
            <Text style={styles.textHeader}>Sentadillas</Text>
            <Image style={styles.logo} source={{uri: 'https://th.bing.com/th/id/R.92f8d26dfc60f0f9d5046dfcaec8d236?rik=KLwMhZD05LzXwQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-lxoLfRA0QKo%2fUI6ERl31bpI%2fAAAAAAAAAJQ%2fJyeNP2HDtKU%2fs1600%2fsquat.gif&ehk=%2brquYcty1xmjTDXh7cuDqLv7LuRldD6MmzRloMgZ7Bc%3d&risl=&pid=ImgRaw&r=0'}} />
            
            <TouchableOpacity style={styles.boton}
                onPress={ () => {
                    navigation.navigate('ElevacionRodilla')
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

export default Sentadillas