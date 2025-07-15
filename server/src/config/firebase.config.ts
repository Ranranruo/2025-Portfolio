import admin from "firebase-admin";
import path from "path";

const serviceAccount = require(path.resolve("portfolio-1366e-firebase-adminsdk-fbsvc-23a44810f6.json"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "portfolio-1366e.appspot.com"
});

const bucket = admin.storage().bucket();

export { bucket }