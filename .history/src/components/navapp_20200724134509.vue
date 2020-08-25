<template>
    <div class="columns is-mobile container">
        <div id="navMenuColordark-example" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item" href="#">{{home}}</a>
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link" href="#">{{formations}}</a>
                    <a class="navbar-link" href="#">{{compétences}}</a>
                    <a class="navbar-link" href="#">{{expériences}}</a>
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