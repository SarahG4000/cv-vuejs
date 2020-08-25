<template>
    <nav class="navbar navbar-menu is-active is-dark" role="navigation">
        <div class="navbar-start">
            <a class="navbar-item" href="../index.html">{{home}}</a>
            <a class="navbar-item" href="../index.html">{{formation}}</a>
            <a class="navbar-item" href="../index.html">{{competence}}</a>
            <a class="navbar-item" href="../index.html">{{experience}}</a>
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