'use strict';

var React = require('react-native');
var MotorcycleList = require('./MotorcycleList');

var {
    StyleSheet,
    NavigatorIOS
   } = React;

var styles = StyleSheet.create({
    description: {
        fontSize: 20,
        backgroundColor: 'white'
    },
    container: {
        flex: 1
    }
});

var Motorcycle = React.createClass ({
    getInitialState: function() {
      return {totalTrip:10};
    },
    render() {
        return (
  	       <NavigatorIOS
            style={styles.container}
            initialRoute={{
              title: '小狼狗已經跑了' + this.state.totalTrip + '公里',
              component: MotorcycleList
            }}/>
        );
    }
});

module.exports = Motorcycle;
