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
import {styles, input} from './style'
  
  

export default function Creat({ navigation }){

  

    return(
    <View style={styles.container}>
    <ScrollView>
        <View style={styles.header}>

        <TouchableOpacity
        style={styles.returnBottom}
        onPress={() => navigation.navigate('Home')}
        >
            <Text style={styles.text}>⇽Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Criação de Personagem</Text>

        </View>

    <View style={input.container}>
        <View style={input.containerBasicInfo}>

            <Text style={styles.title}>Informações Basicas</Text>
            
            <Text style={input.textInput}>Nome do personagem</Text>

            <TextInput 
            placeholder="Nome do personagem"
            style={input.input} />

            <Text style={input.textInput}>Nome do Jogador</Text>

            <TextInput 
            placeholder="Nome do Jogador"
            style={input.input} />

            <Text style={input.textInput}>Classe</Text>

            <TextInput 
            placeholder="Classe"
            style={input.input} />

            <Text style={input.textInput}>Raça</Text>

            <TextInput 
            placeholder="Raça"
            style={input.input} />



            <Text style={input.textInput}>Level</Text>

            <TextInput 
            placeholder="Level"
            style={input.input} />
        </View>


            


            <Text style={input.textInput}>Descrição Fisica</Text>

            <TextInput 
            placeholder="Descrição Fisica"
            style={input.input} />

    </View>


    </ScrollView>
    </View>




    )

  

}