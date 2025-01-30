import React from 'react';
import {StyleSheet, TextInput, Image,View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const logo = {
  uri: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg',
  width: 50,
  height: 50
  
}
const TextInputExample = () => {
  const [name, onChangeName] = React.useState('gelo');
  const [number, onChangeNumber] = React.useState('');
  const [address, onChangeAddress] = React.useState('');
   const [school, onChangeSchool] = React.useState('');
    const [course, onChangeCourse] = React.useState('');
     const [email, onChangeEmail] = React.useState('');
      const [contact_no, onChangeContact] = React.useState('');
       const [about_me, onChangeText] = React.useState('ABOUT ME');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
      <View
      style={styles.container}>
        <Image
        styles= {styles.logo} 
        source={logo}/>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder="Name"
        /></View>
         <View
      style={styles.container}>
        <Image 
        source={logo}/>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="AGE"
          keyboardType="numeric"
        /></View>   <View
      style={styles.container}><Image 
        source={logo}/>
        
          <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={address}
          placeholder="address"
        /> </View> <View
      style={styles.container}> <Image 
        source={logo}/>
          <TextInput
          style={styles.input}
          onChangeText={onChangeSchool}
          value={school}
           placeholder="school"
        /> </View>   <View
      style={styles.container}><Image 
        source={logo}/>
          <TextInput
          style={styles.input}
          onChangeText={onChangeCourse}
          value={course}
           placeholder="course"
        /> </View>  <View
      style={styles.container}> <Image 
        source={logo}/>
          <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
           placeholder="email"
        /> </View>  <View
      style={styles.container}> <Image 
        source={logo}/>
         <TextInput
          style={styles.input}
          onChangeText={onChangeContact}
          value={contact_no}
           placeholder="contact no:"
        />  </View>  <View
      style={styles.container}><Image 
        source={logo}/>

        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={text => onChangeText(text)}
          value={about_me}
          style={styles.multiline}
        />

        </View>
      
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({


  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  multiline: {
    borderBottomColor: '#000',
    borderWidth: 1,
    margin: 10
    
  },

  container: {
    flexDirection: 'row',
    
  }


  

   

});

export default TextInputExample;