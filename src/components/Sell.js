var React = require('react-native');
var RouteConstants = require('../constants/RouteConstants');
var AppStore = require('../stores/AppStore');
var NavigationActions = require('../actions/NavigationActions');
var Button = require('react-native-button');

var {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
  } = React;

var Sell = React.createClass({

componentDidMount:function(){

},
_onPressButton: function(){
  NavigationActions.navigate({route: RouteConstants.SELL_GENERATE});
},
render: function() {
    return (
      <View style={styles.layout}>
        <Text>Pay</Text>
        <Button
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={this._onPressButton}>
            Generate!
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

module.exports = Sell;
