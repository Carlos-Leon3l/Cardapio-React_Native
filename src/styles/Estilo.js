import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
    },
    scrollContainer: {
        padding: 16,
        paddingBottom: 24,
    },
    headerContainer: {
        marginBottom: 20,
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#FFB703",
        letterSpacing: 1,
        textAlign: "center",
    },
    headerSubtitle: {
        fontSize: 14,
        color: "#A0A0A0",
        marginTop: 4,
        textAlign: "center",
    },
    card: {
        backgroundColor: "#1E1E1E",
        borderRadius: 16,
        overflow: "hidden",
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#2E2E2E",
    },
    cardImage: {
        width: "100%",
        height: 180,
        resizeMode: "cover",
    },
    cardContent: {
        padding: 16,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFFFFF",
        marginBottom: 6,
    },
    cardDescription: {
        fontSize: 13,
        color: "#B0B0B0",
        lineHeight: 18,
        marginBottom: 14,
    },
    cardFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    cardPrice: {
        fontSize: 19,
        fontWeight: "bold",
        color: "#FFB703",
    },
    button: {
        backgroundColor: "#E63946",
        paddingVertical: 8,
        paddingHorizontal: 18,
        borderRadius: 20,
    },
    buttonText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 13,
    },
    appHeader: {
        backgroundColor: "#121212",
        paddingVertical: 12,
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#222222",
    },
    appHeaderTitle: {
        color: "#E63946",
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 2,
        textTransform: "uppercase",
    },
    appHeaderTag: {
        color: "#FFB703",
        fontSize: 11,
        fontWeight: "600",
        letterSpacing: 1,
        marginTop: 2,
    },
})
