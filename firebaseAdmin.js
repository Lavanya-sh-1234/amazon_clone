import admin from "firebase-admin";

const serviceAccount = require("../Amazon-starter-template-nextjs/permissions.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

export { admin, db };
