/**********************************
 * @email: thiagomatrix@gmail.com
 * @Autor: Thiago Braga
 *********************************/


import React, { Component } from 'react';


import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  Button,
  Image,
  Alert,
  View
} from 'react-native';

import Topo from './src/components/topo';

import Icone from './src/components/icone';

//import FontAwesome, { Icons } from 'react-native-fontawesome';



class PPT extends Component {


  constructor(props) {

    super(props);

    var texto1 = 'Qualquer coisa';

    this.state = { 

      escolhaUsuario : '', 
      escolhaComputador : '',
      resultado : '', 
      placarUsuario : 0, 
      placarComputador : 0 

      };    
  }

  resetar(){

    this.setState({

    escolhaUsuario: '', 
    escolhaComputador: '',
    resultado: '', 
    placarUsuario: 0,
    placarComputador: 0

    });

  }

  jokenpo(escolhaUsuario) {

    var placarComputador = this.state.placarComputador;

    var placarUsuario = this.state.placarUsuario;

    var number = Math.random();

    var resultado = '';

    var escolhaComputador = '';

    number = Math.floor(number * 3);

    switch(number){

    case 0:
        escolhaComputador = 'pedra';
        break;
    case 1:
        escolhaComputador = 'papel';
        break;
    case 2:
        escolhaComputador = 'tesoura';
        break;

    default:
        escolhaComputador = '';
    }

   if(escolhaComputador == escolhaUsuario){

    resultado = 'Empate';

   }else if (escolhaComputador == 'pedra' && escolhaUsuario == 'tesoura'){

    resultado = 'Você Perdeu';

    placarUsuario = placarUsuario;

    placarComputador = placarComputador + 1;

  }else if (escolhaComputador == 'tesoura' && escolhaUsuario == 'papel'){

    resultado = 'Você Perdeu';

    placarUsuario = placarUsuario;

    placarComputador = placarComputador + 1;
 
  }else if (escolhaComputador == 'papel' && escolhaUsuario == 'pedra'){

    resultado = 'Você Perdeu';

    placarUsuario = placarUsuario;

    placarComputador = placarComputador + 1;

  }else if (escolhaComputador == 'tesoura' && escolhaUsuario == 'pedra'){

    resultado = 'Você Ganhou';

    placarComputador = placarComputador;

    placarUsuario = placarUsuario + 1;

 }else if (escolhaComputador == 'papel' && escolhaUsuario == 'tesoura'){

    resultado = 'Você Ganhou';

    placarComputador = placarComputador;

    placarUsuario = placarUsuario + 1;

 }else if (escolhaComputador == 'pedra' && escolhaUsuario == 'papel'){

    resultado = 'Você Ganhou';

    placarUsuario = placarUsuario + 1;

    placarComputador = placarComputador;

 } 

    

    this.setState({

    escolhaUsuario: escolhaUsuario, 
    escolhaComputador: escolhaComputador,
    resultado: resultado, 
    placarUsuario: placarUsuario,
    placarComputador: placarComputador

    });

    

  }



  render() {

    return (

      <View>

      <Topo></Topo>
      
      <View style={styles.painelAcoes} >


      <Button title='Pedra' onPress={ () => { this.jokenpo('pedra') }} />
      <Button title='Papel' onPress={ () => { this.jokenpo('papel') }} />
      <Button title='Tesoura' onPress={ () => { this.jokenpo('tesoura') }} />

      <Button title='Zerar Placar' onPress={ () => { this.resetar() }} />
      
      </View>

      <Text>{'\n'}</Text>

      <View style={styles.status}>
      <Text style={styles.placarUsuario}> {this.state.resultado}</Text>
      <Text>{'\n'}</Text>

      <View style={styles.placarFormat} >

      <Icone escolha={this.state.escolhaUsuario}    jogador='Você'></Icone>
      <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>

      </View>
      
      <Text>{'\n'}</Text></View>

      <View style={styles.placar}>
      <View style={styles.placarFormat} >
      <Text>Placar Você</Text>
      <Text>Placar Computador </Text>
      
      </View>
      <View style={styles.placarNumeros} >
      <Text >   {this.state.placarUsuario}   </Text>
      <Text >   {this.state.placarComputador}</Text>
      </View>
      </View>
      </View>

    );
  }
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  placar: {
    paddingVertical: 30,
    backgroundColor: '#F5FCFF',
    marginTop: 50,
  },
  btnEscolha: {
    width:90,
  },

  painelAcoes: {

    flexDirection: 'row',
    justifyContent: 'space-between'

  },

  placarFormat:{

  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical:10,
  paddingHorizontal:50,
  justifyContent: 'space-between',


  },

  placarNumeros:{

  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical:10,
  paddingLeft:80,
  paddingRight:110,
  justifyContent: 'space-between',


  },

  jogador:{
  
   //alignItems: 'center',
   paddingTop: 8,
   fontSize: 16,
   //paddingRight:50,
   textAlign: 'center',
   //paddingLeft:30,

  },


  placarUsuario:{

    fontSize: 30,
    fontWeight: 25,
    color: 'red',
    //fontStyle:'italic',
    fontWeight: '300',
    textAlign: 'center',
    alignItems: 'stretch',

  },

  placarComputador:{

    fontSize: 100,
    color: 'red',
    //fontStyle:'italic',
    fontWeight: '300',
    textAlign: 'center',
    alignItems: 'stretch',
  },

  barraTop:{

    backgroundColor: '#31a0eb'
  },

  status:{

    paddingVertical: 5,
    paddingHorizontal: 50,

  }
});




AppRegistry.registerComponent('PPT', () => PPT);
