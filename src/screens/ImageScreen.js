import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View style={styles.container}>
            <ImageDetail 
            title="Forest" 
            imageSource={require('../../assets/forest.jpg')}
            score={8}
            />
            <ImageDetail 
            title="Beach" 
            imageSource={require('../../assets/beach.jpg')}
            score={5}
            />
            <ImageDetail 
            title="Mountain" 
            imageSource={require('../../assets/mountain.jpg')}
            score={6}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
        marginBottom: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});

export default ImageScreen;