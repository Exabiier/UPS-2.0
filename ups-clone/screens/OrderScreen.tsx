import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useTailwind } from 'tailwind-rn/dist'
import { useNavigation, useRoute } from '@react-navigation/native';
import DeliveryCard from '../Components/DeliveryCard';

const OrderScreen = () => {
    const tw = useTailwind();
    const navigate = useNavigation<OrdersScreenNavigationProp>();
    const { params: { order }, } = useRoute<OrdersScreenRouteProp>();

    useLayoutEffect(()=>{
        navigate.setOptions({
            headerTitle: order.trackingItems.customer.name,
            headerTintColor: "#EB6A7C",
            headerTitleStyle: { color: "black" },
            headerBackTitle: "Deliveries",
        })
    }, [order])

  return (
    <View style={tw("-mt-2")}>
      <DeliveryCard order={order} fullWidth/>
    </View>
  )
}

export default OrderScreen