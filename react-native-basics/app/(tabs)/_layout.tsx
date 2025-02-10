import {Tabs} from "expo-router";

function TabLayout(){
    return (
        <Tabs>
            <Tabs.Screen name='index' options={{headerTitle:'Home', title:'Home'}}/>
            <Tabs.Screen name='customer' options={{headerTitle:'Customer', title:'Customer'}}/>
        </Tabs>
    )
}

export default TabLayout;