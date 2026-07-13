import { Text, View, TouchableOpacity, ScrollView } from "react-native";

import { useEffect, useState } from "react";

import { styles, caracter, b_Add } from "./style";
import { g_styles } from "../../global_CSS";

import { listarFichas } from "../../services/Banco";

export default function Home({ navigation }) {
  const [fichas, setFichas] = useState([]);

  async function carregarFichas() {
    const resultado = await listarFichas();

    setFichas(resultado);
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", carregarFichas);

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={g_styles.container}>
      <ScrollView>
        <Text style={g_styles.title}>Tokens RPG</Text>
        <Text style={caracter.text2}>Versão 3.0</Text>

        {fichas.map((ficha) => (
          <TouchableOpacity
            key={ficha.id}
            style={styles.box_select}
            onPress={() =>
              navigation.navigate("Caracter", {
                id: ficha.id,
              })
            }
          >
            <View style={caracter.header}>
              <Text style={caracter.textname} numberOfLines={1}>
                {ficha.personagem.nome}
              </Text>

              <View style={caracter.box_lv}>
                <Text style={caracter.textLV}>LV {ficha.personagem.nivel}</Text>
              </View>
            </View>

            <Text style={caracter.text}>
              Player: {ficha.personagem.jogador}
            </Text>

            <Text style={caracter.text}>Classe: {ficha.personagem.classe}</Text>

            <Text style={caracter.text}>ID: {ficha.id}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={b_Add.box_buttom}
        onPress={() => navigation.navigate("Creat")}
      >
        <Text style={b_Add.text}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          b_Add.box_buttom,
          {
            backgroundColor: "red",
            right: 25,
            bottom: 65,
            shadowColor: '#ff4a4a',
          },
        ]}
        onPress={() => navigation.navigate("Delete")}
      >
        <Text style={b_Add.text}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
