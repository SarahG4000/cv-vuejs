/*
 * creation of the file contenaier
 * src/index.js - container for app
 * start created 14/07/2020
 */

// import Vue from "vue";
import App from "./components/app.vue";
import Navapp from "./components/navapp.vue ";
import "bulma";

new Vue({render: createElement => createElement(App)}).$mount("#app");
new Vue({render: createElement => createElement(Navapp)}).$mount("#navapp");

// console.log("hello word:!!");
