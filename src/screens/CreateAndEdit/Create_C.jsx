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
import {styles, input, status} from './style'
  
  

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
 {/*------------------------------INFORMAÇÕES BASICAS ----------------------------*/}
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


             {/*---------------DESCRIÇÃO--------------------------------- */}

         <View style={input.containerBasicInfo}>
            <Text style={styles.title}>Descrição</Text>

            <Text style={input.textInput}>Descricção Fisica</Text>

            <TextInput 
            placeholder="Descrição Fisica"
            style={input.input} />

            <Text style={input.textInput}>Background</Text>

            <TextInput 
            placeholder="Background"
            style={input.input} />
        </View>

        {/*---------------------STATUS------------------------------------------ */}
         <View style={input.containerBasicInfo}>

            <Text style={styles.title}>Status</Text>

            <View style={status.containerAlpha}>


            <Text style={status.textInput}>Vida<br/>Max: </Text>

            <TextInput 
            placeholder=""
            keyboardType="numeric"
            style={status.input} />
            </View>

        <View style={status.containerAlpha}>


            <Text style={status.textInput}>Energ.<br/>Max: </Text>

            <TextInput 
            placeholder=""
            keyboardType="numeric"
            style={status.input} />
            </View>

            <View style={status.containerAlpha}>

            <Text style={status.textInput}>San.<br/>Max: </Text>

            <TextInput 
            placeholder=""
            keyboardType="numeric"
            style={status.input} />
            </View>
        </View>

         {/*--------------------ATRIBUTOS---------------------------------*/}

         <View style={input.containerBasicInfo}>
            <Text style={styles.title}>Atributos</Text>

            <View style={status.containerAlpha}>


            <Text style={status.textInput}>FOR:</Text>

            <TextInput 
            placeholder=""
            keyboardType="numeric"
            style={status.input} />
            

            <Text style={status.textInput}>AGL:</Text>

            <TextInput 
            placeholder=""
            keyboardType="numeric"
            style={status.input} />
            </View>

            <View style={status.containerAlpha}>


            <Text style={status.textInput}>VIG:</Text>

            <TextInput 
            placeholder=""
            keyboardType="numeric"
            style={status.input} />
            

            <Text style={status.textInput}>INT:</Text>

            <TextInput 
            placeholder=""
            keyboardType="numeric"
            style={status.input} />
            </View>

                        <View style={status.containerAlpha}>


            <Text style={status.textInput}>PRE:</Text>

            <TextInput 
            placeholder=""
            keyboardType="numeric"
            style={status.input} />
            
            </View>
         </View>
         
            {/*--------------------Reações------------------------------------ */}
        <View style={input.containerBasicInfo}>

            <Text style={styles.title}>Reações</Text>

            <View style={status.containerAlpha}>


            <Text style={status.textInput}>CA Base:</Text>

            <TextInput 
            placeholder=""
            keyboardType="numeric"
            style={status.input} />
            </View>

        <View style={status.containerAlpha}>


            <Text style={status.textInput}>Bloqueio:</Text>

            <TextInput 
            placeholder=""
            keyboardType="numeric"
            style={status.input} />
            </View>

            <View style={status.containerAlpha}>

            <Text style={status.textInput}>Esquiva:</Text>

            <TextInput 
            placeholder=""
            keyboardType="numeric"
            style={status.input} />
            </View>

                        <View style={status.containerAlpha}>

            <Text style={status.textInput}>Deslocamento:</Text>

            <TextInput 
            placeholder=""
            keyboardType="numeric"
            style={status.input} />
            </View>

            
        </View>

    </View>


    </ScrollView>
    </View>




    )

  

}