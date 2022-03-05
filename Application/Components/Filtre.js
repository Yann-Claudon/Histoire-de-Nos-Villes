import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Style from "../Style";

export default class Filtre extends Component {
    render() {
        return (
            <View>
                <Text style={Style.typoTitre}>Filtres</Text>
            </View>
        );
    }
}