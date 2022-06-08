import React, { useState, useEffect } from "react";
import { ListItem } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import firebase from "../database/firebase";

const UserScreen = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.db.collection("users").onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.docs.forEach((doc) => {
        const { name, cost } = doc.data();
        users.push({
          id: doc.id,
          name,
          cost,
        });
      });
      setUsers(users);
    });
  }, []);

  return (
    <ScrollView>
      {users.map((user) => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("UserDetailScreen", {
                userId: user.id,
              });
            }}
          >
            <ListItem.Chevron />

            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.cost}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default UserScreen;
