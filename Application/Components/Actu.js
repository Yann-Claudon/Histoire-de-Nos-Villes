import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import Style from "../Style";
import Haut from "./Haut";
import notifee, {AppRegistry} from '@notifee/react-native';




export default class Actu extends Component {
    

    async onDisplayNotification() {
        // Create a channel
        const channelId = await notifee.createChannel({
            id: 'Vibra',
            name: 'Default Channel',

        });

        // Display a notification
        await notifee.displayNotification({
          title: 'Vous êtes près de la Cathédrale de Nevers',
          body: 'La cathédrale Saint-Cyr-et-Sainte-Julitte de Nevers est une cathédrale catholique romaine qui est dédiée à saint Cyr (Cyricus), martyr en 304 à l’âge de trois ans, et à sa mère sainte Julitte (Julitta) également martyre',
          android: {
            channelId : 'Vibra',
            largeIcon: require('../Assets/owl.png'),
            pressAction: {
                id: 'default',  //this.props.navigation.push("Parcours")
              },
          },
          
        });
    }
    render(){
        return (
            <View>
                <Haut></Haut>
                <Text style={Style.typoTitre}>Actualités</Text>
                <Button color="#F29718" title="Déclencher notification" onPress={this.onDisplayNotification} />

            </View>
        );
    }
}