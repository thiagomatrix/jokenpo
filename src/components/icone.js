/**********************************
 * @email: thiagomatrix@gmail.com
 * @Autor: Thiago Braga
 *********************************/

import React, { Component } from 'react';

import { StyleSheet, Text, Image, View } from 'react-native';

const ImgPedra = require('../../imgs/pedra.png');

const ImgPapel = require('../../imgs/papel.png');

const ImgTesoura = require('../../imgs/tesoura.png');

class Icone extends Component {

  render() {
      //this.props.escolha
      //this.props.jogador

     if (this.props.escolha === 'pedra') {
      return (

      <View>
      <Text style={styles.jogador}>{this.props.jogador}</Text>
      <Image source={(ImgPedra)} />      
      </View>
      );
      } else if (this.props.escolha === 'papel') {
      return (

      <View>
      <Text style={styles.jogador}>{this.props.jogador}</Text>
      <Image source={ImgPapel} />      
      </View>
      );
      } else if (this.props.escolha === 'tesoura') {
        return (

      <View>
      <Text style={styles.jogador}>{this.props.jogador}</Text>
      <Image source={ImgTesoura} />      
      </View>

      );
      } 
        return (

      <View>
      <Text style={{ paddingVertical: 44 }} />
          
      </View>

      );
        }
      }
    

  const styles = StyleSheet.create({

  jogador: {
  
   //alignItems: 'center',
   paddingTop: 8,
   fontSize: 16,
   //paddingRight:50,
   textAlign: 'center',
   //paddingLeft:30,

  },

});

  export default Icone;
