/*
------------------
AUTH SETUP STEPS
------------------
1. create firebase project
2. enable web
3. enable sign in method
4. install firebase
5. get firebase config in firebase.config.js file
6. export app from firebase.config.js
*/

/*
1. create userContext (Auth Context) : UserContext ---> component name, userContext      provide AuthContext
2. Create AuthContext
3. set AuthContext.Provider 
4.Make sure to set the children
5. export auth context
6. get form data
7. getAuth in the userContext
*/

/*
-----------------
FIREBASE HOSTING
-----------------
// one time at each computer :
1. npm install -g firebase-tools
2. firebase login

// for each project one time
1. firebase init
Make sure : for public directory : you select: build
single page application : y


//for every deploy
1. npm run build
2. firebase deploy
*/