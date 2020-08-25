<template>
    <!-- <nav role="navigation" aria-label="dropdown navigation" class="navbar is-dark">
        <div class="navbar-brand">
            <p class="navbar-item">
                <span>
                    <i class="far fa-address-card"></i>
                </span>
            </p>
        <div class="navbar-menu">
            <div class="navbar-start">
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-item is-hoverable" href="../index.html">{{home}}</a>
                    <a class="navbar-item is-hoverable" href="../index.html">{{formation}}</a>
                    <a class="navbar-item is-hoverable" href="../index.html">{{competence}}</a>
                    <a class="navbar-item is-hoverable" href="../index.html">{{experience}}</a>
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
        </div>
    </nav>-->
    <nav role="navigation" aria-label="dropdown navigation" class="navbar">
        <div class="navbar-brand">
            <a class="navbar-item">
                <h1 class="title has-text-white-ter">
                    <span class="logo-sg">o</span>
                    hun
                </h1>
            </a>
        </div>
        <div class="navbar-menu">
            <div class="navbar-end">
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        <span class="icon s-size-5">
                            <i class="fas fa-users has-text-white-ter sg-profilicon" />
                        </span>
                    </a>
                    <div class="navbar-dropdown is-boxed">
                        <a class="navbar-item">{"Profil"}</a>
                        <a class="navbar-item">{"Favorite"}</a>
                        <a class="navbar-item">{"Deconnection"}</a>
                    </div>
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