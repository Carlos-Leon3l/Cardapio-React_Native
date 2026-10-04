import React from "react"
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native"
import Estilo from "../styles/Estilo"

export default () => {
    return (
        <View style={Estilo.container}>
            <ScrollView contentContainerStyle={Estilo.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={Estilo.headerContainer}>
                    <Text style={Estilo.headerTitle}>Pizzas Artesanais</Text>
                    <Text style={Estilo.headerSubtitle}>Massa de fermentação natural e assadas no forno a lenha</Text>
                </View>

                <View style={Estilo.card}>
                    <Image
                        source={{ uri: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&q=80" }}
                        style={Estilo.cardImage}
                    />
                    <View style={Estilo.cardContent}>
                        <Text style={Estilo.cardTitle}>Calabresa Especial</Text>
                        <Text style={Estilo.cardDescription}>
                            Molho de tomate artesanal, mussarela, fatias de calabresa defumada crocante, cebola roxa e orégano fresco.
                        </Text>
                        <View style={Estilo.cardFooter}>
                            <Text style={Estilo.cardPrice}>R$ 54,90</Text>
                            <TouchableOpacity style={Estilo.button}>
                                <Text style={Estilo.buttonText}>Adicionar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={Estilo.card}>
                    <Image
                        source={{ uri: "https://images.unsplash.com/photo-1573821663912-569905455b1c?w=500&q=80" }}
                        style={Estilo.cardImage}
                    />
                    <View style={Estilo.cardContent}>
                        <Text style={Estilo.cardTitle}>Quatro Queijos Suprema</Text>
                        <Text style={Estilo.cardDescription}>
                            Combinação refinada de mussarela de búfala, provolone defumado, gorgonzola cremoso e catupiry legítimo.
                        </Text>
                        <View style={Estilo.cardFooter}>
                            <Text style={Estilo.cardPrice}>R$ 59,90</Text>
                            <TouchableOpacity style={Estilo.button}>
                                <Text style={Estilo.buttonText}>Adicionar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={Estilo.card}>
                    <Image
                        source={{ uri: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=80" }}
                        style={Estilo.cardImage}
                    />
                    <View style={Estilo.cardContent}>
                        <Text style={Estilo.cardTitle}>Margherita Autêntica</Text>
                        <Text style={Estilo.cardDescription}>
                            Molho rústico de tomate pelado, fatias generosas de mussarela fresca, folhas de manjericão e azeite extravirgem.
                        </Text>
                        <View style={Estilo.cardFooter}>
                            <Text style={Estilo.cardPrice}>R$ 49,90</Text>
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
