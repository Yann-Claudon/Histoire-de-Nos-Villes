import React, { Component } from "react";
import { View, Text } from "react-native";
import Style from "../Style";

export default class Haut extends Component {
    render() {
        return (
            <View style={Style.header}>
                <Text style={Style.typoTitre}>Fabulapp</Text>
                <Text style={Style.typoCorp}>L'histoire vous attend</Text>
            </View>
        );
    }
}