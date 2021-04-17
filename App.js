import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, View,Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')


  const SignUp =()=>{
    fetch('https://17a126b3bcdc.ngrok.io/authentication/v1/user-sign-up/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: name,
    email: email,
    mobile:mobile,
    password:password
  })
}

);
  }
  return (
    <View style={styles.container}>
      <Text>Sign Up Here</Text>
      <TextInput placeholder="Enter Name" 
      value={name}
     onChangeText={(text)=>{setName(text)}}
      style={styles.input}/>

      <TextInput placeholder="Enter Email" 
       value={email}
       onChangeText={(text)=>{setEmail(text)}}
      style={styles.input}/>

      <TextInput placeholder="Enter Mobile"
       value={mobile}
       onChangeText={(text)=>{setMobile(text)}}
       style={styles.input}/>

      <TextInput placeholder="Enter Password"
       value={password}
       onChangeText={(text)=>{setPassword(text)}}
       secureTextEntry
       style={styles.input}/>

     <View style={{marginTop:15}}>
        <Button title="Sign In"  onPress={SignUp}/>
     </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{width:200,
    height:50,
    borderRadius:12,
    borderWidth:0.2,
    padding:10,
    marginTop:10}
});
