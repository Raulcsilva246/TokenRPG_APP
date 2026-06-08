import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { StyleSheet } from "react-native";

import { useState } from "react";

import { excluirFicha } from "../../services/Banco";

import { g_styles } from "../../global_CSS";

export default function DeleteItem({ navigation }) {
  const [id, setId] = useState("");

  async function excluirItem() {

    await removerUltimoItem(
      ficha.id,
      tipoSelecionado
    );

    navigation.goBack();
  }
  

   
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={g_styles.returnBottom}
          onPress={() => navigation.navigate("Caracter")}
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

        <TouchableOpacity style={styles.button} onPress={deletarItem}>
          <Text style={styles.buttonText} onPress={()=> navigation.goBack()}>Excluir</Text>
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
