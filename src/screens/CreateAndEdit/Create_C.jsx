import { StyleSheet  } from "react-native";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView
} from 'react-native';
import {g_styles} from '../../global_CSS'
import {styles} from './style'
  
  

export default function Creat({ navigation }){

  

    return(
    <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity
        style={styles.returnBottom}
        onPress={() => navigation.navigate('Home')}
        >
            <Text style={styles.text}>⇽Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Criação de Personagem</Text>
        </View>
    </View>




    )

  

}