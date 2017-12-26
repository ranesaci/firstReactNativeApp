import React, {Component} from 'react';
import {AppRegistry,  Text,  View} from 'react-native';


export default class Component1 extends Component<{}> {

  static defaultProps = {
                          prop1:'defaultProps message text'
                        }

    constructor(props){
    super(props);
    this.jsonStr = {
                    name:'sachin1',
                    age:30,
                    isVisible:false,
                    message: this.props.prop1
                    }

    }

  render() {
    let name = this.jsonStr.isVisible ? this.jsonStr.name + ' Rane':this.jsonStr.name;
    console.log(this.jsonStr.isVisible);
    return (
    <View>
      <View>
        <Text > From component 1!!! proprty value = {this.props.prop1}</Text>
      </View>
       <View>
              <Text > From component 1!!! json value = {name} dsfffd</Text>
        </View>
        <View>
               <Text > From component 1!!! props json value = {this.jsonStr.message} dsfffd</Text>
         </View>

    </View>
    );
  }
}
AppRegistry.registerComponent('Component1', () => Component1);
