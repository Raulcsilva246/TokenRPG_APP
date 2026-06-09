import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { StyleSheet } from "react-native";

import { Picker } from "@react-native-picker/picker";

import { useState } from "react";

import { excluirFicha, removerItem } from "../../services/Banco";

import { g_styles } from "../../global_CSS";

export default function DeleteItem({ navigation, route }) {
  const [tipo, setTipo] = useState("Item");

  const { idFicha } = route.params;

  const [id, setId] = useState("");

  async function excluirItem() {
    await removerItem(idFicha, tipo, id);
    console.log("Removido o item", id);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={g_styles.returnBottom}
          onPress={() => navigation.goBack()}
        >
          <Text style={g_styles.text}>⇽ Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Excluir item</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.label}>ID do item</Text>

        <TextInput
          placeholder="Digite o ID"
          keyboardType="numeric"
          style={styles.input}
          value={id}
          onChangeText={setId}
        />

        <Picker
          style={[styles.input, { height: 60 }]}
          selectedValue={tipo}
          onValueChange={setTipo}
        >
          <Picker.Item label="Armamento" value="Armamento" />

          <Picker.Item label="Equipamento" value="Equipamento" />

          <Picker.Item label="Consumível" value="Consumivel" />

          <Picker.Item label="Item" value="Item" />
        </Picker>

        <TouchableOpacity style={styles.button} onPress={excluirItem}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    padding: 20,
  },

  header: {
    marginTop: 20,
  },

  title: {
    marginTop: 16,
    marginBottom: 16,
    paddingVertical: 8,
    color: "#39FF14", // Texto em verde neon
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },

  box: {
    marginTop: 40,
  },

  label: {
    color: "#FFF",
    fontSize: 18,
    marginBottom: 10,
  },

  input: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
    margin: 10,
  },

  button: {
    backgroundColor: "#C62828",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
