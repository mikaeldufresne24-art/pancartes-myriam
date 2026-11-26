// Configuration publique de l'application Pancartes — Myriam.
// Ces valeurs sont normales à exposer côté client pour Firebase et Cloudinary
// (upload non signé): elles ne donnent pas accès à un compte, seulement à ce
// projet précis, protégé par ses propres règles de sécurité Firestore.
window.PANCARTES_CONFIG = {
  firebase: {
    apiKey: "AIzaSyBdiwNX0GxhFBLKX_1_1ABxiTQVJwHILi4",
    authDomain: "pancartes-myriam.firebaseapp.com",
    projectId: "pancartes-myriam",
    storageBucket: "pancartes-myriam.firebasestorage.app",
    messagingSenderId: "608635388838",
    appId: "1:608635388838:web:e6c15b11334d08ea120567"
  },
  cloudinaryCloudName: "zvwb1cty",
  cloudinaryUploadPreset: "pancartes_myriam_unsigned"
};
