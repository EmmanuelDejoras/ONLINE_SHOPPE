import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>ONLINE_SHOPPE</Text>
            <TouchableOpacity style={styles.button}>
                <Link href="/signup" style={styles.link}>Sign Up</Link>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Link href="/login" style={styles.link}>Log In</Link>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Link href="/aboutus" style={styles.link}>About Us</Link>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Link href="/home" style={styles.link}>Go To Home</Link>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d3ffd3', // Light cyan background color
        padding: 20,
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#343a40',
    },
    button: {
        backgroundColor: '#ffffff', // White background for buttons
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 10,
        elevation: 3, // Shadow effect on Android
        shadowColor: '#000', // Shadow color for iOS
        shadowOffset: { width: 0, height: 2 }, // Shadow offset
        shadowOpacity: 0.1, // Shadow opacity
        shadowRadius: 2, // Shadow radius
        marginVertical: 10,
    },
    link: {
        fontSize: 18,
        color: '#2d3748', // Dark gray color
        textAlign: 'center',
        textDecorationLine: 'none',
    },
});