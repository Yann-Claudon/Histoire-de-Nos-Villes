import React, { Component } from "react";
import { StyleSheet, View, Text,Button } from "react-native";
import Style from "../Style";
import Haut from "./Haut";
import notifee from '@notifee/react-native';

export default class Actu extends Component {

    async onDisplayNotification() {
        // Create a channel
        const channelId = await notifee.createChannel({
          id: 'default',
          name: 'Default Channel',
        });
    
        // Display a notification
        await notifee.displayNotification({
          title: 'MANGE TES MORTS',
          body: 'COUCOU LES MUSLIMS',
          android: {
            channelId,
            smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
          },
        });
    }
    render(){
        return (
            <View>
                <Haut></Haut>
                <Text style={Style.typoTitre}>Actualités</Text>
                <Button title="CLIQUE MOI !" onPress={this.onDisplayNotification}></Button>
            </View>
        );
    }
}