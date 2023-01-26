import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import React from 'react';
import Svg from 'react-native-svg';
import { colors } from "../components/colors";
import Fingerprint from '../components/svg/Fingerprint.svg';

const {
    primary,
    secondary,
    goldish,
    white,
  } = colors;

export default CarouselScreenItem = ({item}) => {
    const {width} = useWindowDimensions();

    return (
        <View style={[styles.container, {width}]}>
            <Svg src={item.image} style={[styles.image, {width, resizeMode: 'contain'}]}></Svg>
            <Fingerprint style={{height: 18, width: 18, marginLeft: 10, color: primary}}></Fingerprint>
            <View style={{flex: 0.8}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center', 
      alignItems: 'center',
    },
    image: {
        flex: 0.8, 
        justifyContent: 'center',
        width: 8,
        height: 8,
    }, 
    title: {
        fontWeight: '800', 
        fontSize: 28, 
        marginBottom: 10, 
        color: goldish,
        textAlign: 'center',
    }, 
    description: {
        fontWeight: '300', 
        color: "62656b",
        textAlign: 'center', 
        paddingHorizontal: 64,
    }
});