import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";

const Dieta = ( { navigation } ) => {
    return(
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.textHeader}>Dieta</Text>
            
            <View style={styles.mensaje}>
                <Text style={styles.mensajePrincipal}>
                    Todas estas recomendaciones no tienen por qué ser como dicen acá usted realícelas a su gusto y teniendo precaución con las distintas enfermedades como lo son diabetes, colesterol, hipertensión, etc.
                </Text>
                <Text style={[ styles.mensajePrincipal, { fontWeight: 'bold' }]}>Consulte con su médico de cabecera</Text>

                <Text style={styles.titulo}>Recomendaciones</Text>

                <Text style={styles.contenidoTexto}>1) Reducir la ingesta de grasas saturadas y grasas trans. </Text>
                <Text style={styles.contenidoTexto}>        -Helados</Text>
                <Text style={styles.contenidoTexto}>        -Magdalenas</Text>
                <Text style={styles.contenidoTexto}>        -Hamburguesas</Text>
                <Text style={styles.contenidoTexto}>        -Papas fritas</Text>
                <Text style={styles.contenidoTexto}>        -Poyo frito</Text>
                <Text style={styles.contenidoTexto}>2) Remplazar la carne y los lácteos por verduras, legumbres, frutas y cereales integrales como base de la dieta. </Text>
                <Text style={styles.contenidoTexto}>3) Tomar vitamina E como parte de la dieta, y no en forma de suplementos.</Text>
                <Text style={styles.contenidoTexto}>        -Palta</Text>
                <Text style={styles.contenidoTexto}>        -Mango</Text>
                <Text style={styles.contenidoTexto}>        -Kiwi</Text>
                <Text style={styles.contenidoTexto}>        -Almendras</Text>
                <Text style={styles.contenidoTexto}>        -Acelga</Text>
                <Text style={styles.contenidoTexto}>        -Kale</Text>
                <Text style={styles.contenidoTexto}>        -Espinaca</Text>
                <Text style={styles.contenidoTexto}>        -Brócoli</Text>
                <Text style={styles.contenidoTexto}>4) Cubrir necesidades diarias de vitamina B12. </Text>
                <Text style={styles.contenidoTexto}>        -Almejas y otros moluscos</Text>
                <Text style={styles.contenidoTexto}>        -Hígado de ternera</Text>
                <Text style={styles.contenidoTexto}>        -Huevos</Text>
                <Text style={styles.contenidoTexto}>        -Palta</Text>
            </View>

            <View style={styles.botonVolver}>
                <TouchableOpacity style={styles.boton}
                    onPress={ () => {
                        navigation.navigate('Home')
                    }}
                >
                    <Text style={styles.textBotnon}>Volver</Text>
                </TouchableOpacity>
            </View>

        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003768',
      alignItems: 'center',
    },
    textHeader: {
        color: '#3CD4CA',
        fontSize: 38,
        marginTop: 40,
        marginBottom: 20
    },
    mensaje: {
        padding: 8
    },
    mensajePrincipal: {
        color: '#fff',
        fontSize: 18
    },
    titulo: {
        color: '#DB5454',
        fontWeight: 'bold',
        marginVertical: 20,
        fontSize: 28,
        textAlign: 'center'
    },
    contenidoTexto: {
        color: '#E2CECE',
        fontSize: 18,
        marginBottom: 8
    },
    botonVolver: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    boton: {
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

export default Dieta