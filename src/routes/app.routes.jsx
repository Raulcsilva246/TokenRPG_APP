import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home/Home'
import Creat from '../screens/CreateAndEdit/Create_C'
import Edit from '../screens/CreateAndEdit/Edit_C'
import Caracter from '../screens/Caracter/Caracter'
import CreatH from '../screens/CreateAndEdit/CreateHability'
import CreatT from '../screens/CreateAndEdit/CreateItem'
import Delete from '../screens/CreateAndEdit/Delete'

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
        name='Edit'
        component={Edit}
      />

      <Stack.Screen
        name='Caracter'
        component={Caracter}
      />

      <Stack.Screen
        name='CreatH'
        component={CreatH}
      />

      <Stack.Screen
        name='CreatT'
        component={CreatT}
      />

      <Stack.Screen
        name='Delete'
        component={Delete}
      />

    </Stack.Navigator>
  )
}