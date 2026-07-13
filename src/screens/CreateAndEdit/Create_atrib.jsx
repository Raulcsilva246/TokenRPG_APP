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

import { adicionarAtrib } from "../../services/Banco";

export default function CreatP({ navigation, route }) {
  const { id } = route.params;
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");

  async function salvarAtrib() {
    const dados = {
      id,
      nome,
      valor,
    };

    console.log(dados);

    await adicionarAtrib(id, nome, valor);


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

          <Text style={styles.title}>Criação de Atributos</Text>
        </View>

        <View style={input.container}>
          <View style={input.containerBasicInfo}>
            <Text style={styles.title}>Novo Atributo</Text>

            <Text style={input.textInput}>Nome do Atributo</Text>

            <TextInput
              placeholder="Ex: Força"
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

          <TouchableOpacity style={styles.bottom} onPress={salvarAtrib}>
            <Text style={styles.B_text}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
