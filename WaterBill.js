'use strict';

var React = require('react-native');
var WaterBillList = require('./WaterBillList');
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

var WaterBill = React.createClass ({
  render() {
      return (
         <NavigatorIOS
          style={styles.container}
          initialRoute={{
            title: '水費紀錄',
            component: WaterBillList
          }}/>
      );
  }
});

module.exports = WaterBill;
