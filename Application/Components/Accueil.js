import React, { Component } from "react";
import { View, Text, Button} from "react-native";
import Style from "../Style";
import Haut from "./Haut";
export default class Accueil extends Component {

    render () {
        return (
            <View >
                <Haut></Haut>
                <View>
                    <Text style={Style.typoTitre}>En autonomie</Text>
                    <Text style={Style.typoCorp}>Découvrez plus de 150 villes partenaires et voyagez à travers l'histoire</Text>
                   
                    <Button title="Découvrir" color="#F29718" onPress={() => this.props.navigation.push("Carte")}/>
                    
                </View>
                <View>
                    <Text style={Style.typoTitre}>Vos parcours</Text>
                    <Text style={Style.typoCorp}>Découvrez plus de 3 parcours différents pour chaque villes</Text>
                    <Button style={Style.button} color="#F29718" title="Découvrir" onPress={() => this.props.navigation.push("Carte")}/>
                </View>
            </View>
        );
    }
} 