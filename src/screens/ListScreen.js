import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";


const ListScreen= () =>{
    const friends = [
        {name: 'friend #01', age: 20},
        {name: 'friend #02', age: 21},
        {name: 'friend #03', age: 22},
        {name: 'friend #04', age: 23},
        {name: 'friend #05', age: 24},
        {name: 'friend #06', age: 25},
        {name: 'friend #07', age: 26},
        {name: 'friend #08', age: 27},
        {name: 'friend #09', age: 28},
    ];


    return (
    <FlatList 
    keyExtractor={friend => friend.name}
    data={friends}
    renderItem={({ item}) => {
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
    }}
    
    />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }

});


export default ListScreen;
