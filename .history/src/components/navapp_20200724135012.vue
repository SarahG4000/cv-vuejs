<template>
    <div class="columns is-mobile container">
        <div class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item" href="#">{{home}}</a>
                <a class="navbar-link" href="#">{{formation}}</a>
                <a class="navbar-link" href="#">{{competence}}</a>
                <a class="navbar-link" href="#">{{experience}}</a>
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
    </div>
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