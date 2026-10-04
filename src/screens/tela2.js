import React from "react"
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native"
import Estilo from "../styles/Estilo"

export default () => {
    return (
        <View style={Estilo.container}>
            <ScrollView contentContainerStyle={Estilo.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={Estilo.headerContainer}>
                    <Text style={Estilo.headerTitle}>Burgers Artesanais</Text>
                    <Text style={Estilo.headerSubtitle}>Blend 100% bovino grelhado no fogo com pão brioche amanteigado</Text>
                </View>

                <View style={Estilo.card}>
                    <Image
                        source={{ uri: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80" }}
                        style={Estilo.cardImage}
                    />
                    <View style={Estilo.cardContent}>
                        <Text style={Estilo.cardTitle}>Smash Burger Supremo</Text>
                        <Text style={Estilo.cardDescription}>
                            Dois burgers de 90g prensados com crostinha crocante, queijo prato derretido, picles caseiro e molho especial no pão brioche.
                        </Text>
                        <View style={Estilo.cardFooter}>
                            <Text style={Estilo.cardPrice}>R$ 34,90</Text>
                            <TouchableOpacity style={Estilo.button}>
                                <Text style={Estilo.buttonText}>Adicionar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={Estilo.card}>
                    <Image
                        source={{ uri: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80" }}
                        style={Estilo.cardImage}
                    />
                    <View style={Estilo.cardContent}>
                        <Text style={Estilo.cardTitle}>Bacon Cheddar Melt</Text>
                        <Text style={Estilo.cardDescription}>
                            Hambúrguer suculento de 180g, generosas tiras de bacon crocante, creme de cheddar inglês e cebola caramelizada.
                        </Text>
                        <View style={Estilo.cardFooter}>
                            <Text style={Estilo.cardPrice}>R$ 38,90</Text>
                            <TouchableOpacity style={Estilo.button}>
                                <Text style={Estilo.buttonText}>Adicionar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={Estilo.card}>
                    <Image
                        source={{ uri: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&q=80" }}
                        style={Estilo.cardImage}
                    />
                    <View style={Estilo.cardContent}>
                        <Text style={Estilo.cardTitle}>Monster Double Burger</Text>
                        <Text style={Estilo.cardDescription}>
                            Dois blends de 180g, quatro fatias de queijo gouda, onion rings crocantes, barbecue defumado e maionese de alho negro.
                        </Text>
                        <View style={Estilo.cardFooter}>
                            <Text style={Estilo.cardPrice}>R$ 44,90</Text>
                            <TouchableOpacity style={Estilo.button}>
                                <Text style={Estilo.buttonText}>Adicionar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
