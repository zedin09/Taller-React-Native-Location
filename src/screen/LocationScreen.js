import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const LocationScreen = ({ navigation, route }) => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        getLocation();
    }, []);

    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            console.log("Permission to access location was denied");
        } else {
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        }
    };

    return (
        <View style={styles.mainView}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: location?.coords.latitude || 6.217,
                    longitude: location?.coords.longitude || -75.567,
                    latitudeDelta: 0.1352,
                    longitudeDelta: 0.2051,
                }}
            >
                {location && (
                    <Marker
                        key={1}
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        title={"Ubicación actual"}
                        description={`Latitud: ${location.coords.latitude} Longitud: ${location.coords.longitude}`}
                    />
                )}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    map: {
        width: "100%",
        height: "100%",
    },
});

export default LocationScreen;
