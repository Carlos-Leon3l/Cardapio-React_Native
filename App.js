import React from "react"
import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import Estilo from "./src/styles/Estilo"
import Tela1 from "./src/screens/tela1"
import Tela2 from "./src/screens/tela2"
import Tela3 from "./src/screens/tela3"
import Tela4 from "./src/screens/tela4"

const Tab = createBottomTabNavigator()

export default () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#121212" }}>
            <View style={Estilo.appHeader}>
                <Text style={Estilo.appHeaderTitle}>FATEC Fast Food</Text>
                <Text style={Estilo.appHeaderTag}>CARDÁPIO DIGITAL</Text>
            </View>
            <NavigationIndependentTree>
                <NavigationContainer>
                    <Tab.Navigator
                        screenOptions={{
                            headerShown: false,
                            tabBarStyle: {
                                backgroundColor: "#121212",
                                borderTopWidth: 1,
                                borderTopColor: "#222222",
                                height: 64,
                                paddingBottom: 8,
                                paddingTop: 6,
                            },
                            tabBarActiveTintColor: "#E63946",
                            tabBarInactiveTintColor: "#888888",
                            tabBarLabelStyle: {
                                fontSize: 11,
                                fontWeight: "bold",
                            },
                        }}
                    >
                        <Tab.Screen
                            name="Pizzas"
                            component={Tela1}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="pizza" color={color} size={size} />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Burgers"
                            component={Tela2}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="hamburger" color={color} size={size} />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Bebidas"
                            component={Tela3}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="cup" color={color} size={size} />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Sobremesas"
                            component={Tela4}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="ice-cream" color={color} size={size} />
                                ),
                            }}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
            </NavigationIndependentTree>
        </SafeAreaView>
    )
}
