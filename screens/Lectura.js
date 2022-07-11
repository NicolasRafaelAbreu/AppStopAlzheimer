import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import *as Linking from 'expo-linking';
import *as WebBrowser from 'expo-web-browser';

const Lectura = ( { navigation } ) => {
    return(
            <View style={styles.container}>
                <Text style={styles.textHeader}>Lectura</Text>
        
                <TouchableOpacity style={styles.boton}
                    onPress={() => Linking.openURL('https://www.bing.com/news/search?q=pol%c3%adticas+del+mundo&qft=interval%3d%224%22&form=PTFTNR')}
                >
                    <Text style={styles.botonText}>Políticos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.boton}
                    onPress={() => Linking.openURL('https://www.bing.com/news/search?q=Noticia+de+ciencia+del+mundo&qft=sortbydate%3d%221%22&form=YFNR')}
                >
                    <Text style={styles.botonText}>Ciencía</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.boton}
                    onPress={() => Linking.openURL('https://www.bing.com/news/search?q=Noticia+de+Biolog%c3%ada+del+mundo&qft=sortbydate%3d%221%22&form=YFNR')}
                >
                    <Text style={styles.botonText}>Biología</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.boton}
                    onPress={() => Linking.openURL('https://www.bing.com/news/search?q=Noticia+de+Deportes+del+mundo&qft=sortbydate%3d%221%22&form=YFNR')}
                >
                    <Text style={styles.botonText}>Deportes</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.boton}
                    onPress={() => Linking.openURL('https://www.bing.com/news/search?q=Noticia+de+Economia+del+mundo&qft=sortbydate%3d%221%22&form=YFNR')}
                >
                    <Text style={styles.botonText}>Economía</Text>
                </TouchableOpacity>

                <View style={styles.botonVolver}>
                    <TouchableOpacity style={styles.botonStyle}
                        onPress={ () => {
                        navigation.navigate('Home')
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
        marginVertical: 40
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
    botonStyle: {
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

export default Lectura