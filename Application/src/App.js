import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";

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

export default class App extends Component {

  async UNSAFE_componentWillMount() {

    if (IS_ANDROID) {
      const isGranted = await MapboxGL.requestAndroidLocationPermissions();
      this.setState({
        isAndroidPermissionGranted: isGranted,
        isFetchingAndroidPermission: false,
      });
    }
  }

  componentDidMount() {
    MapboxGL.setTelemetryEnabled(true);
  }

  render() {
    return (
      
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map} styleURL="mapbox://styles/projetville/ckysfg35o0wyx14mikay588x3">
            <MapboxGL.UserLocation visible={true} showsUserHeadingIndicator={true}/>
          </MapboxGL.MapView>
        </View>

    );
  }
}