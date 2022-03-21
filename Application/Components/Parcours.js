import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import Style from "../Style";
import Haut from "./Haut";
import Slider from "@react-native-community/slider";

export default class Parcours extends Component {
    render() {
        return (
            <View>
                <Haut></Haut>
                <Text style={Style.typoTitre}>Créez votre parcours de découverte </Text>
                <Slider style={{width: 350, height: 100}} minimumValue={1} maximumValue={10} minimumTrackTintColor="#F29718" maximumTrackTintColor="#D48832" tapToSeek={true} step={1}/>                                                                                        
                <Button style={Style.button} color="#F29718" title="Créez" onPress={() => this.props.navigation.push("Carte")}/>
            </View>
        );
    }
}