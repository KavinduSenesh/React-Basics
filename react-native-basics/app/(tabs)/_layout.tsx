import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    headerTitle: "Home",
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="customer"
                options={{
                    headerTitle: "Customer",
                    title: "Customer",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="people-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="item"
                options={{
                    headerTitle: "Item",
                    title: "Item",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="list-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="order"
                options={{
                    headerTitle: "Order",
                    title: "Order",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="briefcase-outline" color={color} size={size} />
                    )
                }}
            />
        </Tabs>
    );
}

export default TabLayout;
