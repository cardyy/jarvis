import React, { useRef, useEffect, useState } from "react";
import {
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
  Image
} from 'react-native';
import {NativeEventEmitter, NativeModules} from 'react-native';

import {AlanView} from './AlanSDK.js';

const {AlanManager, AlanEventEmitter} = NativeModules;
const alanEventEmitter = new NativeEventEmitter(AlanEventEmitter);

const screenWidth = Dimensions.get('window').width;
const textWidth = screenWidth - 40;


const subscription = alanEventEmitter.addListener('command', (data) => {
  console.log(`got command event ${JSON.stringify(data)}`);
  // {"command":"showAlert","text":"text"}
  createAlert(data.text);
});

function App() {
const [authDataValue,setAuthDataValue] = useState('test auth data')

  useEffect(()=>{
  	subscription.remove();
  },[])
  
 
return (
<View style ={styles.container}>
 <Image source={require('./assets/center.jpg')}
      />
        <AlanView
          projectid={
            '9f230096bc8fef2aaeafe86795455deb2e956eca572e1d8b807a3e2338fdd0dc/stage'
          }
          host={'studio.alan.app'}
          authData={{text:authDataValue}}
        />
        </View>
      )
    
    
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#0C1A27',
   

  }
});
export default App;