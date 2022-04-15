import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Style from "../Style";
import Haut from "./Haut";
import notifee from '@notifee/react-native';
import Accueil from "./Accueil";
import App from "../App";



export default class Actu extends Component {
    
    async onDisplayNotification() {
        // Create a channel
        const channelId = await notifee.createChannel({
            id: 'Vibra',
            name: 'Default Channel',

        });

        // Display a notification
        await notifee.displayNotification({
          title: 'Notifs',
          body: 'Texte Notif',
          android: {
            channelId : 'Vibra',
            largeIcon: require('../assets/soldat.png'),
            pressAction: {
                id: 'default',
              },
          },
          
        });
    }
    render(){
        return (
            <View>
                <Haut></Haut>
                <Text style={Style.typoTitre}>Actualités</Text>
                <Button title="Display Notification" onPress={this.onDisplayNotification} />

            </View>
        );
    }
}