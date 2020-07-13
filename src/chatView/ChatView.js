import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

class ChatView extends Component {
  componentDidUpdate = () => {
    const container = document.getElementById("chatview-container");
    if (container) container.scrollTo(0, container.scrollHeight);
  };

  render() {
    const { classes, chat, user } = this.props;

    if (chat === undefined) {
      return <main id="chatview-container" className={classes.content}></main>;
    } else {
      return (
        <div>
          <div className={classes.chatHeader}>
            {chat.users.filter((usr) => usr !== user)[0]}
          </div>
          <main id="chatview-container" className={classes.content}>
            {this.props.chat.messages.map((msg, index) => {
              return (
                <div
                  key={index}
                  className={
                    msg.sender === this.props.user
                      ? classes.userSent
                      : classes.friendSent
                  }
                >
                  {msg.message}
                </div>
              );
            })}
          </main>
        </div>
      );
    }
  }
}

export default withStyles(styles)(ChatView);