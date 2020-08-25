<template>
    <div class="container">
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
        <div class="box box-carousel columns is-mobile sg-cont">
            <div class="box box-carousel column is-one-quarter">
                <h1 class="sg-right title is-family-primary">{{bundler}}</h1>
                <img class="img" src="../assets/IMG_20200520_145947.jpg" />
                <h2 class="sg title is-family-primary">{{jobs}}</h2>
            </div>

            <div class="column">
                <carousel>
                    <CarouselSlide>
                        <div class="box box-carousel sg-box">
                            <h1 class="title">Contact me</h1>
                            <div class="columns">
                                <div class="column">
                                    <div class="columns is-mobile">
                                        <div class="column is-one-quarter sg-padding">
                                            <span class="is-size-3">
                                                <i class="fab fa-facebook-square"></i>
                                            </span>
                                        </div>
                                        <a
                                            class="column sg-top"
                                            href="https://www.facebook.com/sarah.guillaume.140/"
                                        >Facebook</a>
                                    </div>
                                    <div class="columns is-mobile">
                                        <div class="column is-one-quarter sg-padding">
                                            <span class="is-size-3">
                                                <i class="fab fa-github"></i>
                                            </span>
                                        </div>
                                        <a
                                            class="column sg-top"
                                            href="https://github.com/SarahG4000"
                                        >Sarah</a>
                                    </div>
                                    <div class="columns is-mobile">
                                        <div class="column is-one-quarter sg-padding">
                                            <span class="is-size-3">
                                                <i class="fab fa-linkedin"></i>
                                            </span>
                                        </div>
                                        <a
                                            class="column sg-top"
                                            href="https://www.linkedin.com/in/sarah-guillaume-06993219a/"
                                        >Linkedin</a>
                                    </div>
                                    <div class="columns is-mobile">
                                        <div class="column is-one-quarter sg-padding">
                                            <span class="is-size-3">
                                                <i class="fas fa-envelope"></i>
                                            </span>
                                        </div>
                                        <p class="column sg-top">sarah.guillaume4000@gmail.com</p>
                                    </div>
                                    <div class="columns is-mobile">
                                        <div class="column is-one-quarter sg-padding">
                                            <span class="is-size-3">
                                                <i class="fab fa-discord"></i>
                                            </span>
                                        </div>
                                        <p class="column sg-top">SarahG#4150</p>
                                    </div>
                                </div>
                                <div class="column">
                                    <form
                                        method
                                        action="javascript:sendMail()"
                                        name="envoi"
                                        enctype="text/plain"
                                    >
                                        <div class="field">
                                            <label class="label">Name</label>
                                            <div class="control has-icons-left has-icons-right">
                                                <input
                                                    class="input"
                                                    type="text"
                                                    placeholder="Text input"
                                                    value="Name"
                                                />
                                                <span class="icon is-small is-left">
                                                    <i class="fas fa-user"></i>
                                                </span>
                                            </div>
                                        </div>

                                        <div class="field">
                                            <label class="label">Email</label>
                                            <div class="control has-icons-left has-icons-right">
                                                <input
                                                    class="input"
                                                    type="email"
                                                    placeholder="Email input"
                                                    value="mail@"
                                                />
                                                <span class="icon is-small is-left">
                                                    <i class="fas fa-envelope"></i>
                                                </span>
                                            </div>
                                        </div>

                                        <div class="field">
                                            <label class="label">Subject</label>
                                            <div class="control">
                                                <div class="select">
                                                    <select>
                                                        <option>Select</option>
                                                        <option>Recrutement</option>
                                                        <option>Projet</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="field">
                                            <label class="label">Message</label>
                                            <div class="control">
                                                <textarea class="textarea" placeholder="Textarea"></textarea>
                                            </div>
                                        </div>

                                        <div class="field is-grouped">
                                            <div class="control">
                                                <button
                                                    class="button is-link"
                                                    type="submit"
                                                    value="Envoyer"
                                                >Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </CarouselSlide>
                    <CarouselSlide>
                        <div class="box box-carousel sg-box">
                            <h1 class="title">{{experience}}</h1>
                            <div class="columns is-mobile">
                                <div class="column"></div>
                                <div class="column"></div>
                            </div>
                            <p>2015-2017 1 an et 6 mois</p>
                            <p>2014 6 mois</p>
                            <p>2013 2 mois</p>
                            <p>2011-2012 2 Étés</p>

                            <p>
                                Employée : communal à Houffalize Ménage et
                                garderie
                            </p>
                            <p>Étudiante : commit de cuisine et plonge</p>
                            <p>Étudiante : Ménage</p>
                            <p>Étudiante : Accueil, animation, ménage et cafétéria</p>
                        </div>
                    </CarouselSlide>
                    <CarouselSlide>
                        <div class="box box-carousel sg-box">
                            <div class>
                                <div class="columns is-mobile">
                                    <h class="title">{{formation}}</h>
                                    <div class="column">Janvier 2020 a maintenant</div>
                                    <div class="column">2017-2019</div>
                                    <div class="column">2013-2015</div>
                                    <div class="column">2011-2013</div>
                                    <div class="column">2008-2011</div>
                                </div>
                                <div class="columns is-mobile">
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
                        <div class="box box-carousel sg-box">
                            <div class>
                                <h1 class="title">{{competence}}</h1>
                                <div class="columns">
                                    <div class="column">
                                        <div>
                                            <i class="fab fa-html5"></i>HTML5
                                        </div>
                                        <div>
                                            <i class="fab fa-css3-alt"></i>CSS3
                                        </div>
                                        <div>
                                            <i class="fab fa-wordpress"></i>Wordpress
                                        </div>
                                        <div>
                                            <i class="fab fa-node"></i>nodejs
                                        </div>
                                        <div>
                                            <i class="fab fa-react"></i>Reactjs
                                        </div>
                                        <div>
                                            <i class="fab fa-git"></i>Git
                                        </div>
                                        <div>
                                            <i class="fab fa-bootstrap"></i>Bootstrap
                                        </div>

                                        <div>
                                            <i class="fab fa-php"></i>Php
                                        </div>

                                        <div>
                                            <i class="fab fa-js"></i>JavaScript
                                        </div>
                                    </div>
                                    <div class="column">
                                        <div>Babel</div>
                                        <div>Jquery</div>
                                        <div>Ajax</div>
                                        <div>Phpmyadmin</div>
                                        <div>Bulma</div>
                                        <div>MySql</div>

                                        <div>PhotoShop</div>
                                        <div>Illustrator</div>
                                        <div>Indesing</div>
                                    </div>
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
    color: #434343 !important;
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

.sg-cont {
    background: #434343 !important;
    color: white !important;
}

nav {
    position: absolute;
    z-index: 10;
}

form {
    margin-top: -80px;
}

.img {
    height: auto;
    max-width: 60%;
    margin-left: 19%;
}
.sg {
    border-left: 2px solid;
    margin: 25px;
}
.sg-right {
    border-right: 2px solid;
    margin: 25px;
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

.sg-box {
    height: 467px;
}

.box {
    background-color: rgb(246, 236, 236) !important;
}

.box-carousel {
    border-color: rgb(141, 141, 140);
    border: 1px solid;
    color: #434343 !important;
}
</style>