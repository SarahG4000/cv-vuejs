<template>
    <nav class="navbar is-dark">
        <div class="navbar-brand">
            <p class="navbar-item">
                <span>
                    <i class="far fa-address-card"></i>
                </span>
            </p>
            <div class="navbar-burger burger" data-target="navMenuColordark-example">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div id="navMenuColordark-example" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item" href="https://bulma.io/">Home</a>
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-item is-hoverable" href="../index.html">{{home}}</a>
                    <a class="navbar-item is-hoverable" href="../index.html">{{formation}}</a>
                    <a class="navbar-item is-hoverable" href="../index.html">{{competence}}</a>
                    <a class="navbar-item is-hoverable" href="../index.html">{{experience}}</a>
                </div>
            </div>
        </div>

        <div class="navbar-end">
            <div class="navbar-item">
                <div class="field is-grouped">
                    <p class="control"></p>
                    <p class="control"></p>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    data() {
        return {
            home: "Contact me",
            competence: "Compétences",
            experience: "Expériences",
            formation: "Formations",
        };
    },
});
</script>

<style>
nav {
    position: relative;
    z-index: 10;
}
</style>