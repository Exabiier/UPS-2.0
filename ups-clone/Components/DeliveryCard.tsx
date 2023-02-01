import { View, Text } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist';
import { Card, Divider, Icon } from '@rneui/themed';

type Props = {
    order: Order,
}

const DeliveryCard = ({order}: Props) => {
    const tw = useTailwind();


  return (
    <Card containerStyle={[tw("rounded-lg my-2"),
    {
        backgroundColor: '#59C1CC',
        padding: 0,
        paddingTop: 16,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,

    } ]}>
      <View>
        <Icon name="box" type="entypo" size={50} color="white" />
        <View>
            <Text style={tw("text-xs text-center uppercase text-white font-bold")}>
                {order.carrier} - {order.trackingId}
            </Text>
            <Text style={tw("text-white text-center text-lg font-bold")}>Expected Delivery: {new Date(order.createdAt).toLocaleDateString()} 
            </Text>
            <Divider color="white" />
        </View>

        <View>
            <Text>Adress</Text>

            <Text>
                {order.Address}, {order.City}
            </Text>

            <Text>Shipping Cost: ${order.shippingCost}</Text>
        </View>
      </View>
    </Card>
  )
}

export default DeliveryCard