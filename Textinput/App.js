import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeName] = React.useState('gelo');
  const [number, onChangeNumber] = React.useState('');
  const [address, onChangeAddress] = React.useState('');
   const [school, onChangeSchool] = React.useState('');
    const [course, onChangeCourse] = React.useState('');
     const [email, onChangeEmail] = React.useState('');
      const [contact_no, onChangeContact] = React.useState('');


  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder="Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="AGE"
          keyboardType="numeric"
        />
          <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={address}
          placeholder="address"
        />
          <TextInput
          style={styles.input}
          onChangeText={onChangeSchool}
          value={school}
           placeholder="school"
        />
          <TextInput
          style={styles.input}
          onChangeText={onChangeCourse}
          value={course}
           placeholder="course"
        />
          <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
           placeholder="email"
        />
         <TextInput
          style={styles.input}
          onChangeText={onChangeContact}
          value={contact_no}
           placeholder="contact no:"
        />

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
   

});

export default TextInputExample;