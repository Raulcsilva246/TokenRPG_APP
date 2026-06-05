import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { atualizarFicha } from "../../../services/Banco";

export default function Status({ ficha, id, setFicha }) {
  const [vida, setVida] = useState(ficha?.status?.vida?.atual || 0);

  const [energia, setEnergia] = useState(ficha?.status?.energia?.atual || 0);

  const [sanidade, setSanidade] = useState(ficha?.status?.sanidade?.atual || 0);

  async function alterarVida(valor) {
  const novaVida = Math.min(
    ficha.status.vida.max,
    Math.max(0, vida + valor)
  );

  const novoStatus = {
    ...ficha.status,
    vida: {
      ...ficha.status.vida,
      atual: novaVida,
    },
  };

  setVida(novaVida);

  setFicha({
    ...ficha,
    status: novoStatus,
  });

  await atualizarFicha(id, {
    status: novoStatus,
  });
}

async function alterarEnergia(valor) {
  const novaEnergia = Math.min(
    ficha.status.energia.max,
    Math.max(0, energia + valor)
  );

  const novoStatus = {
    ...ficha.status,
    energia: {
      ...ficha.status.energia,
      atual: novaEnergia,
    },
  };

  setEnergia(novaEnergia);

  setFicha({
    ...ficha,
    status: novoStatus,
  });

  await atualizarFicha(id, {
    status: novoStatus,
  });
}

async function alterarSanidade(valor) {
  const novaSanidade = Math.min(
    ficha.status.sanidade.max,
    Math.max(0, sanidade + valor)
  );

  const novoStatus = {
    ...ficha.status,
    sanidade: {
      ...ficha.status.sanidade,
      atual: novaSanidade,
    },
  };

  setSanidade(novaSanidade);

  setFicha({
    ...ficha,
    status: novoStatus,
  });

  await atualizarFicha(id, {
    status: novoStatus,
  });
}

  return (
    <View style={status.container}>
      {/* VIDA */}
      <View style={status.containerBasicInfo}>
        <View style={status.viewValue}>
          <Text style={[status.textStatus, { color: "red" }]}>Vida:</Text>

          <Text style={status.boxValue}>{vida}</Text>

          <Text style={status.textStatus}>/</Text>

          <Text style={status.boxValue}>{ficha.status.vida.max}</Text>
        </View>

        <View style={status.viewValue}>
          <TouchableOpacity
            style={status.bottomValue}
            onPress={() => alterarVida(-1)}
          >
            <Text style={status.textbottom}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={status.bottomValue}
            onPress={() => alterarVida(1)}
          >
            <Text style={status.textbottom}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ENERGIA */}
      <View style={status.containerBasicInfo}>
        <View style={status.viewValue}>
          <Text style={[status.textStatus, { color: "yellow" }]}>Energia:</Text>

          <Text style={status.boxValue}>{energia}</Text>

          <Text style={status.textStatus}>/</Text>

          <Text style={status.boxValue}>{ficha.status.energia.max}</Text>
        </View>

        <View style={status.viewValue}>
          <TouchableOpacity
            style={status.bottomValue}
            onPress={() => alterarEnergia(-1)}
          >
            <Text style={status.textbottom}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={status.bottomValue}
            onPress={() => alterarEnergia(1)}
          >
            <Text style={status.textbottom}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* SANIDADE */}
      <View style={status.containerBasicInfo}>
        <View style={status.viewValue}>
          <Text style={[status.textStatus, { color: "cyan" }]}>Sanidade:</Text>

          <Text style={status.boxValue}>{sanidade}</Text>

          <Text style={status.textStatus}>/</Text>

          <Text style={status.boxValue}>{ficha.status.sanidade.max}</Text>
        </View>

        <View style={status.viewValue}>
          <TouchableOpacity
            style={status.bottomValue}
            onPress={() => alterarSanidade(-1)}
          >
            <Text style={status.textbottom}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={status.bottomValue}
            onPress={() => alterarSanidade(1)}
          >
            <Text style={status.textbottom}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const status = StyleSheet.create({
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

  viewValue: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  textStatus: {
    color: "grey",
    fontSize: 28,
    fontWeight: "bold",
    margin: 10,
  },

  boxValue: {
    margin: 5,
    borderWidth: 1,
    backgroundColor: "#afafaf",
    padding: 10,
    minWidth: 60,
    textAlign: "center",
    fontSize: 18,
  },

  bottomValue: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    backgroundColor: "#ffaa00",
    height: 40,
    width: 40,
  },

  textbottom: {
    color: "black",
    fontSize: 30,
  },
});
