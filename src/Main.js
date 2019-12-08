import React from "react";
import { Text, View, FlatList, TextInput } from "react-native";
import * as queries from "./graphql/queries.js";
import { API, graphqlOperation } from "aws-amplify";

class Main extends React.Component {
  state = { events: [], runners: [] };

  async componentDidMount() {
    await this.loadNearByEvents();
  }

  async loadNearByEvents() {
    const input = {
      type: "point",
      coordinates: [52.355986, 4.892747] // normally you set these coordinates dynamically from a profile page or active GPS location.
    };

    const result = await API.graphql(
      graphqlOperation(queries.nearbyEvent, { location: input })
    )
      .then(result => {
        return result.data.nearbyEvent.items;
      })
      .catch(err => console.log(err));

    this.setState({
      events: result
    });
  }

  async loadRunnersByDistance(kmInput) {
    // normally you set these coordinates dynamically from a profile page or active GPS location.
    const input = {
      lat: 52.355986,
      lon: 4.892747
    };

    const result = await API.graphql(
      graphqlOperation(queries.searchByDistance, {
        location: input,
        km: kmInput
      })
    )
      .then(result => {
        return result.data.searchByDistance.items;
      })
      .catch(err => console.log(err));

    this.setState({
      runners: result
    });
  }

  render() {
    return (
      <View style={{ marginTop: 80, marginLeft: 10, marginRight: 10 }}>
        <Text style={{ fontSize: 20, marginBottom: 5 }}>Events</Text>
        <FlatList
          data={this.state.events}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 20 }}>
              <Text>Date: {item.date}</Text>
              <Text>Description: {item.description}</Text>
              <Text>Max Participants: {item.maxParticipants}</Text>
            </View>
          )}
        />
        <Text style={{ fontSize: 20, marginBottom: 5 }}>
          Runners in the area
        </Text>
        <Text>Distance (KM)</Text>
        <TextInput
          style={{
            borderRadius: 4,
            borderWidth: 0.5,
            borderColor: "#d6d7da",
            width: 200,
            padding: 10
          }}
          onChangeText={text => this.loadRunnersByDistance(text)}
        />
        <FlatList
          data={this.state.runners}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 20 }}>
              <Text>Name: {item.name}</Text>
              <Text>Age: {item.age}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

export default Main;
