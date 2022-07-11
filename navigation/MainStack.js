import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "../screens/Login";
import Home from "../screens/Home";
import Dieta from "../screens/Dieta";
import Ejercicio from "../screens/Ejercicio";
import MenteActiva from "../screens/MenteActiva";
import VidaSocial from "../screens/VidaSocial";
import Nosotros from "../screens/Nosotros";
import Elevaciones from "../screens/Elevaciones";
import ElevacionesFrontales from "../screens/ElevacionesFrontales";
import Biceps from "../screens/Biceps";
import Sentadillas from "../screens/Sentadilla";
import ElevacionRodilla from "../screens/ElevacionRodilla";
import Tobillos from "../screens/Tobillos";
import Lunes from "../screens/Lunes";
import Martes from "../screens/Martes";
import Miercoles from "../screens/Miercoles";
import Jueves from "../screens/Jueves";
import Viernes from "../screens/Viernes";
import Lectura from "../screens/Lectura";

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, }}>

                <Stack.Screen 
                    name='Login'
                    component={Login}
                />

                <Stack.Screen 
                    name='Home'
                    component={Home}
                />

                <Stack.Screen 
                    name='Dieta'
                    component={Dieta}
                />

                <Stack.Screen 
                    name='Ejercicio'
                    component={Ejercicio}
                />

                <Stack.Screen 
                    name='MenteActiva'
                    component={MenteActiva}
                />

                <Stack.Screen 
                    name='VidaSocial'
                    component={VidaSocial}
                />

                <Stack.Screen 
                    name='Lectura'
                    component={Lectura}
                />

                <Stack.Screen 
                    name='Nosotros'
                    component={Nosotros}
                />

                <Stack.Screen 
                    name='Elevaciones'
                    component={Elevaciones}
                />

                <Stack.Screen 
                    name='ElevacionesFrontales'
                    component={ElevacionesFrontales}
                />

                <Stack.Screen 
                    name='Biceps'
                    component={Biceps}
                />

                <Stack.Screen 
                    name='Sentadillas'
                    component={Sentadillas}
                />

                <Stack.Screen 
                    name='ElevacionRodilla'
                    component={ElevacionRodilla}
                />

                <Stack.Screen 
                    name='Tobillos'
                    component={Tobillos}
                />

                <Stack.Screen 
                    name='Lunes'
                    component={Lunes}
                />

                <Stack.Screen 
                    name='Martes'
                    component={Martes}
                />

                <Stack.Screen 
                    name='Miercoles'
                    component={Miercoles}
                />

                <Stack.Screen 
                    name='Jueves'
                    component={Jueves}
                />

                <Stack.Screen 
                    name='Viernes'
                    component={Viernes}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack