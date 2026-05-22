import { StyleSheet } from "react-native";

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
});