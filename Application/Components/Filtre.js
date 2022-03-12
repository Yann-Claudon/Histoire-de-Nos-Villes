import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import Style from "../Style";
import Haut from "./Haut";
export default class Filtre extends Component {
    render() {
        return (
            <View>
                <Haut></Haut>
                <Text style={Style.typoTitre}>Choisissez vos époques et validez : </Text>
                <Button style={Style.button} color="#F29718" title="GO !" onPress={() => this.props.navigation.push("Carte")}/>
            </View>
        );
    }
}