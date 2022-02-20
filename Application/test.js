import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';

import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken('pk.eyJ1IjoicHJvamV0dmlsbGUiLCJhIjoiY2t3YXAycTVqM2Q1aDJ1cm9qcnZyeWVyZyJ9.4nROH940huv29v7CqnFPyw');

const IS_ANDROID = Platform.OS === 'android';



export default class showMap extends Component {

  async UNSAFE_componentWillMount() {

    if (IS_ANDROID) {

      const isGranted = await MapboxGL.requestAndroidLocationPermissions();

      this.setState({

        isAndroidPermissionGranted: isGranted,

        isFetchingAndroidPremission: false,

      });

    }

  }

  constructor(props) {

    super(props);

    this.state = {

      isAndroidPermissionGranted: false,

      isFetchingAndroidPremission: IS_ANDROID,

      coordinates: [[-122.08499,37.426929]],

      showUserLocation: true,

      locaton:[-122.084990,37.426929]      

    };

  }

  render() {

    return (

      <SafeAreaView style={styles.container}>

        <View style={styles.container}>

          <MapboxGL.MapView

            ref={c => (this._map = c)}

            zoomLevel={14}

            centerCorrdinate={this.state.coordinates[0]}

            showUserLocation={true}

            style={styles.container}

            userTrackingMode={this.state.userSelectedUserTrackingMode}>

            <MapboxGL.Camera

              zoomLevel={16}

              animationMode={'flyTo'}

              ref={c => (this.camera = c)}

              centerCoordinate={this.state.location}></MapboxGL.Camera>



            <MapboxGL.UserLocation></MapboxGL.UserLocation>

          </MapboxGL.MapView>

        </View>

      </SafeAreaView>

    )

  }

}



const styles = StyleSheet.create({

  container: {

    flex: 1,

  },

})