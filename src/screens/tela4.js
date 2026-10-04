import React from "react"
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native"
import Estilo from "../styles/Estilo"

export default () => {
    return (
        <View style={Estilo.container}>
            <ScrollView contentContainerStyle={Estilo.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={Estilo.headerContainer}>
                    <Text style={Estilo.headerTitle}>Sobremesas Deliciosas</Text>
                    <Text style={Estilo.headerSubtitle}>Doces especiais para fechar a sua refeição com chave de ouro</Text>
                </View>

                <View style={Estilo.card}>
                    <Image
                        source={{ uri: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80" }}
                        style={Estilo.cardImage}
                    />
                    <View style={Estilo.cardContent}>
                        <Text style={Estilo.cardTitle}>Petit Gâteau Quente</Text>
                        <Text style={Estilo.cardDescription}>
                            Bolinho de chocolate com recheio cremoso e quente que escorre, servido com bola de sorvete de baunilha de Madagascar.
                        </Text>
                        <View style={Estilo.cardFooter}>
                            <Text style={Estilo.cardPrice}>R$ 26,90</Text>
                            <TouchableOpacity style={Estilo.button}>
                                <Text style={Estilo.buttonText}>Adicionar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={Estilo.card}>
                    <Image
                        source={{ uri: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&q=80" }}
                        style={Estilo.cardImage}
                    />
                    <View style={Estilo.cardContent}>
                        <Text style={Estilo.cardTitle}>Taça Sundae Suprema</Text>
                        <Text style={Estilo.cardDescription}>
                            Três bolas de sorvete premium com calda quente de caramelo salgado, castanhas tostadas, chantilly e cereja.
                        </Text>
                        <View style={Estilo.cardFooter}>
                            <Text style={Estilo.cardPrice}>R$ 24,90</Text>
                            <TouchableOpacity style={Estilo.button}>
                                <Text style={Estilo.buttonText}>Adicionar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={Estilo.card}>
                    <Image
                        source={{ uri: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=500&q=80" }}
                        style={Estilo.cardImage}
                    />
                    <View style={Estilo.cardContent}>
                        <Text style={Estilo.cardTitle}>Churros com Doce de Leite</Text>
                        <Text style={Estilo.cardDescription}>
                            Porção com quatro churros crocantes passados no açúcar e canela, acompanhados de pote de doce de leite cremoso de Minas.
                        </Text>
                        <View style={Estilo.cardFooter}>
                            <Text style={Estilo.cardPrice}>R$ 19,90</Text>
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
