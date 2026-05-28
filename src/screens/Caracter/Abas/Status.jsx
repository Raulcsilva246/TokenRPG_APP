import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

  
  

export default function Status(){

  

    return(

     <>

    <View style={status.container}>
        <View style={status.containerBasicInfo}>
            <View style={status.viewValue}>
                <Text style={status.textStatus}>Vida:</Text>
                <Text style={status.boxValue}>0</Text>
                <Text style={status.textStatus}>/</Text>
                <Text style={status.boxValue}>100</Text>
            </View>
            
            <View style={status.viewValue}>
            <TouchableOpacity style={status.bottomValue}>
                <Text style={status.textbottom}>-</Text>
            </TouchableOpacity>

            <TouchableOpacity style={status.bottomValue}>
                <Text style={status.textbottom}>+</Text>
            </TouchableOpacity>

            </View>
        </View>

        <View style={status.containerBasicInfo}>
            <View style={status.viewValue}>
                <Text style={status.textStatus}>Energia:</Text>
                <Text style={status.boxValue}>0</Text>
                <Text style={status.textStatus}>/</Text>
                <Text style={status.boxValue}>100</Text>
            </View>
            
            <View style={status.viewValue}>
            <TouchableOpacity style={status.bottomValue}>
                <Text style={status.textbottom}>-</Text>
            </TouchableOpacity>

            <TouchableOpacity style={status.bottomValue}>
                <Text style={status.textbottom}>+</Text>
            </TouchableOpacity>

            </View>
        

        </View>


        <View style={status.containerBasicInfo}>
            <View style={status.viewValue}>
                <Text style={status.textStatus}>Sanidade:</Text>
                <Text style={status.boxValue}>0</Text>
                <Text style={status.textStatus}>/</Text>
                <Text style={status.boxValue}>100</Text>
            </View>
            
            <View style={status.viewValue}>
            <TouchableOpacity style={status.bottomValue}>
                <Text style={status.textbottom}>-</Text>
            </TouchableOpacity>

            <TouchableOpacity style={status.bottomValue}>
                <Text style={status.textbottom}>+</Text>
            </TouchableOpacity>

            </View>
        

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
  viewValue: {
        flexDirection: 'row',
        justifyContent: 'center',
  },
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
  bottomValue: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#ffaa00',
    height: 40,
    width: 40,
  },
  textbottom: {
    color: 'black',
    fontSize: 30,
  }

});