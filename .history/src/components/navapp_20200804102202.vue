<template>
    <nav role="navigation" aria-label="dropdown navigation" class="navbar is-dark">
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
    </nav>
     <nav
            role={"navigation"}
            aria-label={"dropdown navigation"}
            className={["navbar", "color-sg", "px-2", "py-2", "sg-full"].join(
                " ",
            )}>
            <div className={"navbar-brand"}>
                <a className={"navbar-item"}>
                    <h1
                        className={[
                            "title",
                            "has-text-white-ter",
                            "font-sg",
                            "is-1",
                        ].join(" ")}>
                        <span className={"logo-sg"}>{"o"}</span>
                        {"hun"}
                    </h1>
                    {/* <img
                        className={"image is-128x128"}
                        height={"128px"}
                        width={"128px"}
                        src={logo}
                    /> */}
                </a>
            </div>
            <div className={["navbar-menu"].join(" ")}>
                <div className={["navbar-end", "sg-end"].join(" ")}>
                    <div
                        className={[
                            "navbar-item",
                            "has-dropdown",
                            "is-hoverable",
                        ].join(" ")}>
                        <a className={"navbar-link"}>
                            <span className={["icon", "s-size-5"].join(" ")}>
                                <i
                                    className={[
                                        "fas fa-users",
                                        "has-text-white-ter",
                                        "sg-profilicon",
                                    ].join(" ")}
                                />
                            </span>
                        </a>
                        <div className={"navbar-dropdown is-boxed"}>
                            <a className={"navbar-item"}>{"Profil"}</a>
                            <a className={"navbar-item"}>{"Favorite"}</a>
                            <a className={"navbar-item"}>{"Deconnection"}</a>
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