var React = require('react-native');
var RouteConstants = require('../constants/RouteConstants');
var AppStore = require('../stores/AppStore');
var NavigationActions = require('../actions/NavigationActions');

var Button = require('react-native-button');

window.navigator.userAgent = "react-native";
var io = require("../../node_modules/socket.io/node_modules/socket.io-client/socket.io");

var {
  Alert,
  Text,
  View,
  StyleSheet,
  TouchableOpacity
  } = React;

var _socket;

var BuyConfirm = React.createClass({
getInitialState: function(){
  return {name: "", price:""};
},
_onPressButton: function(){
  _socket = io('http://172.17.69.83:3000',{jsonp: false, transports: ['websocket']});
  _socket.emit('confirm', { confirm: true });
  Alert.alert(
  'Felicitaciones',
  'Tu pago fue correcto',
  [
    {text: 'OK', onPress: () => console.log('OK Pressed')}
  ]
);
},
componentDidMount: function(){
  var splitted = this.props.result.split('|');
  this.state.name = splitted[0];
  this.state.price = splitted[1];
},
render: function() {
    return (
      <View style={styles.layout}>
        <Text>Confirmas la compra de: {this.state.name} por {this.state.price}</Text>
        <Button
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={this._onPressButton}>
            Confirmar Pago!
        </Button>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  layout:{
    backgroundColor: '#ff0000',
    flex: 1,
  },
});

module.exports = BuyConfirm;
