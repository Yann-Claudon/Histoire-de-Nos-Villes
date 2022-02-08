import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken('pk.eyJ1IjoicHJvamV0dmlsbGUiLCJhIjoiY2t3YXAycTVqM2Q1aDJ1cm9qcnZyeWVyZyJ9.4nROH940huv29v7CqnFPyw');

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "tomato"
  },
  map: {
    flex: 1
  }
});

export default class App extends Component {
  componentDidMount() {
    MapboxGL.setTelemetryEnabled(true);
  }

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map} />
        </View>
      </View>
    );
  }
}