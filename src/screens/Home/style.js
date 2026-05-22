import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  box_select: {
    backgroundColor: '#1a1f2e',
    padding: 10,
    borderWidth: 1,
    borderTopColor: '#39FF14',
    borderColor: '#252833',

  },

});

export const caracter = StyleSheet.create({
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  textname: {
    flex: 1,
    color: '#00ff88',
    fontSize: 22,
    fontWeight: 'bold',
  },

  text: {
    color: '#afafaf',
  },

  textLV: {
    color: '#ffaa00',
    fontWeight: 'bold',
  },

  box_lv: {
    alignItems: 'center',
    justifyContent: 'center',

    width: 60,
    height: 30,

    borderWidth: 1,
    borderColor: '#ffaa00',
  }
});

export const b_Add = StyleSheet.create({

  box_buttom: {
     position: 'absolute',

    right: 25,
    bottom: 65,

    width: 50,
    height: 50,

    backgroundColor: '#39FF14',

    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#39FF14',
shadowOffset:{
    width: 0,
    height: 0
  },

  shadowOpacity: 1,
  shadowRadius: 25,

  elevation: 20,
  },

  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'

  },
});
