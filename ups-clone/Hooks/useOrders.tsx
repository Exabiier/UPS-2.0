import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { GET_ORDERS } from '../graphql/queries'


const useOrders = () => {
    const [orders, setOrders] = useState<Order[]>([])
    const  {loading, error, data } = useQuery(GET_ORDERS)

    useEffect(()=>{

        if(!data) return;

        const orders: Order[] = data.getOrders.map(({ value }: OrderResponse) =>({
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

        setOrders(orders);
    },[])

  return { loading, error, orders }
 
}

export default useOrders