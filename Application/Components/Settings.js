import React, { Component } from "react";
import { View, Text, Button, Switch} from "react-native";
import Style from "../Style";
import Haut from "./Haut";
export default class Settings extends Component {
      render() {
       
        return (
          <View>
            <Haut></Haut>
            <View>
              <Text style={Style.typoTitre}>Réglages</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={Style.typoCorp}>Sons</Text>
                <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}/>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={Style.typoCorp}>Notification</Text>
                <Switch trackColor={{ false: "#767577", true: "#81b0ff" }} value= {true}/>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={Style.typoCorp}>Vibreur</Text>
                <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}/>
              </View>
            </View>
          </View>
        )
      }
    }