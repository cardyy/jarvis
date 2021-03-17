import React, { useRef, useEffect, useState } from "react";
import {
  SafeAreaView,
  Button,
  TextInput,
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  Switch,
  Image,
  FlatList
} from 'react-native';
import {NativeEventEmitter, NativeModules} from 'react-native';
import { icons, images, SIZES, COLORS, FONTS } from './constants'


 
 
const styles = StyleSheet.create({
    container3: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})


module.exports = {
  FoodScreen: FoodScreen,
};