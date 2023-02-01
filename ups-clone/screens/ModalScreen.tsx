import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import { useTailwind } from 'tailwind-rn/dist'
import { CompositeNavigationProp, useNavigation,RouteProp, useRoute } from '@react-navigation/native'
import useCustomerOrders from '../Hooks/useCustomerOrders'
import DeliveryCard from '../Components/DeliveryCard'




const ModalScreen = () => {
    const tw = useTailwind();
    const navigation = useNavigation<ModelScreenNavigationProp>();

    // this is how the code looks when you get a route:
    // const route = useRoute<ModalScreenRouteProp>();
    // We use the params to retrive our props from our customer screen:
    const {params: {name, userId} } = useRoute<ModalScreenRouteProp>();

    const { loading, error, orders } = useCustomerOrders(userId);


  return (
    <View>
      <TouchableOpacity 
      onPress={navigation.goBack}
      style={tw("absolute right-5 top-5 z-10")}>
        <Icon name="closecircle" type="antdesign" />
      </TouchableOpacity>
      <View>
        <Text>{name}</Text>
        <Text>{userId}</Text>
      </View>

      <FlatList
      data={orders}
      keyExtractor={order => order.trackingId}
      renderItem={({item: order}) => (<DeliveryCard order={orders} />)}
      />
    </View>
  )
}

export default ModalScreen