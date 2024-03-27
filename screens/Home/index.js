import React from 'react';
import { Button, View, Text , Image, StyleSheet} from 'react-native';
import logo from '../../assets/pieces/JogoDaVelha.png';



const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.centeredView}>
        <Text style={styles.modalTitle}>
          Jogo da Velha #
        </Text>

        <Image source={logo} style={styles.modalImage}/>

        <Button style={styles.button}
          title="Aperte para jogar"
          color="purple"
          onPress={() => navigation.navigate('Game')}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    margin: 20,
    backgroundColor: 'grey',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTitle: {
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Pika Ultra Script',
  },
  modalImage:{
    width: 250,
    height: 250
  }
})

export default HomeScreen;