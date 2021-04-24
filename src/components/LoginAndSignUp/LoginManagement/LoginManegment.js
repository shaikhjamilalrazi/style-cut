import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebase.config";

export const initializeFramework = () => {
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}
};

export const GoogleSignInMethod = () => {
	var provider = new firebase.auth.GoogleAuthProvider();
	return firebase
		.auth()
		.signInWithPopup(provider)
		.then((result) => {
			let user = result.user;
			return user;
		})
		.catch((error) => {
			// Handle Errors here.
			var errorMessage = error.message;
			// The email of the user's account used.
			var email = error.email;

			console.log(errorMessage, email);

			// ...
		});
};

export const CustomLoginMethod = (email, password, name) => {
	return firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((userCredential) => {
			// Signed in

			var user = userCredential.user;

			UpdateName(name);
			return user;
			// ...
		})
		.catch((error) => {
			var errorCode = error.code;
			var errorMessage = error.message;
			let newInfo = {};
			newInfo.error = errorMessage;
			newInfo.errorCode = errorCode;
			// ..
			return newInfo;
		});
};

export const oldUserLoginMethod = (email, password) => {
	return firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((userCredential) => {
			// Signed in
			var user = userCredential.user;
			return user;

			// ...
		})
		.catch((error) => {
			var errorCode = error.code;
			var errorMessage = error.message;
			let newInfo = {};
			newInfo.error = errorMessage;
			newInfo.errorCode = errorCode;

			return newInfo;
		});
};

export const logOutMethod = () => {
	return firebase
		.auth()
		.signOut()
		.then(() => {
			// Sign-out successful.
		})
		.catch((error) => {
			// An error happened.
		});
};

const UpdateName = (name) => {
	var user = firebase.auth().currentUser;

	user.updateProfile({
		displayName: name,
	})
		.then(function () {
			// Update successful.
		})
		.catch(function (error) {
			// An error happened.
		});
};
