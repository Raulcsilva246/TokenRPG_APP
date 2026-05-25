import { StyleSheet } from "react-native";
//Style_create&Edit
export const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'black',
  },
  returnBottom: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 35,
    borderWidth: 2,
    borderColor: '#39FF14',
    borderRadius: 10,
  },
  
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#39FF14',

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
  
});

export const input = StyleSheet.create({

  container:{
    alignItems: 'center',
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