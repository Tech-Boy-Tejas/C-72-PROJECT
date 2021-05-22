import * as React from 'react';
import { StyleSheet, Text, View, TextInput,KeyboardAvoidingView,ToastAndroid } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WriteStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      author: '',
      title: '',
      story: '',
    }
  }

  updateDB = async() => {

    db.collection("storySubmission").add({
      'title':this.state.title,
      'author':this.state.author,
      'story':this.state.story 
    });

    ToastAndroid.show("STORY SUBMITTED",ToastAndroid.SHORT);


    this.setState({
      title:'',
      author:'',
      story:'',
    })
  }

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1,justifyContent: 'center',alignItems: 'center'}}
      behavior = "padding"
      enabled>
        <SafeAreaProvider>
          <Header
            backgroundColor="yellow"
            centerComponent={{
              text: 'STORY HUB',
              style: { color: 'black', fontSize: 30 },
            }}
          />
        </SafeAreaProvider>
        <View style={{ flex: 8 }}>
          <TextInput
            onChangeText={(word) => {
              this.setState({
                title: word
              });
            }}
            placeholder='WRITE THE TITLE OF THE STORY'
            value={this.state.title}
            style={styles.inputbox}>
          </TextInput>
          <TextInput
            onChangeText={(word) => {
              this.setState({
                author: word
              });
            }}
            placeholder='WRITE THE AUTHOR OF THE STORY'
            value={this.state.author}
            style={styles.inputbox}>
          </TextInput>
          <TextInput
            onChangeText={(word) => {
              this.setState({
                story: word
              });
            }}
            placeholder='WRITE THE STORY'
            value={this.state.story}
            style={styles.inputbox}
            multiline={true}>
          </TextInput>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={this.updateDB}>
            <Text style={styles.displayText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}


const styles = StyleSheet.create({
  inputbox: {
    marginTop: 90,
    width: 350,
    height: 80,
    borderWidth: 1.0,
    margin: 10,
    padding: 5,
    fontSize: 18,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  submitButton: {
    marginTop: 40,
    backgroundColor: 'red',
    width: '95%',
    height: 70,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'purple',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',

  },
  displayText: {
    textAlign: 'center',
    color: 'blue',
    fontSize: 25,
    fontWeight: 'bold',
  },
})