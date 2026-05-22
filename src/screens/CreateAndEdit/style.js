import { StyleSheet } from "react-native";

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