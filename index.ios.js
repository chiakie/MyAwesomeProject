/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Motorcycle = require('./Motorcycle');
var WaterBill = require('./WaterBill');

var {
  AppRegistry,
  StyleSheet,
  TabBarIOS
} = React;

var AwesomeProject = React.createClass({
  getInitialState: function() {
    return {
      selectedTab:'motocycle'
    };
  },
  render: function() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          title={'小狼維修紀錄'}
          selected={this.state.selectedTab === 'motocycle'}
          onPress={()=> {
            this.setState({selectedTab:'motocycle'});
          }}>
          <Motorcycle />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title={'水費紀錄'}
          selected={this.state.selectedTab === 'waterbill'}
          onPress={()=> {
            this.setState({selectedTab:'waterbill'});
          }}>
          <WaterBill />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

var styles = StyleSheet.create({
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  thumbnail: {
  width: 53,
  height: 81,
},
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
