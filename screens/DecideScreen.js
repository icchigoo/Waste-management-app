import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const DecideScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className=" bg-gray-100 justify-center items-center space-y-10">
      <Animatable.Image 
        className=" mt-[50px] h-[199px] w-[199px]"
        source={require('../assets/logo.png')}
        animation="slideInUp"
      />
      
      <Animatable.View style={styles.buttonContainer} animation="fadeInLeft">
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("LoginAsPers")}}>
          <Text style={styles.buttonText}>
              Malai fhor falna maan cha
          </Text>
        </TouchableOpacity>
      </Animatable.View>

      <Animatable.Text 
        animation="fadeInDown"
        className="text-center text-[#022b26] font-bold text-[20px]">
          Tepai lai k garna maan cha ta
      </Animatable.Text>

      <Animatable.View style={styles.buttonContainer} animation="fadeInLeft">
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("LoginAsComp")}}>
          <Text style={styles.buttonText}>
              Malai fhor lina maan cha
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </SafeAreaView>
  );
}

export default DecideScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  button: {
      backgroundColor: "#086b2e",
      width: "60%",
      padding: 30,
      borderRadius: 50,
      alignItems: "center",
  },
  buttonText: {
      color: "white",
      fontWeight: "700",
      fontSize: 17,
  },
})