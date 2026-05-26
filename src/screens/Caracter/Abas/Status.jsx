import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

  
  

export default function Status(){

  

    return(

     <>

    <View style={status.container}>
        <View style={status.containerBasicInfo}>
            <View style={}>
                <Text>Vida</Text>
                <View><Text>0</Text></View>
                <Text>/</Text>
                <View><Text>100</Text></View>
            </View>
            
            <View>
            <TouchableOpacity>
                <Text>-</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>+</Text>
            </TouchableOpacity>

            </View>
        </View>

        <View style={input.containerBasicInfo}>

        

        </View>


        <View style={input.containerBasicInfo}>

        

        </View>
    </View>



      </>
    )

  
}

  

const styles = StyleSheet.create({

    title: {
    marginTop: 10,
    paddingVertical: 8,
    color: '#39FF14', // Texto em verde neon
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

  },

);

const status = StyleSheet.create({

  container:{
    alignItems: 'center',
  },
  containerBasicInfo:{
    margin: 15,
    borderWidth: 1,
    padding: 20,
    width: 350,
    backgroundColor: '#1a1f2e',
    
  },

  textInput:{
    marginTop: 20,
    marginRight: 10, 
    marginBottom: 10,
    color: '#fff',
    fontSize: 20,
  },

  input:{
    height: 32,
    fontSize: 12,
    padding: 8,
    backgroundColor: 'gray',
  }

});