const config = require("../config");
const admin = require("firebase-admin");
const serviceAccount = config.firebase;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "http://backend-segunda-entrega-final.firebaseio.com",
});

const db = admin.firestore();

module.exports = db;