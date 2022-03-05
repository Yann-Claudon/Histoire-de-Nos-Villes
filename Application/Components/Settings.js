import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Style from "../Style";

export default class Settings extends Component {
      render() {
        return (
          <View>
            <View>
              <Text style={Style.typoTitre}>Paramètres</Text>
            </View>
          </View>
        )
      }
    }