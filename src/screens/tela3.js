import React from "react"
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native"
import Estilo from "../styles/Estilo"

export default () => {
    return (
        <View style={Estilo.container}>
            <ScrollView contentContainerStyle={Estilo.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={Estilo.headerContainer}>
                    <Text style={Estilo.headerTitle}>Bebidas Geladas</Text>
                    <Text style={Estilo.headerSubtitle}>Refrescos, sucos naturais feitos na hora e milkshakes cremosos</Text>
                </View>

                <View style={Estilo.card}>
                    <Image
                        source={{ uri: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&q=80" }}
                        style={Estilo.cardImage}
                    />
                    <View style={Estilo.cardContent}>
                        <Text style={Estilo.cardTitle}>Cola Gelada com Limão</Text>
                        <Text style={Estilo.cardDescription}>
                            Refrigerante de cola servido trincando de gelado, com cubos de gelo cristalinos e rodelas de limão siciliano.
                        </Text>
                        <View style={Estilo.cardFooter}>
                            <Text style={Estilo.cardPrice}>R$ 9,90</Text>
                            <TouchableOpacity style={Estilo.button}>
                                <Text style={Estilo.buttonText}>Adicionar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={Estilo.card}>
                    <Image
                        source={{ uri: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500&q=80" }}
                        style={Estilo.cardImage}
                    />
                    <View style={Estilo.cardContent}>
                        <Text style={Estilo.cardTitle}>Suco Natural de Laranja</Text>
                        <Text style={Estilo.cardDescription}>
                            Copo de 500ml de suco integral de laranjas selecionadas, sem adição de açúcar ou conservantes, bem refrescante.
                        </Text>
                        <View style={Estilo.cardFooter}>
                            <Text style={Estilo.cardPrice}>R$ 12,90</Text>
                            <TouchableOpacity style={Estilo.button}>
                                <Text style={Estilo.buttonText}>Adicionar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={Estilo.card}>
                    <Image
                        source={{ uri: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80" }}
                        style={Estilo.cardImage}
                    />
                    <View style={Estilo.cardContent}>
                        <Text style={Estilo.cardTitle}>Milkshake Belga Trufado</Text>
                        <Text style={Estilo.cardDescription}>
                            Sorvete artesanal batido com ganache de chocolate belga, chantilly fresco e raspas de chocolate meio amargo.
                        </Text>
                        <View style={Estilo.cardFooter}>
                            <Text style={Estilo.cardPrice}>R$ 22,90</Text>
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
