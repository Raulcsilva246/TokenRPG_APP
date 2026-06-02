import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";

export default function Personagem({ ficha }) {
  return (
    <>
      <View style={input.container}>
        <View style={input.containerBasicInfo}>
          <Text style={styles.title}>Informações Basicas</Text>

          <View style={styles.containerInfo}>
            <Text style={input.textInput}>Nome: </Text>
            <Text style={input.textInput}>{ficha.personagem.nome}</Text>
          </View>

          <View style={styles.containerInfo}>
            <Text style={input.textInput}>Jogador:</Text>
            <Text style={input.textInput}>{ficha.personagem.jogador}</Text>
          </View>

          <View style={styles.containerInfo}>
            <Text style={input.textInput}>Classe:</Text>
            <Text style={input.textInput}>{ficha.personagem.classe}</Text>
          </View>

          <View style={styles.containerInfo}>
            <Text style={input.textInput}>Raça:</Text>
            <Text style={input.textInput}>{ficha.personagem.raca}</Text>
          </View>

          <View style={styles.containerInfo}>
            <Text style={input.textInput}>Level:</Text>
            <Text style={input.textInput}>{ficha.personagem.nivel}</Text>
          </View>
        </View>

        <View style={input.containerBasicInfo}>
          <Text style={styles.title}>Descrição</Text>
          <Text style={input.textInput}>Descrição Fisica:</Text>
          <View style={styles.containerDesc}>
            <Text style={input.textInput}>
              {ficha.personagem.descricaoFisica}
            </Text>
          </View>

          <Text style={input.textInput}>Background:</Text>
          <View style={styles.containerDesc}>
            <Text style={input.textInput}>{ficha.personagem.background}</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    paddingVertical: 8,
    color: "#39FF14", // Texto em verde neon
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    textShadowColor: "#39FF14",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
  },
  containerInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#1a1f2e",
    borderBottomColor: "gray",
  },
  containerDesc: {
    padding: 10,
    flexDirection: "row",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "gray",
  },
});

const input = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  containerBasicInfo: {
    margin: 15,
    borderWidth: 1,
    padding: 20,
    width: 350,
    backgroundColor: "#1a1f2e",
  },

  textInput: {
    marginTop: 20,
    marginRight: 10,
    marginBottom: 10,
    color: "#fff",
    fontSize: 20,
  },

  input: {
    height: 32,
    fontSize: 12,
    padding: 8,
    backgroundColor: "gray",
  },
});
