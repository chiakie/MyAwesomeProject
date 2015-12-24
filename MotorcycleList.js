'use strict';

var React = require('react-native');
var DogDetail = require('./DogDetail');

var REQUEST_URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:fiction';

var {
  Image,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  ActivityIndicatorIOS,
  AlertIOS
} = React;

var MotorcycleList = React.createClass({
  getInitialState: function() {
    return {
      dataSource:new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      isLoading:true
    };
  },
  componentDidMount: function() {
    this.fetchData();
  },
  fetchData: function() {
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData.items),
        isLoading: false
      });
    })
    .catch((error) => console.log(error))
    .done();
  },
  render: function() {
    if (this.state.isLoading) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderBook}
        style={styles.listView}
      />
    );
  },
  renderLoadingView() {
    return (
      <View style={styles.loading}>
        <ActivityIndicatorIOS size='small'/>
        <Text>載入中...</Text>
      </View>
    );
  },
  showBookDetail: function(book) {
    this.props.navigator.push({
      title: book.volumeInfo.title,
      component: DogDetail,
      passProps: {book}
    });
  },
  showAlert() {
    AlertIOS.alert('This is title', 'This is message', [
      {text:"ok", onPress:(text)=>console.log(text+ ' is pressed')},
    ], 'plain-text');
  },
  renderBook: function(book) {
    return (
      <TouchableHighlight onPress={this.showAlert} underlayColor='#dddddd'>
                <View>
                    <View style={styles.container}>
                        <Image
                            source={{uri: book.volumeInfo.imageLinks.thumbnail}}
                            style={styles.thumbnail} />
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{book.volumeInfo.title}</Text>
                            <Text style={styles.author}>{book.volumeInfo.authors}</Text>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  thumbnail: {
    width: 53,
    height: 81,
    marginRight: 10
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8
  },
  author: {
    color: '#656565'
  },
  listView: {
    backgroundColor: '#F5FCFF'
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  }
});

module.exports = MotorcycleList;
