
import React, { Component } from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import {RegisterStudent} from './RegisterStudent';
import {RegisterTeacher} from './RegisterTeacher';

class FullRegister extends Component{
    render(){
        return(
            <AppStackNavigator />

        );

    }
}

const AppStackNavigator = createStackNavigator({
  Student: RegisterStudent,
  Teacher: RegisterTeacher

})

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

export default FullRegister;