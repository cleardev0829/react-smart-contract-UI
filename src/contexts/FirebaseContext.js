import PropTypes from "prop-types";
import { createContext, useEffect, useReducer, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { firebaseConfig } from "../config";
import _ from "lodash";

// ----------------------------------------------------------------------

const ADMIN_EMAILS = ["demo@minimals.cc"];

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  firebase.storage();
}

const initialState = {
  isSubscription: false,
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const reducer = (state, action) => {
  if (action.type === "INITIALISE") {
    const { isSubscription, isAuthenticated, user } = action.payload;
    return {
      ...state,
      isSubscription,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  }

  return state;
};

const AuthContext = createContext({
  ...initialState,
  method: "firebase",
  login: () => Promise.resolve(),
  register: () => Promise.resolve(),
  loginWithGoogle: () => Promise.resolve(),
  loginWithFaceBook: () => Promise.resolve(),
  loginWithTwitter: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  updateProfile: () => Promise.resolve(),
  createUserOnRealTimeDB: () => Promise.resolve(),
  updateSubscriptionKey: () => Promise.resolve(),
});

AuthProvider.propTypes = {
  children: PropTypes.node,
};

function AuthProvider({ children }) {
  const [profile, setProfile] = useState({});
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(
    () =>
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const docRef = firebase.firestore().collection("users").doc(user.uid);
          const subscriptionRef = firebase
            .firestore()
            .collection("subscriptions")
            .doc(user.uid);
          docRef
            .get()
            .then((doc) => {
              if (doc.exists) {
                setProfile(doc.data());
              }
            })
            .catch((error) => {
              console.error(error);
            });
          subscriptionRef.get().then((subscriptionDoc) => {
            if (!_.isEmpty(subscriptionDoc.data())) {
              dispatch({
                type: "INITIALISE",
                payload: { isAuthenticated: true, isSubscription: true, user },
              });
            } else {
              dispatch({
                type: "INITIALISE",
                payload: { isAuthenticated: true, isSubscription: false, user },
              });
            }
          });
        } else {
          dispatch({
            type: "INITIALISE",
            payload: {
              isAuthenticated: false,
              isSubscription: false,
              user: null,
            },
          });
        }
      }),
    [dispatch]
  );

  const login = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  };

  const loginWithFaceBook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  };

  const loginWithTwitter = () => {
    const provider = new firebase.auth.TwitterAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  };

  const register = (email, password, orgName, contactName) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        firebase
          .firestore()
          .collection("users")
          .doc(res.user.uid)
          .set({
            uid: res.user.uid,
            email,
            orgName,
            contactName,
            displayName: `${orgName} ${contactName}`,
          });
      });
  };

  const logout = async () => {
    document.location.href = "/";
    await firebase.auth().signOut();
  };

  const resetPassword = async (email) => {
    await firebase.auth().sendPasswordResetEmail(email);
  };

  const auth = { ...state.user };

  const updateSubscriptionKey = (flag) => {
    const { user } = state;
    dispatch({
      type: "INITIALISE",
      payload: { isAuthenticated: true, isSubscription: flag, user },
    });
  };

  const createUserOnRealTimeDB = async (user) => {
    const docRef = firebase.firestore().collection("users").doc(user.uid);
    if (!(await docRef.get()).data()) {
      return docRef.set({
        email: user.email,
        uid: user.uid,
      });
    }
    return;
  };

  const updateProfile = async (data) => {
    const docRef = firebase.firestore().collection("users").doc(auth.uid);
    if (!(await docRef.get()).data()) {
      await docRef.set({
        email: data.email,
        uid: auth.uid,
      });
    }
    await docRef.update({
      displayName: data.displayName,
      phoneNumber: data.phoneNumber,
      country: data.country,
      address: data.address,
      state: data.state,
      city: data.city,
      zipCode: data.zipCode,
      about: data.about,
      isPublic: data?.isPublic || false,
    });
    if (data.photoURL && data.photoURL.preview) {
      getFileBlob(data.photoURL.preview, (blob) => {
        firebase
          .storage()
          .ref(`/photo/${auth.uid}/${data.photoURL.path}`)
          .put(blob)
          .then((snapshot) => {
            snapshot.ref.getDownloadURL().then((url) => {
              setProfile({
                ...profile,
                displayName: data.displayName,
                phoneNumber: data.phoneNumber,
                country: data.country,
                address: data.address,
                state: data.state,
                city: data.city,
                zipCode: data.zipCode,
                about: data.about,
                isPublic: data?.isPublic || false,
                photoURL: url,
              });
              docRef.update({
                photoURL: url,
              });
            });
          });
      });
    } else {
      setProfile({
        ...profile,
        displayName: data.displayName,
        phoneNumber: data.phoneNumber,
        country: data.country,
        address: data.address,
        state: data.state,
        city: data.city,
        zipCode: data.zipCode,
        about: data.about,
        isPublic: data?.isPublic || false,
      });
    }
    return;
  };
  const getFileBlob = (url, cb) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.addEventListener("load", function () {
      cb(xhr.response);
    });
    xhr.send();
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "firebase",
        user: {
          id: auth.uid,
          email: auth.email,
          photoURL: profile?.photoURL || auth.photoURL,
          displayName: auth.displayName || profile?.displayName,
          role: ADMIN_EMAILS.includes(auth.email) ? "admin" : "user",
          phoneNumber: auth.phoneNumber || profile?.phoneNumber || "",
          country: profile?.country || "",
          address: profile?.address || "",
          state: profile?.state || "",
          city: profile?.city || "",
          zipCode: profile?.zipCode || "",
          about: profile?.about || "",
          isPublic: profile?.isPublic || false,
        },
        login,
        register,
        loginWithGoogle,
        loginWithFaceBook,
        loginWithTwitter,
        logout,
        resetPassword,
        updateProfile,
        createUserOnRealTimeDB,
        updateSubscriptionKey,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
