// Customer Types //
type Customer = {
email: string;
name: string;
}

type CustomerList = {
    name: ID;
    value: Customer;
}

// Items Types //
type TrackingItem  = {
    customer_id: ID;
    customer: Customer;
    items: Item[];
}

type Item = {
    item_id: ID;
    name: string;
    price: number;
    quantity: number;
}

type OrderResponse = {
    value: Order;
}

type CustomerResponse ={
    name: ID;
    value: Customer;
}

type Order ={
    carrier: string;
    createdAt: string;
    shippingCost: number;
    trackingId: string;
    trackingItems: TrackingItem; 
    Lat: number;
    Lng: number;
    Address: string;
    City: string;
}

// for the navigation components for our screen views
type CustomerScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<TabStackParamList, "Customers">,
NativeStackNavigationProp<RootStackParamList>
>

// Root Navigator types //
type RootStackParamList = {
    Main: undefined;
    MyModal: {userId: string; name: string}
    order: {order: any;  }
}