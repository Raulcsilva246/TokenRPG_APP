import { StyleSheet, Text, View } from "react-native";

export default function Atributos(){

  return(
    <>
      <View style={styles.container}>
        <View style={styles.containerBasicInfo}>
            <Text style={styles.title}>Atributos</Text>
          <View style={atributos.viewValue}>
              <Text style={atributos.textStatus}>FOR:</Text> <Text style={atributos.boxValue}>0</Text>
          </View>
          <View style={atributos.viewValue}>
              <Text style={atributos.textStatus}>AGL:</Text> <Text style={atributos.boxValue}>0</Text>
          </View>
          <View style={atributos.viewValue}>
              <Text style={atributos.textStatus}>VIG:</Text> <Text style={atributos.boxValue}>0</Text>
          </View>
          <View style={atributos.viewValue}>
              <Text style={atributos.textStatus}>INT:</Text> <Text style={atributos.boxValue}>0</Text>
          </View>
          <View style={atributos.viewValue}>
              <Text style={atributos.textStatus}>PRE:</Text> <Text style={atributos.boxValue}>0</Text>
          </View>

        </View>

        <View style={styles.containerBasicInfo}>
            <Text style={styles.title}>Reações</Text>
          <View style={atributos.viewValue}>
              <Text style={atributos.textStatus}>CA</Text> <Text style={atributos.boxValue}>0</Text>
          </View>
          <View style={atributos.viewValue}>
              <Text style={atributos.textStatus}>Bloqueio:</Text> <Text style={atributos.boxValue}>0</Text>
          </View>
          <View style={atributos.viewValue}>
              <Text style={atributos.textStatus}>Esquiva:</Text> <Text style={atributos.boxValue}>0</Text>
          </View>
          <View style={atributos.viewValue}>
              <Text style={atributos.textStatus}>Deslocamento:</Text> <Text style={atributos.boxValue}>0</Text>
          </View>

        </View>


        <View style={styles.containerBasicInfo}>

          <Text style={atributos.textStatus}>Pericias: Em breve</Text>

        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({

  title: {
    marginTop: 10,
    paddingVertical: 8,
    color: '#39FF14',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#39FF14',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
  },

  containerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#1a1f2e',
    borderBottomColor: 'gray'
  },

  containerDesc: {
    padding: 10,
    flexDirection: 'row',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'gray',
  },

  containerBasicInfo:{
    margin: 15,
    borderWidth: 1,
    padding: 20,
    width: 350,
    backgroundColor: '#1a1f2e',
    alignItems: 'center',
  },

  container:{
    alignItems: 'center',
  },

});

const atributos = StyleSheet.create({

textStatus: {
    color: 'grey',
    fontSize: 28,
    fontWeight: 'bold',
    margin: 10,
  },

  boxValue: {
    margin: 5,
    borderWidth: 1,


    backgroundColor: '#afafaf',
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },

  viewValue: {
        flexDirection: 'row',
        justifyContent: 'center',
  },


})