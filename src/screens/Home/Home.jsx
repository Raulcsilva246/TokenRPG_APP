import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView
} from 'react-native';
import {styles, caracter, b_Add} from './style'
import {g_styles} from '../../global_CSS'
  
  

export default function Home({ navigation }){

  

    return(

<View style={g_styles.container}>

    <ScrollView>

        <Text style={g_styles.title}>
            Tokens RPG
        </Text>

        <TouchableOpacity style={styles.box_select}>

            <View style={caracter.header}>

                <Text
                  style={caracter.textname}
                  numberOfLines={1}
                >
                  Name
                </Text>

                <View style={caracter.box_lv}>
                    <Text style={caracter.textLV}>
                      LV ?
                    </Text>
                </View>

            </View>

            <Text style={caracter.text}>
              Player:
            </Text>

            <Text style={caracter.text}>
              class:
            </Text>

        </TouchableOpacity>

    </ScrollView>

    <TouchableOpacity style={b_Add.box_buttom} onPress={() => navigation.navigate('Character')}>
        <Text style={b_Add.text}>+</Text>
    </TouchableOpacity>

</View>

)
}
