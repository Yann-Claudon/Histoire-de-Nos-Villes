import React, { Component, useRef, useState } from "react";
import { 
  View, 
  Text, 
  Dimensions, 
  Button, 
  Image, 
  StyleSheet,
  TouchableWithoutFeedback,
  ImageBackground } from "react-native";
import Carousel from 'react-native-snap-carousel';

import Style from "../Style";
import Haut from "./Haut";



const {width, height} = Dimensions.get('window');
//const carouselRef = useRef(null);

//const ModalRef = useRef(null);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 0,
  },

  weth: {
    height: 100,
    width: 360,
    backgroundColor: '#F9F6F4',
    marginBottom: 20,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
});

const Images = [
  {
    image: require('../assets/card4.png'),
    weath_Im:require('../assets/prehistoire.png'),
    Time:"Prehistoire",
  },
  {
    image: require('../assets/card1.png'),
    weath_Im:require('../assets/gladiateur.png'),
    Time:"Moyen-Age",
  },
  {
    image: require('../assets/card2.png'),
    weath_Im:require('../assets/napoleon.png'),
    Time:"Renaissance",
  },
  {
    image: require('../assets/card3.png'),
    weath_Im:require('../assets/soldat.png'),
    Time:"Ere moderne",
  },
  
];

const INITIAL_INDEX = 0;
export default class Filtre extends Component {

  _renderItem = ({item}) => {
    return (
      <TouchableWithoutFeedback >
        <View>
          <ImageBackground
            source={item.image}
            style={{
              width: '100%' ,
              height: 325,
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
            borderRadius={10}>
            <View style={{alignItems:"center"}}>

              <Image
                style={{height: 250, width: 250}}
                source={item.weath_Im}
              />
              <View>
                <Text
                  style={{color: '#ffffff', fontWeight: '600', fontSize: 20}}>
                  {item.Time}
                </Text>
                <Button style={Style.button} color="#F29718" title="GO !" onPress={() => this.props.navigation.push("Carte")}/>
              </View>
            </View>       
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    );
  };

   render() {
        return (
            <View>
                <Haut></Haut>
                <Text style={Style.typoTitre}>Choisissez vos ??poques et validez : </Text>
                <View>
          <Carousel
            layout={'default'}
            data={Images}
            renderItem={this._renderItem}
            sliderWidth={width}
            itemWidth={width - 10}
            swipeThreshold={80}
            layoutCardOffset={-12}
            inactiveSlideOpacity={0.4}
            containerCustomStyle={{
              overflow: 'visible',
              marginVertical: 30,
            }}
            contentContainerCustomStyle={{
              paddingTop: 14,
            }}
          />
        </View>

            </View>
        );
    }
}

//https://github.com/lehoangnam97/react-native-anchor-carousel/blob/master/example/src/ImageCarousel.js
//https://github.com/meliorence/react-native-snap-carousel


  