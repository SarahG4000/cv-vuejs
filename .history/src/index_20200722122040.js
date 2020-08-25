/*
 * creation of the file contenaier
 * src/index.js - container for app
 * start created 14/07/2020
 */

// import Vue from "vue";
import App from "./components/app.vue";

new Vue({render: createElement => createElement(App)}).$mount("#appli");

// console.log("hello word:!!");
