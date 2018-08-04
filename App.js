import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

// ① FormInput component
class FormInput extends Component {
  state = {
    text: ''
  };

  showText = () => {
    this.props.sendText(this.state.text);
  };

  render() {
    return (
      <View>
        <Text style={{textAlign: 'center'}}>TextPage</Text>
        <TextInput
          style={{width: 200, height: 50, borderColor: 'pink', borderWidth: 3}}
          onChangeText={input => this.setState({text: input})}
        />
        <Button onPress={() => this.showText()} title="SHOW" color="#841584" />
        {/* <Text>{this.state.text}</Text> */}
      </View>
    );
  }
}

// ② ShowText component
const ShowText = props => {
  return (
    <View>
      <Text>{props.recieveText}</Text>
    </View>
  );
};

// App component
type Props = {};
export default class App extends Component<Props> {
  state = {
    text: ''
  };

  render() {
    return (
      <View style={styles.container}>
        <FormInput sendText={input => this.setState({text: input})} />
        <ShowText recieveText={this.state.text} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
