import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useTailwind } from 'tailwind-rn/dist'
import useOrders from '../Hooks/useOrders'
import { Button, Image } from '@rneui/themed'
import OrderCard from '../Components/OrderCard'

// TODO: Need find out why the sort method works the way it does 

type Props = {}

const OrdersScreen = (props: Props) => {
  const tw = useTailwind();
  const navigation = useNavigation<OrdersScreenNavigationProp>();
  const { loading, error, orders } = useOrders();

  const [ ascending, setAscending ] = useState<boolean>(false);


  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown: false,
      tabBarLabel: ({focused, color}: any) => (
        <Text
        style={{color: focused ? "#EB6A7C": color, fontSize: 10}}>
        Orders
        </Text>
      ),
    })
  }, [])



  return (
    <ScrollView style={{ backgroundColor: "#EB6A7C"}}>
      <Image source={{ uri: "https://links.papareact.com/m51"}}
      containerStyle={tw("w-full h-64")}
      PlaceholderContent={<ActivityIndicator />} />

      <View>
        <Button onPress={() => setAscending(!ascending)}
        color="pink"
        titleStyle={{ color: "gray", fontWeight: "400"}}
        style={tw("py-2 px-5")} >
          {ascending ? "Showing: Oldest First": "Showing Most Recent First"}
        </Button>

        {orders?.sort(( a: Order, b: Order) => {
          if (ascending) {
            return new Date(a.createdAt) > new Date(b.createdAt)? 1: -1;
          } else {
            return new Date(a.createdAt) < new Date(b.createdAt)? 1: -1;
          }
        }).map((order)=>(
          <OrderCard key={order.trackingId} item={order} />
        ))}

      </View>
    </ScrollView>
  )
}

export default OrdersScreen

