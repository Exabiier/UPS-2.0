import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomersScreen from '../screens/CustomersScreen';
import OrdersScreen from '../screens/OrdersScreen';




type Props = {}

const Tab = createBottomTabNavigator();

const TabNavigator = (props: Props) => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Customers" component={CustomersScreen} />
        <Tab.Screen name="Orders" component={OrdersScreen} />  
    </Tab.Navigator>
    
    
  )
}

export default TabNavigator