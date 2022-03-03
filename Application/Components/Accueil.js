import React, { Component } from "react";
import { View, Text, Button} from "react-native";

export default class Accueil extends Component {

    render () {
        return (
            <View>
                <View>
                    <Text>En autonomie</Text>
                    <Text>Découvrez plus de 150 villes partenaires et voyagez à travers l'histoire</Text>
                   
                    <Button title="Carte Autonomie" onPress={() => this.props.navigation.push("Carte")}/>
                    
                </View>
                <View>
                    <Text>Vos parcours</Text>
                    <Text>Découvrez plus de 3 parcours différents pour chaque villes</Text>
                    <Button title="Carte Parcours" onPress={() => this.props.navigation.push("Carte")}/>
                </View>
            </View>
        );
    }
} 