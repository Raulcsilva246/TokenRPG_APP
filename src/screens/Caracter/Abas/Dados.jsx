import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export default function Dados() {
  const [rolagens, setRolagens] = useState([]);
  const dados = ["d4", "d6", "d8", "d10", "d12", "d20", "d100"];

  const [dadoSelecionado, setDadoSelecionado] = useState("d20");

  const [quantidade, setQuantidade] = useState(1);

  const [modificador, setModificador] = useState(0);

  const [resultado, setResultado] = useState("-");

  const [ultimaQuantidade, setUltimaQuantidade] = useState(1);
  const [ultimoDado, setUltimoDado] = useState("d20");
  const [ultimoModificador, setUltimoModificador] = useState(0);

  function rolarDado() {
    const faces = Number(dadoSelecionado.replace("d", ""));

    let resultados = [];

    for (let i = 0; i < quantidade; i++) {
      const valor = Math.floor(Math.random() * faces) + 1;
      resultados.push(valor);
    }

    const total =
      resultados.reduce((soma, valor) => soma + valor, 0) + modificador;

    setRolagens(resultados);
    setResultado(total);

    setUltimaQuantidade(quantidade);
    setUltimoDado(dadoSelecionado);
    setUltimoModificador(modificador);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Rolagem de Dados</Text>

      <View style={styles.resultadoBox}>
        <Text style={styles.dadoAtual}>
          {ultimaQuantidade}
          {ultimoDado}
          {ultimoModificador !== 0 &&
            `${ultimoModificador > 0 ? "+" : ""}${ultimoModificador}`}
        </Text>

        <Text style={styles.resultado}>{resultado}</Text>

        <Text style={styles.detalhes}>
  Dados: {rolagens.join(", ")}
</Text>

{ultimoModificador !== 0 && (
  <Text style={styles.detalhes}>
    Modificador:
    {ultimoModificador > 0 ? "+" : ""}
    {ultimoModificador}
  </Text>

        )}
      </View>

      <FlatList
        horizontal
        data={dados}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.dadoButton,
              dadoSelecionado === item && styles.dadoSelecionado,
            ]}
            onPress={() => setDadoSelecionado(item)}
          >
            <Text
              style={[
                styles.dadoTexto,
                dadoSelecionado === item && {
                  color: "#000",
                },
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.controle}>
        <Text style={styles.label}>Quantidade</Text>

        <View style={styles.linha}>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => quantidade > 1 && setQuantidade(quantidade - 1)}
          >
            <Text style={styles.botaoTexto}>-</Text>
          </TouchableOpacity>

          <Text style={styles.valor}>{quantidade}</Text>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => setQuantidade(quantidade + 1)}
          >
            <Text style={styles.botaoTexto}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.controle}>
        <Text style={styles.label}>Modificador</Text>

        <View style={styles.linha}>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => setModificador(modificador - 1)}
          >
            <Text style={styles.botaoTexto}>-</Text>
          </TouchableOpacity>

          <Text style={styles.valor}>
            {modificador >= 0 ? `+${modificador}` : modificador}
          </Text>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => setModificador(modificador + 1)}
          >
            <Text style={styles.botaoTexto}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.rolarButton} onPress={rolarDado}>
        <Text style={styles.rolarTexto}>ROLAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    paddingTop: 40,
  },

  titulo: {
    color: "#39FF14",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  resultadoBox: {
    alignSelf: "center",
    width: 320,
    minHeight: 300,
    backgroundColor: "#2c2c2c",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 25,
    padding: 20,
  },

  dadoAtual: {
    color: "#FFF",
    fontSize: 32,
    marginBottom: 20,
  },

  resultado: {
    color: "#39FF14",
    fontSize: 80,
    fontWeight: "bold",
  },

  dadoButton: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: "#39FF14",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },

  dadoSelecionado: {
    backgroundColor: "#39FF14",
  },

  dadoTexto: {
    color: "#39FF14",
    fontSize: 24,
    fontWeight: "bold",
  },

  controle: {
    marginTop: 30,
    alignItems: "center",
  },

  label: {
    color: "#FFF",
    fontSize: 20,
    marginBottom: 10,
  },

  linha: {
    flexDirection: "row",
    alignItems: "center",
  },

  botao: {
    width: 50,
    height: 50,
    backgroundColor: "#39FF14",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  botaoTexto: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
  },

  valor: {
    color: "#FFF",
    fontSize: 28,
    marginHorizontal: 30,
    minWidth: 60,
    textAlign: "center",
  },

  rolarButton: {
    marginTop: 40,
    alignSelf: "center",
    width: 220,
    height: 60,
    backgroundColor: "#39FF14",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,

    shadowColor: "#39FF14",
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 15,
  },

  rolarTexto: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
  },
  listaResultados: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },

  valorIndividual: {
    backgroundColor: "#444",
    margin: 3,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },

  valorTexto: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  detalhes: {
    color: "#FFF",
    fontSize: 16,
    marginTop: 5,
    textAlign: "center",
  },
});
