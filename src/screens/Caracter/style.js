import { StyleSheet } from "react-native";
//Caracter
export const styles = StyleSheet.create({
    containerH:{
    flexDirection: 'row',
    },

  header: {

    width: '100%',

    backgroundColor: '#1a1f2e',

    borderBottomWidth: 1,
    borderBottomColor: '#afafaf',

    paddingTop: 50,
    paddingBottom: 20,

    paddingHorizontal: 20,
  },

  tabsContainer: {

    flexDirection: 'row',

    backgroundColor: '#1a1f2e',

    paddingVertical: 10,

    justifyContent: 'space-around',
  },

  tab: {

    paddingVertical: 8,
    paddingHorizontal: 12,

    borderRadius: 8,
  },

  tabAtiva: {

    backgroundColor: '#444f70',
  },

  tabTexto: {

    color: '#39FF14',

    fontWeight: 'bold',
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
  editBottom:{
    marginTop: 10,
    marginLeft: 150,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 35,
    borderWidth: 2,
    borderColor: '#39FF14',
    borderRadius: 10,
  }
});