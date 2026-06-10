import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home/Home'
import Creat from '../screens/CreateAndEdit/Create_C'
import Edit from '../screens/CreateAndEdit/Edit_C'
import Caracter from '../screens/Caracter/Caracter'
import CreatH from '../screens/CreateAndEdit/CreateHability'
import CreatT from '../screens/CreateAndEdit/CreateItem'
import CreatP from '../screens/CreateAndEdit/CreatePericias.jsx'
import Delete from '../screens/CreateAndEdit/Delete'
import DeleteItem from '../screens/CreateAndEdit/DeleteItem'
import DeleteH from '../screens/CreateAndEdit/DeleteH.jsx'


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

      <Stack.Screen
        name='DeleteItem'
        component={DeleteItem}
      />

      <Stack.Screen
        name='DeleteH'
        component={DeleteH}
      />

      <Stack.Screen
        name='CreatP'
        component={CreatP}
      />

    </Stack.Navigator>
  )
}