import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  TwitterAuthProvider,
  type UserCredential,
} from "firebase/auth";
import { useDispatch } from "react-redux";

import type { AppDispatch } from "../../app/store";
import { fetchUser } from "../../features/auth/model/slice";
import { useModal } from "../../widgets/Modal/context/modalContext";
import { auth, database, FirebaseError, get, ref, set } from "../config/firebase";
import { getFirebaseErrorMessage } from "../utils/map-error-code-to-error-message";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const { closeModal } = useModal();

  const afterLogin = async (userCred: UserCredential, name?: string, lastName?: string, loginName?: string) => {
    const uid = userCred.user.uid;
    localStorage.setItem("userId", uid);

    const userRef = ref(database, `users/${uid}`);
    const snapshot = await get(userRef);

    if (!snapshot.exists()) {
      await set(userRef, {
        uid,
        email: userCred.user.email,
        userName: name || userCred.user.displayName,
        lastName: lastName || "Аноннім",
        loginName: loginName || "Аноннім",
        avatar: userCred.user.photoURL,
      });
    }

    dispatch(fetchUser(uid));
  };

  const signInWithEmail = async (email: string, password: string) => {
    try {
      setLoading(true);
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      await afterLogin(userCred);
      closeModal();
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        const message = getFirebaseErrorMessage(error.code);
        setError(message);
      }
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string, name: string, lastName: string, loginName: string) => {
    try {
      setLoading(true);
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await afterLogin(userCred, name, lastName, loginName);
      closeModal();
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        const message = getFirebaseErrorMessage(error.code);
        setError(message);
      }
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      const userCred = await signInWithPopup(auth, provider);
      await afterLogin(userCred);
      closeModal();
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        const message = getFirebaseErrorMessage(error.code);
        setError(message);
      }
    } finally {
      setLoading(false);
    }
  };

  const signInWithFacebook = async () => {
    try {
      setLoading(true);
      const provider = new FacebookAuthProvider();
      const userCred = await signInWithPopup(auth, provider);
      await afterLogin(userCred);
      closeModal();
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        const message = getFirebaseErrorMessage(error.code);
        setError(message);
      }
    } finally {
      setLoading(false);
    }
  };

  const signInWithTwitter = async () => {
    try {
      setLoading(true);
      const provider = new TwitterAuthProvider();
      const userCred = await signInWithPopup(auth, provider);
      await afterLogin(userCred);
      closeModal();
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        const message = getFirebaseErrorMessage(error.code);
        setError(message);
      }
    } finally {
      setLoading(false);
    }
  };

  const signInWithGitHub = async () => {
    try {
      setLoading(true);
      const provider = new GithubAuthProvider();
      const userCred = await signInWithPopup(auth, provider);
      await afterLogin(userCred);
      closeModal();
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        const message = getFirebaseErrorMessage(error.code);
        setError(message);
      }
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email: string) => {
    try {
      setLoading(true);
      await sendPasswordResetEmail(auth, email);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        const message = getFirebaseErrorMessage(error.code);
        setError(message);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    signInWithEmail,
    signInWithGoogle,
    signInWithFacebook,
    signInWithTwitter,
    signUp,
    resetPassword,
    signInWithGitHub,
    loading,
    error,
  };
};
