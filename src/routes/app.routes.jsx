import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home/Home'
import Character from '../screens/CreateAndEdit/Create_C'

const Stack = createNativeStackNavigator()

export function AppRoutes(){

  return(
    <Stack.Navigator
     screenOptions={{
    headerShown: false
  }}>

      <Stack.Screen
        name='Home'
        component={Home}
      />

      <Stack.Screen
        name='Character'
        component={Character}
      />

    </Stack.Navigator>
  )
}