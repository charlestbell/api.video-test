import { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//  import ApiVideoPlayer from '@api.video/react-native-player';
// import MuxVideo from './components/MuxVideo'

import { Video, ResizeMode } from "expo-av";


export default function App() {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'yellow', width: 300, height: 300 }}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "https://stream.mux.com/qQbUGTe02G6nP2TkZ1mdZ01oLMJeYHOAZoUxvXu2NtwLc.m3u8.m3u8",
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />

      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    width: 300,
    height: 300,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
