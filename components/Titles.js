import React, {Component} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from "@expo/vector-icons";


class Titles extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
                <View style={styles.center}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 40,
        paddingTop: 100,
        paddingBottom: 30
    },
    title: {
        color: "black",
        maxWidth: 220,
        fontFamily: "sans-serif-light",
        fontSize: 28,
        fontWeight: "400",
        paddingBottom: 40
    },
    center: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },

});


export default Titles;