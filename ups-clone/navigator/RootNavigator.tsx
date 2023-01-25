import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';

export type RootStackParamList = {
    Main: undefined;
    MyModel: {userId: string; name: string}
    order: {order: any;  }
}

type Props = {}

const RootStack = createNativeStackNavigator();

const RootNavigator = (props: Props) => {

  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="main" component={TabNavigator} />
      </RootStack.Group>
    </RootStack.Navigator>
  )

}

export default RootNavigator