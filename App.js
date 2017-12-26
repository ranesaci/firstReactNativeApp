/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet,Text, View} from 'react-native';
import Component1 from './app/components/Component1/Component1';
import StyleSheetComponent from './app/components/StyleSheetComponent/StyleSheetComponent';
import TouchableHighlightComponent from './app/components/TouchableHighlightComponent/TouchableHighlightComponent';
import TextComponent from './app/components/TextComponent/TextComponent';
import ListViewComponent from './app/components/ListViewComponent/ListViewComponent';
import FetchJsonDataComponent from './app/components/FetchJsonDataComponent/FetchJsonDataComponent';


export default class App extends Component<{}> {
  render() {
    return (
    <View>
        <View >
            <Text>Component1 view**************</Text>
            <Component1/>
          </View>
          <View>
          <Text>StyleSheetComponent view**************</Text>
            <StyleSheetComponent/>
          </View>
          <View>
           <Text>TouchableHighlightComponent view**************</Text>
             <TouchableHighlightComponent/>
           </View>
            <View>
            <Text>TextComponent view**************</Text>
               <TextComponent/>
            </View>

            <View>
             <Text>ListViewComponent view**************</Text>
                <ListViewComponent/>
             </View>
              <View>
                 <Text>FetchJsonDataComponent view**************</Text>
                   <FetchJsonDataComponent/>
               </View>

              <View>
                   <Text> view4345354543**************</Text>

              </View>
      </View>
    );
  }
}
