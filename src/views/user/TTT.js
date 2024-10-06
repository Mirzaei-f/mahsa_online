import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Metrix } from "@metrixorg/react-native-plugin";


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      attribution: "",
      sessionNumber: "",
      userId: "",
      sessionId: ""
    };


    var userAttributes = {};
    userAttributes["manufacturer"] = "Nike";
    Metrix.setUserAttributes(userAttributes);

    Metrix.setUserCustomId("userId"); // call when user tries to login in your system and set userId value that user already knows in your system
    Metrix.deleteUserCustomId(); // call when your user goes to logout in your system
   

    Metrix.setUserFcmToken("fcmToken");
    Metrix.userChannelEnabled("SMS"); // channel value could be "SMS", "PUSH" or "EMAIL"
    Metrix.userChannelDisabled("PUSH"); // channel value could be "SMS", "PUSH" or "EMAIL"

    Metrix.newRevenue("eovld", 12000, 0);

    
  }

  sendEvent = () => {
    Metrix.newEvent('lbuoa', {
      "name": "hisName"
    });
  };

  sendRevenue = () => {
    Metrix.newRevenue('ykwyp', 2500.5, 1);
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.sendEvent}
          title="sendEvent"
          color="red"
        />
        <Text />
        <Button
          onPress={this.sendRevenue}
          title="revenue"
          color="red"
        />
        <Text />
        <Text>sessionNumber: {this.state.sessionNumber}</Text>
        <Text />
        <Text>sessionId: {this.state.sessionId}</Text>
        <Text />
        <Text>userId: {this.state.userId}</Text>
        <Text />
        <Text>userAttributesData: {this.state.attribution}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App