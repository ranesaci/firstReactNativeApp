import React, {Component} from 'react';
import {AppRegistry,  Text,  View, StyleSheet} from 'react-native';


export default class StyleSheetComponent extends Component<{}> {



  render() {
    return (
      <View>
          <View style = {{backgroundColor:'yellow'}}>
            <Text style = {{color:'red'}}>Hello World!!!</Text>
          </View>
          <View style = {styles.view1}>
            <Text style = {styles.tv1}>Hello World!!!</Text>
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
          }
  });

AppRegistry.registerComponent('StyleSheetComponent', () => StyleSheetComponent);
