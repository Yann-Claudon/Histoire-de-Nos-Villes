import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";

// clé public de l'API Mapbox
MapboxGL.setAccessToken('pk.eyJ1IjoicHJvamV0dmlsbGUiLCJhIjoiY2t3YXAycTVqM2Q1aDJ1cm9qcnZyeWVyZyJ9.4nROH940huv29v7CqnFPyw');

const IS_ANDROID = Platform.OS === 'android';

const styles = StyleSheet.create({
  
  container: {
    height: "100%",
    width: "100%",
  },
  map: {
    flex: 1,
  }
});

export default class Carte extends Component {
  
  async UNSAFE_componentWillMount() {
    // demande l'autorisation de la localisation
    if (IS_ANDROID) {
      const isGranted = await MapboxGL.requestAndroidLocationPermissions();
      this.setState({
        isAndroidPermissionGranted: isGranted,
        isFetchingAndroidPermission: false,
      });
    }
  }

  // Active la télémétrie au sein de mapbox 
  componentDidMount() {
    MapboxGL.setTelemetryEnabled(true);
  }

  render() {
    return (
      // affiche la carte avec le style définie dans Mapbox Studio
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map} styleURL="mapbox://styles/projetville/ckysfg35o0wyx14mikay588x3">
            <MapboxGL.Camera followUserLocation={true} followUserMode="normal"/>
            <MapboxGL.UserLocation visible={true} showsUserHeadingIndicator={true}/>
          </MapboxGL.MapView>
        </View>

    );
  }
}