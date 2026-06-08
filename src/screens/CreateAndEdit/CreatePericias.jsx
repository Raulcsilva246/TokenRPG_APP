import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useState } from "react";

import { g_styles } from "../../global_CSS";
import { styles, input } from "./style";

import { adicionarPericia } from "../../services/Banco";

export default function CreatP({ navigation, route }) {
  const { id } = route.params;
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");

  async function salvarPericias() {
    const dados = {
      id,
      nome,
      valor,
    };

    console.log(dados);

    await adicionarPericia(id, nome, valor);


  }

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

          <Text style={styles.title}>Criação de Perícia</Text>
        </View>

        <View style={input.container}>
          <View style={input.containerBasicInfo}>
            <Text style={styles.title}>Nova Perícia</Text>

            <Text style={input.textInput}>Nome da Perícia</Text>

            <TextInput
              placeholder="Ex: Acrobacia"
              style={input.input}
              value={nome}
              onChangeText={setNome}
            />

            <Text style={input.textInput}>Valor</Text>

            <TextInput
              placeholder="0"
              keyboardType="numeric"
              style={input.input}
              value={valor}
              onChangeText={setValor}
            />
          </View>

          <TouchableOpacity style={styles.bottom} onPress={salvarPericias}>
            <Text style={styles.B_text}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
