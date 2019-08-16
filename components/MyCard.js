import React, {Component} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {Card, Subheading} from "react-native-paper";

class MyCard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={this.props.image}/>
                <Subheading style={styles.title}>{this.props.title}</Subheading>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'space-between',
        alignItems: "center",
        backgroundColor: "white",
        maxWidth: '42%',
        flexBasis: '50%',
        margin: 5,
        padding: 10,
        paddingTop: 30,
        height: 190,
        borderRadius: 15,
        shadowOffset: {width: 0, height: 17},
        shadowRadius: 23,
        shadowColor: "#e6e6e6",
        shadowOpacity: 1.0,
        elevation: 2,
        zIndex: 999
    },
    title: {
        textAlign: 'center'
    }
});


export default MyCard;