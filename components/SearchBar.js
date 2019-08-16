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
       borderRadius: 30,
       backgroundColor: '#ffffff',
       width: 320,
       height: 45
   },
    icon: {
        marginTop: 12,
        marginLeft: 20
    },
    searchInput: {
        marginLeft: 20,
        width: 300
    }
});


export default SearchBar;