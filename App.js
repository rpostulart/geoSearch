import React from "react";
import { withAuthenticator } from "aws-amplify-react-native";
import Amplify from "aws-amplify";

// Get the aws resources configuration parameters
import awsconfig from "./aws-exports"; // if you are using Amplify CLI
import Main from "./src/Main";

Amplify.configure(awsconfig);

class App extends React.Component {
  render() {
    return <Main />;
  }
}

export default withAuthenticator(App);
