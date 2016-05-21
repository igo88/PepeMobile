var React = require('react-native');
var RouteConstants = require('../constants/RouteConstants');
var AppStore = require('../stores/AppStore');
var NavigationActions = require('../actions/NavigationActions');

var {
  Alert,
  Text,
  View,
  StyleSheet,
  TouchableOpacity
  } = React;

var Buy = React.createClass({
componentDidMount:function(){

},
_onPressButtonRead:function()
{
    NavigationActions.navigate({route: RouteConstants.READ_QR});
},



render: function() {
    return (
      <View style={styles.layout}>
        <Text>Buy</Text>
        <TouchableOpacity onPress={this._onPressButtonRead}>
          <Text>Leer</Text>
        </TouchableOpacity>
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

module.exports = Buy;