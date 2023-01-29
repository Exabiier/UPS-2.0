import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { GET_ORDERS } from '../graphql/queries'

type Prop = {
    userId: string,
}

function useCustomerOrders({userId}: Prop) {
    const { loading, error, data } = useQuery(GET_ORDERS)
    const [orders, setOrders] = useState<Order[]>([])

    useEffect(()=>{
        if(!data) return;

        const orders: Order[] = data.getOrders.map(({ value }: OrderResponse) => ({
            carrier: value.carrier,
            createdAt: value.createdAt,
            shippingCost: value.shippingCost,
            trackingId: value.trackingId,
            trackingItems: value.trackingItems,
            Address: value.Address,
            City: value.City,
            Lat: value.Lat,
            Lng: value.Lng,
        }))

        const customerOrders = orders.filter(( order : Order)=>{
            order.trackingItems.customer_id === userId
        })

        setOrders(customerOrders)

        setOrders
    }, [data, userId])

  return { loading, error, orders }
  
}

export default useCustomerOrders