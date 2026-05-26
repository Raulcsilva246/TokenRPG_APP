import { StyleSheet } from "react-native";
//Global
export const g_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 30,
    
  },
    title: {
    marginTop: 16,
    marginBottom: 16,
    paddingVertical: 8,
    color: '#39FF14', // Texto em verde neon
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    
    // Efeito de brilho neon para o TEXTO no React Native:
    textShadowColor: '#39FF14',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
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
});