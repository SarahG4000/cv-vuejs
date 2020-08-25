/*
 * creation of the file contenaier
 * src/index.js - container for app
 * start created 14/07/2020
 */

// import Vue from "vue";
import App from "./components/app.vue";

const app = new Vue({
    el: "#app",
    data: {
        message: "Hello world!!",
    },
});

new Vue({render: createElement => createElement(App)}).$mount("#appli");

console.log("hello word:!!");
