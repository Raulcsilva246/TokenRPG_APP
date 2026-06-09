import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Inventario({ ficha, navigation }) {
  console.log("INVENTARIO:", ficha.inventario);
  return (
    <>
      <View style={styles.container}>
        {/*-------------Dinheiro----------------- */}
        {ficha.inventario.dinheiro.map((dinheiro) => (
          <View
            key={dinheiro.id}
            style={[styles.box_select, { borderColor: "yellow" }]}
          >
            <View style={styles.header}>
              <Text style={[styles.textname, { color: "yellow" }]}>
                {dinheiro.nome}
              </Text>

              <View style={[styles.box_lv, { borderColor: "yellow" }]}>
                <Text style={[styles.textLV, { color: "yellow" }]}>
                  ID: {dinheiro.id}
                </Text>
              </View>
            </View>

            <Text style={styles.text}>
              Tipo:
              <Text style={{ color: "yellow" }}> Dinheiro</Text>
            </Text>

            <Text style={styles.text}>Quantidade: {dinheiro.quantidade}</Text>
          </View>
        ))}

        {/*-------------Armas----------------- */}
        {ficha.inventario.armas.map((arma, index) => (
          <View key={index} style={[styles.box_select, { borderColor: "red" }]}>
            <View style={styles.header}>
              <Text style={[styles.textname, { color: "red" }]}>
                {arma.nome}
              </Text>

              <View style={[styles.box_lv, { borderColor: "red" }]}>
                <Text style={[styles.textLV, { color: "red" }]}>
                  ID: {arma.id}
                </Text>
              </View>
            </View>

            <Text style={styles.text}>
              Tipo: <Text style={{ color: "red" }}>Armamento</Text>
            </Text>

            <Text style={styles.text}>Dano: {arma.dano}</Text>

            <Text style={styles.textInput}>Descrição:</Text>

            <View style={styles.containerDesc}>
              <Text style={styles.text}>{arma.descricao}</Text>
            </View>
          </View>
        ))}
        {/*-------------equipamentos----------------- */}
        {ficha.inventario.equipamentos.map((equipamento, index) => (
          <View
            key={index}
            style={[styles.box_select, { borderColor: "orange" }]}
          >
            <View style={styles.header}>
              <Text style={[styles.textname, { color: "orange" }]}>
                {equipamento.nome}
              </Text>

              <View style={[styles.box_lv, { borderColor: "orange" }]}>
                <Text style={[styles.textLV, { color: "orange" }]}>
                  ID: {equipamento.id}
                </Text>
              </View>
            </View>

            <Text style={styles.text}>Tipo: Equipamento</Text>

            <Text style={styles.textInput}>Descrição:</Text>

            <View style={styles.containerDesc}>
              <Text style={styles.text}>{equipamento.descricao}</Text>
            </View>
          </View>
        ))}

        {/*-------------itens----------------- */}
        {ficha.inventario.itens.map((item, index) => (
          <View
            key={index}
            style={[styles.box_select, { borderColor: "lightblue" }]}
          >
            <View style={styles.header}>
              <Text style={[styles.textname, { color: "lightblue" }]}>
                {item.nome}
              </Text>

              <View style={[styles.box_lv, { borderColor: "lightblue" }]}>
                <Text style={[styles.textLV, { color: "lightblue" }]}>
                  ID: {item.id}
                </Text>
              </View>
            </View>

            <Text style={styles.text}>Tipo: Item</Text>

            <Text style={styles.textInput}>Descrição:</Text>

            <View style={styles.containerDesc}>
              <Text style={styles.text}>{item.descricao}</Text>
            </View>
          </View>
        ))}
    <View style={b_Add.box}>
        <TouchableOpacity
          style={b_Add.box_buttom_add}
          onPress={() =>
            navigation.navigate("CreatT", {
              id: ficha.id,
            })
          }
        >
          <Text style={b_Add.text}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            b_Add.box_buttom_add,
            {
              backgroundColor: "red",
              
              shadowColor: "#ff4a4a",

            },
          ]}
          onPress={() =>
            navigation.navigate("DeleteItem", {
              idFicha: ficha.id,
            })
          }
        >
          <Text style={b_Add.text}>-</Text>
        </TouchableOpacity>
        </View>
      </View>
    </>
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

  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  box: {
        flexDirection: "row",
  }
});
