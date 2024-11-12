import { StyleSheet, Text, View } from "react-native";
import React from 'react';

const AboutUs = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About Us</Text>
            <Text style={styles.description}>
                We are a passionate team dedicated to delivering exceptional experiences for our users.
                Our mission is to innovate and provide top-quality services that meet the needs of our
                community. With years of experience and a commitment to excellence, we strive to make a
                positive impact in everything we do.
            </Text>
            <Text style={styles.sectionTitle}>Our Values</Text>
            <Text style={styles.description}>
                - Integrity: We uphold the highest standards of integrity in all of our actions.{"\n"}
                - Innovation: We embrace change and seek out new solutions.{"\n"}
                - Customer Focus: We prioritize the needs of our customers in everything we do.
            </Text>
            <Text style={styles.footer}>
                Contact us: info@example.com
            </Text>
        </View>
    );
};

export default AboutUs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#333',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        lineHeight: 22,
        color: '#555',
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center',
        color: '#333',
    },
    footer: {
        fontSize: 14,
        textAlign: 'center',
        color: '#777',
    },
});