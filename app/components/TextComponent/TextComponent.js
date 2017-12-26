import React, {Component} from 'react';
import {AppRegistry,  Text,  View, StyleSheet,TextInput} from 'react-native';


export default class TextComponent extends Component<{}> {
       constructor(){
       super();
       this.json = {
            textInputVal:'sachin'
        }
       }

       onChangeTextVal(value){
       console.log(value);
       }

       onSubmitEditingEvent(){
       console.log('onSubmitEditingEvent done');
       }

       render(){
       return(
            <View>
                 <TextInput
                    placeholder='Enter name here'
                    value={this.json.textInputVal}
                    onChangeText={(value)=>this.onChangeTextVal(value)}
                    onSubmitEditing={this.onSubmitEditingEvent}
                    />
            </View>
        );
       }

}
AppRegistry.registerComponent('TextComponent',()=> TextComponent)