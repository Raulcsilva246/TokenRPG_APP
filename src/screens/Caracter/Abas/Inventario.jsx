import { StyleSheet, Text, View } from "react-native";

  
  

export default function Inventario(){

  

    return(

      <>

      <View style={styles.container}>

        <Text style={styles.title}>title</Text>

      </View>

      </>

    )

  

}

  

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#eaeaea',

    padding: 30

  },

  title: {

    marginTop: 16,

    paddingVertical: 8,

    borderWidth: 4,

    borderColor: '#20232a',

    borderRadius: 6,

    backgroundColor: '#61dafb',

    color: '#20232a',

    textAlign: 'center',

    fontSize: 30,

    fontWeight: 'bold',

  }

  },

);