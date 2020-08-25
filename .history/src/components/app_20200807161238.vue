<template>
    <div class="container is-mobile">
        <!-- <nav role="navigation" aria-label="dropdown navigation" class="navbar is-dark is-0-mobile">
            <div class="navbar-brand">
                <a class="navbar-item">
                    <h1 class="title has-text-white-ter">
                        <span>
                            <i class="far fa-address-card"></i>
                        </span>
                    </h1>
                </a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-end">
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link sg-nav">
                            <span class="icon s-size-5">
                                <i class="fas fa-users has-text-white-ter sg-profilicon" />
                            </span>
                        </a>
                        <div class="navbar-dropdown is-boxed">
                            <a class="navbar-item is-hoverable" href="../index.html">{{home}}</a>
                            <a class="navbar-item is-hoverable" href="../index.html">{{formation}}</a>
                            <a class="navbar-item is-hoverable" href="../index.html">{{competence}}</a>
                            <a class="navbar-item is-hoverable" href="../index.html">{{experience}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>-->
        <div class="box box-sg columns is-mobile">
            <div class="box box-sg column is-one-quarter">
                <h1 class="sg is-size-3 is-family-primary">
                    {{bundler}}
                    {{jobs}}
                </h1>
                <img class="img" src="../assets/IMG_20200520_145947.jpg" />
            </div>
            <div class="column is-three-quarters">
                <carousel>
                    <CarouselSlide>
                        <div class="box box-sg">
                            <h1 class="is-size-4 sg-title">Contact me</h1>
                            <div class="columns">
                                <div class="column sg-padding">
                                    <span class="is-size-1 is-centered">
                                        <i class="fab fa-facebook-square"></i>
                                    </span>
                                </div>
                                <a
                                    class="column is-two-thirds sg-top"
                                    href="https://www.facebook.com/sarah.guillaume.140/"
                                >Facebook</a>
                            </div>
                            <div class="columns">
                                <div class="column sg-padding">
                                    <span class="is-size-1">
                                        <i class="fab fa-github"></i>
                                    </span>
                                </div>
                                <a
                                    class="column is-two-thirds sg-top"
                                    href="https://github.com/SarahG4000"
                                >Sarah</a>
                            </div>
                            <div class="columns">
                                <div class="column sg-padding">
                                    <span class="is-size-1">
                                        <i class="fab fa-linkedin"></i>
                                    </span>
                                </div>
                                <a
                                    class="column is-two-thirds sg-top"
                                    href="https://www.linkedin.com/in/sarah-guillaume-06993219a/"
                                >Linkedin</a>
                            </div>
                            <div class="columns">
                                <div class="column sg-padding">
                                    <span class="is-size-1">
                                        <i class="fas fa-envelope"></i>
                                    </span>
                                </div>
                                <a class="column is-two-thirds sg-top">sarah.guillaume4000@gmail.com</a>
                            </div>
                            <div class="columns">
                                <div class="column sg-padding">
                                    <span class="is-size-1">
                                        <i class="fab fa-discord"></i>
                                    </span>
                                </div>
                                <a class="column is-two-thirds sg-top">SarahG#4150</a>
                            </div>
                        </div>
                    </CarouselSlide>
                    <CarouselSlide>
                        <div class="box box-carousel">
                            <div class="columns">
                                <div class="column">
                                    {{experience}}
                                    <div class="column">2015-2017 1 an et 6 mois</div>
                                    <div class="column">2014 6 mois</div>
                                    <div class="column">2013 2 mois</div>
                                    <div class="column">2011-2012 2 Étés</div>
                                </div>
                                <div class="column">
                                    <div class="column">
                                        Employée : communal à Houffalize Ménage et
                                        garderie
                                    </div>
                                    <div class="column">Étudiante : commit de cuisine et plonge</div>
                                    <div class="column">Étudiante : Ménage</div>
                                    <div
                                        class="column"
                                    >Étudiante : Accueil, animation, ménage et cafétéria</div>
                                </div>
                            </div>
                        </div>
                    </CarouselSlide>
                    <CarouselSlide>
                        <div class="box box-carousel">
                            <div class="columns">
                                <div class="column">
                                    {{formation}}
                                    <div class="column">Janvier 2020 a maintenant</div>
                                    <div class="column">2017-2019</div>
                                    <div class="column">2013-2015</div>
                                    <div class="column">2011-2013</div>
                                    <div class="column">2008-2011</div>
                                </div>
                                <div class="column">
                                    <div class="column">Formation Becode Liège</div>
                                    <div
                                        class="column"
                                    >Ipeps à Seraing formation en web développement</div>
                                    <div
                                        class="column"
                                    >Saint-Luc secondaire à Liège 5éme et 6éme infographie</div>
                                    <div
                                        class="column"
                                    >ARBH Bastogne 4éme section science forte et 5éme section art</div>
                                    <div class="column">ARBH Houffalize 1er, 2éme et 3éme général</div>
                                </div>
                            </div>
                        </div>
                    </CarouselSlide>
                    <CarouselSlide>
                        <div class="box box-carousel">
                            <div class="columns">
                                {{competence}}
                                <div class="column">
                                    HTML5
                                    CSS3
                                    Bootstrap
                                    Bulma
                                </div>
                            </div>
                        </div>
                    </CarouselSlide>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default {
    data() {
        return {
            bundler: "Sarah Guillaume",
            jobs: "Web developer",
            home: "Contact me",
            competence: "Compétences",
            experience: "Expériences Professionnelles",
            formation: "Formations",
        };
    },
    components: {
        Carousel: () => import("./carousel/Carousel.vue"),
        CarouselSlide: () => import("./carousel/CarouselSlide.vue"),
    },
};
</script>

<style lang="scss" scoped>
.container {
    color: rgb(182, 199, 192);
    // background: darkblue;
    position: fixed;
    top: 35px;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    z-index: 1000;
    justify-content: center;
    align-items: center;
    background: "rgba(0,0,0,0.5)";
    position: relative;
    z-index: 5;
}

nav {
    position: absolute;
    z-index: 10;
}

.img {
    height: auto;
    max-width: 60%;
    margin-left: 19%;
}
.sg {
    border-right: 2px solid;
    border-bottom: 2px solid;
    margin-bottom: 1%;
    margin: 25px;
}

.box-sg {
    border-top: 2px solid rgb(141, 141, 140);
    border-left: 2px solid rgb(141, 141, 140);
    border-radius: 0;
}

.sg-padding {
    padding: 0 0 0 82px;
}

.sg-top {
    margin-top: 11px;
}

.sg-title {
    margin-top: -10px;
    margin-bottom: 10px;
}

.box-carousel {
    border-color: rgb(141, 141, 140);
    border: 1px solid;
    color: rgb(180, 176, 176);
}
</style>