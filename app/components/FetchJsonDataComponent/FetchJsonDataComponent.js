import React, {Component} from 'react';
import {AppRegistry, Text, View, ListView} from 'react-native';

export default class FetchJsonDataComponent extends Component<{}> {

    constructor(){
           super();

           const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
           this.state = {
                 myDataSource: ds,
               };

           }

           componentDidMount(){
                this.fetchUsers();
           }


           fetchUsers(){
                fetch('https://jsonplaceholder.typicode.com/users')
                    .then((response)=> response.json())
                    .then((response)=> {
                            this.setState({
                                myDataSource: this.state.myDataSource.cloneWithRows(response)
                            });
                    });
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

AppRegistry.registerComponent('FetchJsonDataComponent',()=> FetchJsonDataComponent)