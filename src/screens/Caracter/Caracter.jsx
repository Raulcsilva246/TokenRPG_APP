import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { buscarFicha } from "../../services/Banco";

import Personagem from "./Abas/Personagem";
import Status from "./Abas/Status";
import Atributos from "./Abas/Atributos";
import Inventario from "./Abas/Inventario";
import Habilidades from "./Abas/Habilidades";

import { styles } from "./style";
import { g_styles } from "../../global_CSS";

export default function Caracter({ navigation, route }) {
  const [ficha, setFicha] = useState(null);

  const [abaAtiva, setAbaAtiva] = useState("personagem");

  function renderConteudo() {
    switch (abaAtiva) {
      case "personagem":
        return (
          <View>
            <Personagem ficha={ficha} />
          </View>
        );

      case "status":
        return (
          <View>
            <Status ficha={ficha} id={ficha.id} />
          </View>
        );

      case "atributos":
        return (
          <View>
            <Atributos ficha={ficha}/>
          </View>
        );

      case "inventario":
        return (
          <View>
            <Inventario ficha={ficha} navigation={navigation} />
          </View>
        );

      case "habilidades":
        return (
          <View>
            <Habilidades ficha={ficha} navigation={navigation} />
          </View>
        );

      default:
        return null;
    }
  }
  useEffect(() => {
    async function carregarFicha() {
      const { id } = route.params;

      const resultado = await buscarFicha(id);

      setFicha(resultado);
    }

    carregarFicha();
  }, []);

  if (!ficha) {
    return (
      <View style={g_styles.container}>
        <Text style={{ color: "#FFF" }}>Carregando...</Text>
      </View>
    );
  }
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>Personagem</Text>
        <View style={styles.containerH}>
          <TouchableOpacity
            style={g_styles.returnBottom}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={g_styles.text}>⇽Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.editBottom}
            onPress={() => navigation.navigate("Creat")}
          >
            <Text style={g_styles.text}>Editar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, abaAtiva === "personagem" && styles.tabAtiva]}
          onPress={() => setAbaAtiva("personagem")}
        >
          <Text style={styles.tabTexto}>Pers.</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, abaAtiva === "status" && styles.tabAtiva]}
          onPress={() => setAbaAtiva("status")}
        >
          <Text style={styles.tabTexto}>Status</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, abaAtiva === "atributos" && styles.tabAtiva]}
          onPress={() => setAbaAtiva("atributos")}
        >
          <Text style={styles.tabTexto}>Atrib.</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, abaAtiva === "inventario" && styles.tabAtiva]}
          onPress={() => setAbaAtiva("inventario")}
        >
          <Text style={styles.tabTexto}>Invent.</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, abaAtiva === "habilidades" && styles.tabAtiva]}
          onPress={() => setAbaAtiva("habilidades")}
        >
          <Text style={styles.tabTexto}>Habil.</Text>
        </TouchableOpacity>
      </View>

      <View style={g_styles.container}>
        <ScrollView>{renderConteudo()}</ScrollView>
      </View>
    </>
  );
}
