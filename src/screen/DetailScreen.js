import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Battery from 'expo-battery';

const DetalleScreen = ({navigation, route}) => {
    const book = route.params.book

    return (
        <View style={ styles.mainView }>
            <Text style={ {color: 'orange', fontWeight: 'bold', fontSize: 18, paddingBottom: 5} }>ISBN:</Text>
            <Text style={ {fontSize: 16, paddingBottom: 10} }>{ book.isbn }</Text>
            <Text style={ {color: 'orange', fontWeight: 'bold', fontSize: 18, paddingBottom: 5} }>Páginas:</Text>
            <Text style={ {fontSize: 16, paddingBottom: 10} }>{ book.pages }</Text>
            <Text style={ {color: 'orange', fontWeight: 'bold', fontSize: 18, paddingBottom: 5} }>Lenguaje:</Text>
            <Text style={ {fontSize: 16, paddingBottom: 10} }>{ book.language }</Text>

            <MapView style={ styles.map }>
                <Marker
                    key={ book.id }
                    coordinate={ {latitude: book.location.coordinates[1], longitude: book.location.coordinates[0]} }
                    title={ book.name }
                    description={ book.isbn }
                />
            </MapView>
        </View>
    )
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    map: {
        width: '100%',
        height: '40%',
    },
});

export default DetalleScreen;