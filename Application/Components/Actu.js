import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Style from "../Style";
import Haut from "./Haut";
export default class Actu extends Component {
    render(){
        return (
            <View>
                <Haut></Haut>
                <Text style={Style.typoTitre}>Actualités</Text>
            </View>
        );
    }
}