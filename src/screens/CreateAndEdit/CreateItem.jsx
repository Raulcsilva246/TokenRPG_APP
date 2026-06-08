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
import { adicionarItem } from "../../services/Banco";

export default function CreatT({ navigation, route }) {
  const { id } = route.params;
  const [tipo, setTipo] = useState("Item");
  const [nome, setNome] = useState("");
  const [dano, setDano] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [descricao, setDescricao] = useState("");

  async function salvarItem() {
    await adicionarItem(id, {
      nome,
      tipo,
      dano,
      quantidade,
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

          <Text style={styles.title}>Criação de Item</Text>
        </View>

        <View style={input.container}>
          <View style={input.containerBasicInfo}>
            <Text style={styles.title}>Novo Item</Text>

            <Text style={input.textInput}>Nome do Item</Text>

            <TextInput
              placeholder="Nome do item"
              style={input.input}
              value={nome}
              onChangeText={setNome}
            />

            <Text style={input.textInput}>Tipo</Text>

            <Picker
              selectedValue={tipo}
              style={input.input}
              onValueChange={(itemValue) => setTipo(itemValue)}
            >
              <Picker.Item label="Armamento" value="Armamento" />

              <Picker.Item label="Equipamento" value="Equipamento" />

              <Picker.Item label="Item" value="Item" />

              <Picker.Item label="Dinheiro" value="Dinheiro" />
            </Picker>

            {tipo === "Armamento" && (
              <>
                <Text style={input.textInput}>Dano</Text>

                <TextInput
                  placeholder="1d10"
                  style={input.input}
                  value={dano}
                  onChangeText={setDano}
                />
              </>
            )}

            {tipo === "Dinheiro" && (
              <>
                <Text style={input.textInput}>Quantidade</Text>

                <TextInput
                  placeholder="0"
                  keyboardType="numeric"
                  style={input.input}
                  value={quantidade}
                  onChangeText={setQuantidade}
                />
              </>
            )}

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
                  minHeight: 150,
                  paddingTop: 10,
                },
              ]}
            />
          </View>

          <TouchableOpacity style={styles.bottom} onPress={salvarItem}>
            <Text style={styles.B_text}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
