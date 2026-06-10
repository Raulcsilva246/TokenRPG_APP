import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  StyleSheet,
} from "react-native";

export default function Habilidades({ ficha, navigation }) {
  return (
    <View style={styles.container}>
      {ficha.habilidades.map((habilidade) => {
        const cor = habilidade.tipo === "Ativa" ? "red" : "yellow";

        return (
          <View
            key={habilidade.id}
            style={[styles.box_select, { borderColor: cor }]}
          >
            <View style={styles.header}>
              <Text style={[styles.textname, { color: cor }]}>
                {habilidade.nome}
              </Text>

              <View style={[styles.box_lv, { borderColor: cor }]}>
                <Text style={[styles.textLV, { color: cor }]}>
                  ID: {habilidade.id}
                </Text>
              </View>
            </View>

            <Text style={styles.text}>
              Tipo:
              <Text style={{ color: cor }}> {habilidade.tipo}</Text>
            </Text>

            <Text style={styles.text}>Dano: {habilidade.dano}</Text>

            <Text style={styles.text}>Custo: {habilidade.custo}</Text>

            <Text style={styles.text}>Alcance: {habilidade.alcance}</Text>

            <Text style={styles.textInput}>Descrição:</Text>

            <View style={styles.containerDesc}>
              <Text style={styles.text}>{habilidade.descricao}</Text>
            </View>
          </View>
        );
      })}
      <View style={b_Add.box}>
        <TouchableOpacity
          style={b_Add.box_buttom_add}
          onPress={() =>
            navigation.navigate("CreatH", {
              id: ficha.id,
            })
          }
        >
          <Text style={b_Add.text}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={b_Add.box_buttom_Delete}
          onPress={() =>
            navigation.navigate("DeleteH", {
              idFicha: ficha.id,
            })
          }
        >
          <Text style={b_Add.text}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  box_select: {
    backgroundColor: "#1a1f2e",
    padding: 10,
    borderWidth: 1,

    width: 300,

    marginTop: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  textname: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    width: 200,
  },

  box_lv: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  textLV: {
    fontWeight: "bold",
  },

  text: {
    color: "#fff",
    marginTop: 5,
  },

  textInput: {
    marginTop: 20,
    marginRight: 10,
    marginBottom: 10,
    color: "#fff",
    fontSize: 20,
  },

  containerDesc: {
    padding: 10,
    flexDirection: "row",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "gray",
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
  box: {
    flexDirection: "row",
  },
});
