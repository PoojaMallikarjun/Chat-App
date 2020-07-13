import React, { Component } from "react";
import ChatList from "../chatList/ChatList";
import ChatView from "../chatView/ChatView";
import styles from "./styles";
import { Button, withStyles } from "@material-ui/core";
const firebase = require("firebase");

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      selectedChat: null, //index of the chat that we are currently on
      newChatFormVisible: false, //form whenever we want to create a chat with a friend with whom we already don't have a chat with
      email: null,
      chats: [],
    };
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) this.props.history.push("/login");
      else {
        await firebase
          .firestore()
          .collection("chats")
          .where("users", "array-contains", user.email)
          .onSnapshot(async (res) => {
            const chats = res.docs.map((doc) => doc.data());
            await this.setState({
              email: user.email,
              chats: chats,
            });
            console.log(this.state);
          });
      }
    });
  };

  signOut = () => {
    firebase.auth().signOut();
  };

  selectChat = (chatIndex) => {
    //console.log("index:", chatIndex);
    this.setState({ selectedChat: chatIndex });
  };

  newChatBtnClicked = () => {
    this.setState({ newChatFormVisible: true, selectChat: null });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <ChatList
          history={this.props.history}
          newChatBtnFn={this.newChatBtnClicked}
          selectChatFn={this.selectChat}
          chats={this.state.chats}
          userEmail={this.state.email}
          selectedChatIndex={this.state.selectedChat}
        ></ChatList>
        {this.state.newChatFormVisible ? null : (
          <ChatView
            user={this.state.email}
            chat={this.state.chats[this.state.selectedChat]}
          ></ChatView>
        )}
        <Button className={classes.signOutBtn} onClick={this.signOut}>
          Sign Out!
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
