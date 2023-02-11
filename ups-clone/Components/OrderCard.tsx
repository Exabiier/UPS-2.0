import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card, Icon } from '@rneui/themed'
import { useTailwind } from 'tailwind-rn/dist'
import { useNavigation } from '@react-navigation/native'

type Props = {
    item: Order
}

const OrderCard = ({item}: Props) => {
    const tw = useTailwind();
    const navigate = useNavigation<OrdersScreenNavigationProp>();

  return (
    <TouchableOpacity onPress={() => navigate.navigate("Order",  {order: item})}>
      <Card containerStyle={tw("px-5 rounded-lg")}>
        <View style={tw("flex-row justify-between items-center")}>

            <View>
                <Icon
                name="truck-delivery"
                color="#EB6A7C"
                type="material-community"
                />
                <Text style={{ fontSize: 10}}>{new Date(item.createdAt).toDateString()}</Text>
            </View>

            <View>
                <Text style={[tw("text-gray-400"), {fontSize: 10}]}>{item.carrier}-{item.trackingId}</Text>

                <Text style={tw("text-gray-500 text-xl")}>
                    {item.trackingItems.customer.name}
                </Text>
            </View>
            
            <View style={tw("flex-row items-center")}>
                <Text style={[tw("text-sm"), {color: "#EB6A7C"}]}>{item.trackingItems.items.length} x</Text>
                <Icon style={tw("ml-2")} name="box" type="feather" />
            </View>

            

        </View>


      </Card>
    </TouchableOpacity>
  )
}

export default OrderCard