import React, { Component, useState } from "react";
import { View, Text, Button, Image } from "react-native";
import Style from "../Style";
import Haut from "./Haut";
import Slider from "@react-native-community/slider";


export default class Parcours extends Component {
    //const [data, setSliderData] = useState(5);
    state = {data : 5}; 
    
    render() {
       
        return (
            <View>
                <Haut></Haut>
                <Text style={Style.typoTitre}>Créez votre parcours de découverte </Text>
                <View>
                    <Image source={require('../assets/zonepark.png')} resizeMode="contain" style={{width: '100%', height: '50%'}}/>
                    <Slider style={{width: 350, height: 100}} minimumValue={1} maximumValue={10} minimumTrackTintColor="#F29718" maximumTrackTintColor="#D48832" step={1} onValueChange={(sliderValue) => this.setState({data : sliderValue})} />                                                                                        
                    <Text style={ Style.typoCorp }> Rayon du parcours : {this.state.data} km </Text>
                    <Button style={Style.button} color="#F29718" title="Créez" onPress={() => this.props.navigation.push("Carte")}/>
                </View>
            </View>
        );
    }
}