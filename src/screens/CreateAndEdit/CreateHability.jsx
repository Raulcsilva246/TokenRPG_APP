import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

import { g_styles } from "../../global_CSS";
import { styles, input } from "./style";

import { adicionarHabilidade } from "../../services/Banco";

export default function CreatH({ navigation, route }) {
  const { id } = route.params;

  const [nome, setNome] = useState("");

  const [tipo, setTipo] = useState("Ativa");

  const [dano, setDano] = useState("");

  const [custo, setCusto] = useState("");

  const [alcance, setAlcance] = useState("");

  const [descricao, setDescricao] = useState("");

  async function salvarHabilidade() {
    await adicionarHabilidade(id, {
      nome,
      tipo,
      dano,
      custo,
      alcance,
      descricao,
    });

    navigation.goBack();
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

          <Text style={styles.title}>Criação de Habilidade</Text>
        </View>

        <View style={input.container}>
          <View style={input.containerBasicInfo}>
            <Text style={styles.title}>Nova Habilidade</Text>

            <Text style={input.textInput}>Nome da Habilidade</Text>

            <TextInput
              placeholder="Nome da habilidade"
              style={input.input}
              value={nome}
              onChangeText={setNome}
            />

            <Text style={input.textInput}>Tipo</Text>

            <Picker
              selectedValue={tipo}
              style={input.input}
              onValueChange={setTipo}
            >
              <Picker.Item label="Ativa" value="Ativa" />

              <Picker.Item label="Passiva" value="Passiva" />
            </Picker>

            <Text style={input.textInput}>Dano</Text>

            <TextInput
              placeholder="1d10"
              style={input.input}
              value={dano}
              onChangeText={setDano}
            />

            <Text style={input.textInput}>Custo</Text>

            <TextInput
              placeholder="10 de energia"
              style={input.input}
              value={custo}
              onChangeText={setCusto}
            />

            <Text style={input.textInput}>Alcance</Text>

            <TextInput
              placeholder="10 metros"
              style={input.input}
              value={alcance}
              onChangeText={setAlcance}
            />

            <Text style={input.textInput}>Descrição</Text>

            <TextInput
              placeholder="Digite a descrição..."
              multiline
              numberOfLines={6}
              textAlignVertical="top"
              value={descricao}
              onChangeText={setDescricao}
              style={[
                input.input,
                {
                  minHeight: 120,
                  paddingTop: 10,
                },
              ]}
            />
          </View>

          <TouchableOpacity style={styles.bottom} onPress={salvarHabilidade}>
            <Text style={styles.B_text}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
