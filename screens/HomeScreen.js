import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
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
      name: "Mark"
    };
  }

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.colorBG}>
            <Image source={Graphic} style={styles.graphic}/>
          </View>
          <ScrollView
              style={styles.container}
              contentContainerStyle={styles.contentContainer}>
            <Titles title={`Good Morning ${this.state.name}`}>
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

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
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
