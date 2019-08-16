import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  View,
    Dimensions
} from 'react-native';

import { MonoText } from '../components/StyledText';
import SearchBar from "../components/SearchBar";
import Titles from "../components/Titles";
import MyCard from "../components/MyCard";
import Graphic from "../assets/images/undraw_pilates_gpdb.png";

import Hamburger from '../assets/images/hamburger.png';
import Stretching from '../assets/images/stretching.png';
import Meditation from '../assets/images/meditation.png';
import Yoga from '../assets/images/yoga.png';


const width = Dimensions.get('window').width;
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mark",
      time: new Date().getHours()
    };
  }

  getGreeting(){
    const time = this.state.time;
    if (time < 12){
      return `Good Morning ${this.state.name}`;
    }
    else if (time > 12 && time < 18){
      return `Good Afternoon ${this.state.name}`;
    }
    else{
      return `How was your day, ${this.state.name}?`;
    }
  }


  render() {
    return (
        <View style={styles.container}>
          <View style={styles.colorBG}>
            <Image source={Graphic} style={styles.graphic}/>
          </View>
          <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.contentContainer}>
            <Titles title={this.getGreeting()}>
              <SearchBar/>
            </Titles>
            <View style={styles.grid}>
              <MyCard title="Diet Recommendation" image={Hamburger}/>
              <MyCard title="Stretching" image={Stretching}/>
              <MyCard title="Meditation" image={Meditation}/>
              <MyCard title="Yoga" image={Yoga}/>
            </View>
          </ScrollView>
        </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  scrollView: {
    flex: 1
  },
  colorBG: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 350,
    backgroundColor: "#f5ceb8",
  },
  graphic: {
    position: "absolute",
    left: -60,
    top: 50
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 15,
  },
  contentContainer: {
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  }
});
