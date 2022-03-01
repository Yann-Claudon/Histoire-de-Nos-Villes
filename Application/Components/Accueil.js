import React, { Component } from "react";
import { StyleSheet, View, Text, Button} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Carte from "./Carte";


const Stack = createStackNavigator();

export default class Accueil extends Component {

    render () {
        return (
            <View>
                <View>
                    <Text>En autonomie</Text>
                    <Text>Découvrez plus de 150 villes partenaires et voyagez à travers l'histoire</Text>
                    <Button title="Carte" onPress={() => this.props.navigation.navigate("Carte") }></Button>
                        <Stack.Navigator>
                            <Stack.Screen name="Carte" component={Carte} />
                        </Stack.Navigator>
                    
                </View>
                <View>
                    <Text>Vos parcours</Text>
                    <Text>Découvrez plus de 3 parcours différents pour chaque villes</Text>
                </View>
            </View>
        );
    }
}