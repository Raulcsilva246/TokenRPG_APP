import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  StyleSheet
} from 'react-native';

  
  

export default function Habilidades({ navigation }){

  

    return(

      <>
      <View style={styles.container}>

        {/*-------------Habilidade Ativa----------------- */}
        <View
          style={[styles.box_select, {borderColor: 'red'}]}
        >

          <View style={styles.header}>

            <Text
              style={[styles.textname, {color: 'red'}]}
              numberOfLines={1}
            >
              Habilidade_Nome
            </Text>

            <View style={[styles.box_lv, {borderColor: 'red'}]}>
              <Text style={[styles.textLV, {color: 'red'}]}>
                ID: 
              </Text>
            </View>

          </View>

          <Text style={styles.text}>
            Tipo: <Text style={{color: 'red'}}>Ativa</Text>
          </Text>

          <Text style={styles.text}>
            Dano:
          </Text>

          <Text style={styles.text}>
            Custo:
          </Text>

          <Text style={styles.text}>
            alcance:
          </Text>

            <Text style={styles.textInput}>Descrição:</Text>
                        <View style={styles.containerDesc}>
                            
                            <Text style={styles.textInput}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates nemo adipisci, debitis quas tempore laborum aliquid repellendus similique sequi cupiditate, rerum illo impedit assumenda quidem optio non ipsam atque officia!</Text>
                        </View>

        </View>

                {/*-------------Habilidade Passiva----------------- */}
        <View
          style={[styles.box_select, {borderColor: 'yellow'}]}
        >

          <View style={styles.header}>

            <Text
              style={[styles.textname, {color: 'yellow'}]}
              numberOfLines={1}
            >
              Habilidade_Nome
            </Text>

            <View style={[styles.box_lv, {borderColor: 'yellow'}]}>
              <Text style={[styles.textLV, {color: 'yellow'}]}>
                ID: 
              </Text>
            </View>

          </View>

          <Text style={styles.text}>
            Tipo: <Text style={{color: 'yellow'}}>Passiva</Text>
          </Text>

          <Text style={styles.text}>
            Dano:
          </Text>

            <Text style={styles.text}>
            Custo:
          </Text>

          <Text style={styles.text}>
            Alcance:
          </Text>

            <Text style={styles.textInput}>Descrição:</Text>
                        <View style={styles.containerDesc}>
                            
                            <Text style={styles.textInput}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates nemo adipisci, debitis quas tempore laborum aliquid repellendus similique sequi cupiditate, rerum illo impedit assumenda quidem optio non ipsam atque officia!</Text>
                        </View>

        </View>

                

<TouchableOpacity 
style={b_Add.box_buttom_add}
onPress={() => navigation.navigate('CreatH')}>
        <Text style={b_Add.text}>+</Text>
    </TouchableOpacity>

    <TouchableOpacity style={b_Add.box_buttom_Delete}>
        <Text style={b_Add.text}>-</Text>
    </TouchableOpacity>
      </View>
    </>

    )

  

}

  

const styles = StyleSheet.create({

  container:{
    alignItems: 'center',
  },

  box_select: {
    backgroundColor: '#1a1f2e',
    padding: 10,
    borderWidth: 1,

    width: 300,

    marginTop: 20,
  },

  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  textname:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    width: 200,
  },

  box_lv:{
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,

  },

  textLV:{

    fontWeight: 'bold',
  },

  text:{
    color: '#fff',
    marginTop: 5,
  },

  textInput:{
    marginTop: 20,
    marginRight: 10, 
    marginBottom: 10,
    color: '#fff',
    fontSize: 20,
  },

  containerDesc: {
    padding: 10,
    flexDirection: 'row',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'gray',
  },

});

export const b_Add = StyleSheet.create({

  box_buttom_add: {
     position: 'absolute',

    right: 25,
    bottom: 0,

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

    box_buttom_Delete: {
     position: 'absolute',

    right: 25,
    bottom: -65,

    width: 50,
    height: 50,

    backgroundColor: '#ff1414',

    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#ff1414',
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