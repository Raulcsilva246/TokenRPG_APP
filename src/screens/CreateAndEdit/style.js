import { StyleSheet } from "react-native";
//Style_create&Edit
export const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'black',
  },
  

  
  header: {
    
    width: '100%',

  backgroundColor: '#1a1f2e',
  borderWidth: 1,
  borderBottomColorColor: '#afafaf',

  paddingTop: 50,
  paddingBottom: 20,

  paddingHorizontal: 20,
},

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

bottom: {
  height: 50,
  width: 200,
  margin: 10,
  marginBottom: 15,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ffaa00',
  borderRadius: 6,
  borderWidth: 4,
  borderColor: '#ffbf40',

  shadowColor: '#ffaa00',
  shadowOffset:{
  width: 0,
  height: 0
}},

B_text: {
    fontSize: 30,
    fontWeight: 'bold',


}
  
});

export const input = StyleSheet.create({

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

export const status = StyleSheet.create({

  containerAlpha:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
   
  },
  containerBasicInfo:{
    margin: 20,
    borderWidth: 1,
    padding: 20,
    width: 350,
    backgroundColor: '#1a1f2e',
  },

  textInput:{
    marginTop: 20,
    marginBottom: 10,
    color: '#fff',
    fontSize: 20,
  },

  input:{
    height: 50,
    width: 50,
    fontSize: 20,
    textAlign: 'center',
    padding: 8,
    margin: 20,
    backgroundColor: 'gray',
  }

});