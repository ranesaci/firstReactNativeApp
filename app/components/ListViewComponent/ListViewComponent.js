import React, {Component} from 'react';
import {AppRegistry, Text, View, ListView} from 'react-native';


const users = [{name:'sachin'},{name:'rane'}]
export default class ListViewComponent extends Component<{}> {

    constructor(){
           super();

           const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
           this.state = {
                 myDataSource: ds.cloneWithRows(users)
               };

           }

        renderRow(user){
                return(
                    <View>
                        <Text>{user.name}</Text>
                    </View>
                );

        }


           render(){
               return(
                <ListView
                    dataSource = {this.state.myDataSource}
                    renderRow={this.renderRow.bind(this)}

                />

               );
           }
}

AppRegistry.registerComponent('ListViewComponent',()=> ListViewComponent)