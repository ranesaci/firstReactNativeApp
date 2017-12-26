import React, {Component} from 'react';
import {AppRegistry,  Text,  View, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';


export default class TouchableHighlightComponent extends Component<{}> {

onAreaClick(){
           console.log("Clicked Here*******************");
           }

touchableOpacityPressed(){
            console.log("touchableOpacityPressed clicked");
            }


  render() {
    return (
      <View>
        <View style = {styles.container}>
             <TouchableHighlight
                 style = {styles.v1}
                 onPress={this.onAreaClick}
                 underlayColor='red'>
              <View>
                <Text >Hello World11</Text>
              </View>
              </TouchableHighlight>

              <TouchableOpacity
                style = {styles.v2}
                onPress = {this.touchableOpacityPressed}>
                  <View>
                    <Text>Hello World22</Text>
                  </View>
              </TouchableOpacity>

              <View >
                <Text style = {styles.v3}>Hello World33</Text>
              </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view1 : {
            backgroundColor:'green'
          },

  tv1 : {
            color:'white'
          },

  container : {
              flexDirection:'row',
              height:100,

               },
   v1 : {
            padding:10,
            flex:1,
            backgroundColor:'blue'
        },
   v2 : {
               padding:10,
               flex:1,
               backgroundColor:'orange'
           },
   v3 : {
                padding:10,
                flex:1,
                backgroundColor:'purple'
            }
  });

AppRegistry.registerComponent('TouchableHighlightComponent', () => TouchableHighlightComponent);
