import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home/Home'
import Creat from '../screens/CreateAndEdit/Create_C'
import Caracter from '../screens/Caracter/Caracter'

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
        name='Creat'
        component={Creat}
      />

      <Stack.Screen
        name='Caracter'
        component={Caracter}
      />

    </Stack.Navigator>
  )
}