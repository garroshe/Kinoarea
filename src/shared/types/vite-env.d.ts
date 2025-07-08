/// <reference types="vite/client" />

declare namespace NodeJS {
  interface ProcessEnv {
    VITE_FIREBASE_API_KEY: string;
    VITE_FIREBASE_AUTH_DOMAIN: string;
    VITE_FIREBASE_PROJECT_ID: string;
    VITE_STORAGE_FIREBASE_BUCKET: string;
    VITE_MESSAGING_FIREBASE_SENDER_ID: string;
    VITE_APP_FIREBASE_ID: string;
    VITE_FIREBASE_DATABASE_URL: string;
    VITE_API_URL: string;
    VITE_BEARER_TOKEN: string;
    VITE_API_KEY: string;
  }
}
