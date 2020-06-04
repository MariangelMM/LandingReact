import firebase from "./FirebaseConfig";

export const DataUser = (name, email, password, uid) => {
  firebase
    .firestore()
    .collection("dataUser")
    .add({
      name,
      email,
      password,
      uid
    });
};
