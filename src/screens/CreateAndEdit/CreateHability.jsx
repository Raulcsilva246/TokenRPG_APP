import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

import { g_styles } from '../../global_CSS';
import { styles, input } from './style';

export default function CreatH({ navigation }) {

  const [tipo, setTipo] = useState('Ativa');


  return (
    <View style={styles.container}>
      <ScrollView>

        <View style={styles.header}>

          <TouchableOpacity
            style={g_styles.returnBottom}
            onPress={() => navigation.goBack()}
          >
            <Text style={g_styles.text}>⇽Voltar</Text>
          </TouchableOpacity>

          <Text style={styles.title}>
            Criação de Habilidade
          </Text>

        </View>

        <View style={input.container}>
          <View style={input.containerBasicInfo}>

            <Text style={styles.title}>
              Nova Habilidade
            </Text>

            <Text style={input.textInput}>
              Nome da Habilidade
            </Text>

            <TextInput
              placeholder="Nome da habilidade"
              style={input.input}
            />

            <Text style={input.textInput}>
              Tipo
            </Text>

            <Picker
              selectedValue={tipo}
              style={input.input}
              onValueChange={(itemValue) => setTipo(itemValue)}
            >
              <Picker.Item
                label="Ativa"
                value="Ativa"
              />

              <Picker.Item
                label="Passiva"
                value="Passiva"
              />
            </Picker>

            <Text style={input.textInput}>
              Dano
            </Text>

            <TextInput
              placeholder="1d10"
              style={input.input}
            />

            <Text style={input.textInput}>
              Custo
            </Text>

            <TextInput
              placeholder="10 de energia"
              style={input.input}
            />

            <Text style={input.textInput}>
              Alcance
            </Text>

            <TextInput
              placeholder="10 metros"
              style={input.input}
            />

            <Text style={input.textInput}>
              Descrição
            </Text>

            <TextInput
              placeholder="Digite a descrição..."
              multiline
              numberOfLines={6}
              textAlignVertical="top"
              style={[
                input.input,
                {
                  minHeight: 40,
                  paddingTop: 10
                }
              ]}
            />

          </View>

          <TouchableOpacity
            style={styles.bottom}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.B_text}>
              Salvar
            </Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </View>
  );
}