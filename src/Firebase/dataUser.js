import firebase from "./FirebaseConfig";

export const DataUser = (name, email, password) => {
  firebase
    .firestore()
    .collection("dataUser")
    .add({
      name,
      email,
      password
    });
};
