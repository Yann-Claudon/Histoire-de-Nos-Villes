import 'react-native-gesture-handler';
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// récupération des 4 pages par défaut de l'application
import Accueil from "./Components/Accueil";
import Filtre from "./Components/Filtre";
import Actu from "./Components/Actu";
import Settings from "./Components/Settings";

// création de la barre de navigation
const Tabs = createBottomTabNavigator();
export default class App extends Component {

  render() {
    return (
      // Affiche en bas de l'écran une barre de navigation
      <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Accueil" component={Accueil} />
        <Tabs.Screen name="Filtre" component={Filtre} />
        <Tabs.Screen name="Actu" component={Actu} />
        <Tabs.Screen name="Settings" component={Settings} />
      </Tabs.Navigator>
      </NavigationContainer>
    );
  }
}