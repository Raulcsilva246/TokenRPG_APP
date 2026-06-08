import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { removerUltimaPericia, buscarFicha } from "../../../services/Banco";

export default function Atributos({ ficha, navigation, setFicha }) {
  console.log("PERICIAS DA TELA:", ficha.pericias);

  const id = ficha.id;
  async function remover() {
    await removerUltimaPericia(ficha.id);

    const fichaAtualizada = await buscarFicha(ficha.id);

    setFicha(fichaAtualizada);
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerBasicInfo}>
        <Text style={styles.title}>Atributos</Text>

        <View style={atributos.viewValue}>
          <Text style={atributos.textStatus}>FOR:</Text>
          <Text style={atributos.boxValue}>{ficha.atributos.forca}</Text>
        </View>

        <View style={atributos.viewValue}>
          <Text style={atributos.textStatus}>AGL:</Text>
          <Text style={atributos.boxValue}>{ficha.atributos.agilidade}</Text>
        </View>

        <View style={atributos.viewValue}>
          <Text style={atributos.textStatus}>VIG:</Text>
          <Text style={atributos.boxValue}>{ficha.atributos.vigor}</Text>
        </View>

        <View style={atributos.viewValue}>
          <Text style={atributos.textStatus}>INT:</Text>
          <Text style={atributos.boxValue}>{ficha.atributos.intelecto}</Text>
        </View>

        <View style={atributos.viewValue}>
          <Text style={atributos.textStatus}>PRE:</Text>
          <Text style={atributos.boxValue}>{ficha.atributos.presenca}</Text>
        </View>
      </View>

      <View style={styles.containerBasicInfo}>
        <Text style={styles.title}>Reações</Text>

        <View style={atributos.viewValue}>
          <Text style={atributos.textStatus}>CA:</Text>
          <Text style={atributos.boxValue}>{ficha.reacoes.ca}</Text>
        </View>

        <View style={atributos.viewValue}>
          <Text style={atributos.textStatus}>Bloqueio:</Text>
          <Text style={atributos.boxValue}>{ficha.reacoes.bloqueio}</Text>
        </View>

        <View style={atributos.viewValue}>
          <Text style={atributos.textStatus}>Esquiva:</Text>
          <Text style={atributos.boxValue}>{ficha.reacoes.esquiva}</Text>
        </View>

        <View style={atributos.viewValue}>
          <Text style={atributos.textStatus}>Deslocamento:</Text>
          <Text style={atributos.boxValue}>{ficha.reacoes.deslocamento}</Text>
        </View>
      </View>

      <View style={styles.containerBasicInfo}>
        <Text style={styles.title}>Perícias</Text>

        <View style={{ width: "100%" }}>
          {ficha.pericias.length === 0 ? (
            <Text
              style={{
                color: "#888",
                textAlign: "center",
                marginTop: 10,
              }}
            >
              Nenhuma perícia cadastrada
            </Text>
          ) : (
            ficha.pericias.map((pericia, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  borderBottomWidth: 1,
                  borderBottomColor: "#444",
                  paddingVertical: 8,
                }}
              >
                <Text
                  style={{
                    color: "#FFF",
                    fontSize: 18,
                  }}
                >
                  {pericia.nome}
                </Text>

                <Text
                  style={{
                    color: "#39FF14",
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  +{pericia.valor}
                </Text>
              </View>
            ))
          )}
        </View>

        <View style={styles.containerInfo}>
          <TouchableOpacity style={b_Add.box_buttom_Delete} onPress={remover}>
            <Text style={b_Add.text}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={b_Add.box_buttom_add}
            onPress={() =>
              navigation.navigate("CreatP", {
                id: ficha.id,
              })
            }
          >
            <Text style={b_Add.text}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    paddingVertical: 8,
    color: "#39FF14",
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

  containerBasicInfo: {
    margin: 15,
    borderWidth: 1,
    padding: 20,
    width: 350,
    backgroundColor: "#1a1f2e",
    alignItems: "center",
  },

  container: {
    alignItems: "center",
  },
});

const atributos = StyleSheet.create({
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
    textAlign: "center",
    justifyContent: "center",
    fontSize: 18,
  },

  viewValue: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export const b_Add = StyleSheet.create({
  box_buttom_add: {
    margin: 10,

    width: 50,
    height: 50,

    backgroundColor: "#39FF14",

    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#39FF14",
    shadowOffset: {
      width: 0,
      height: 0,
    },

    shadowOpacity: 1,
    shadowRadius: 25,

    elevation: 20,
  },

  box_buttom_Delete: {
    margin: 10,

    width: 50,
    height: 50,

    backgroundColor: "#ff1414",

    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#ff1414",
    shadowOffset: {
      width: 0,
      height: 0,
    },

    shadowOpacity: 1,
    shadowRadius: 25,

    elevation: 20,
  },

  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
});
