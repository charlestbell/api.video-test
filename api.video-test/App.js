import { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ApiVideoPlayer from "@api.video/react-native-player";
// import MuxVideo from './components/MuxVideo'

import { Video, ResizeMode } from "expo-av";
// let jwt = require("./jwt.json");
const uri = `https://stream.mux.com/Tkgk5LC6an93zK1sDdaPkebJAdx0001E2A00kY1hXzDQ4g.m3u8?token=${jwt}`;

// console.log("JWT", jwt);

const apiKey = {
  apiKey: "hiz5i9chw31QJRWOkm1H8xd2xAz5eUR0rohX5yQwZO5",
};

export default function App() {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  // useEffect(() => {
  //   (async () => {
  //     console.log("API KEY", apiKey);
  //     const response = await fetch("https://sandbox.api.video/auth/api-key", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(apiKey),
  //     });
  //     // console.log("RESPONSE", JSON.stringify(await response.json(), null, 3));
  //     if (response.ok) {
  //       const parsedResponse = await response.json();
  //       console.log("PARSED RESPONSE", parsedResponse);
  //     } else {
  //       throw new Error();
  //     }
  //   })();
  //   return;
  // }, []);

  // console.log('JWT', jwt)
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "yellow", width: 300, height: 300 }}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri,
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </View>
      {/* <View style={{ backgroundColor: "yellow", width: 300, height: 300 }}>
        <ApiVideoPlayer
          // videoId="vi4ZfI0bZ9C6ymCGb4uxTOd6"
          videoId={{
            id: "vi4ZfI0bZ9C6ymCGb4uxTOd6",
            token: "a6702bf9-2f61-4fd8-a15a-0ad4c6efe3b2",
          }}
        />
      </View> */}
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
