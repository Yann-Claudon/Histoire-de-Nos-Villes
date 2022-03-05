import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Style from "../Style";

export default class Actu extends Component {
    render(){
        return (
            <View>
                <Text style={Style.typoTitre}>Actualités</Text>
            </View>
        );
    }
}