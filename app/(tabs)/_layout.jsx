import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect} from'expo-router'
import { icons } from '../../constants'

const TabIcon=({icon, color, name, focused})=>{
    return (
        <View>
            <Image style={{width:25, height:25}}
                source={icon}
                resizeMode="contain"
                className="w-0 h-0"
            />
        </View>
    )
}


const TabsLayout = () => {
  return (
    <>
        <Tabs>

            <Tabs.Screen
                name="Home"
                options={{
                    title:'Home',
                    headerShown:false,
                    tabBarIcon: ({color, focused}) =>(
                        <TabIcon
                            icon={icons.home}
                            color={color}
                            name="Home"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="Logout"
                options={{
                    title:'Logout',
                    headerShown:false,
                    tabBarIcon: ({color, focused}) =>(
                        <TabIcon
                            icon={icons.profile}
                            color={color}
                            name="Logout"
                            focused={focused}
                        />
                    )
                }}
            />

            <Tabs.Screen
                name="Plus"
                options={{
                    title:'Plus',
                    headerShown:false,
                    tabBarIcon: ({color, focused}) =>(
                        <TabIcon
                            icon={icons.profile}
                            color={color}
                            name="Plus"
                            focused={focused}
                        />
                    )
                }}
            />

            <Tabs.Screen
                name="setting"
                options={{
                    title:'Setting',
                    headerShown:false,
                    tabBarIcon: ({color, focused}) =>(
                        <TabIcon
                            icon={icons.setting}
                            color={color}
                            name="Setting"
                            focused={focused}
                        />
                    )
                }}
            />

        </Tabs>
    </>
    
  )
}

export default TabsLayout