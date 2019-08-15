import React, {Component} from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

class SearchBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Ionicons name={"md-search"} size={24} color="gray" style={styles.icon}/>
                <TextInput placeholder="Search" style={styles.searchInput}>

                </TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       flexDirection: 'row',
       alignContent: 'center',
       marginTop: 200,
       borderRadius: 30,
       backgroundColor: '#ffffff',
       width: 300,
       height: 50
   },
    icon: {
        marginTop: 12,
        marginLeft: 20
    },
    searchInput: {
        color: '#c6c6c7',
        marginLeft: 20
    }
});


export default SearchBar;