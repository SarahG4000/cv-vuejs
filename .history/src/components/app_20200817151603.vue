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
        <div class="columns is-mobile sg-cont">
            <div class="box box-carousel column is-one-quarter">
                <h1 class="sg-right title is-family-primary">{{bundler}}</h1>
                <img class="img" src="../assets/IMG_20200520_145947.jpg" />
                <h2 class="sg title is-family-primary padding-sg">{{jobs}}</h2>
            </div>

            <div class="column">
                <carousel>
                    <CarouselSlide>
                        <div class="box box-carousel sg-box">
                            <div class>
                                <h1 class="title sg padding-sg">{{competence}}</h1>
                                <div class="columns">
                                    <div class="column is-one-quarter margin-sg sg-grand">
                                        <div class="level-right">Bootstrap</div>
                                        <div class="level-left">
                                            <div class="i-sg">
                                                <span>
                                                    <i class="fab fa-css3-alt"></i>
                                                </span>
                                            </div>

                                            <p>CSS3</p>
                                        </div>
                                        <div class="level-right">
                                            <div class="i-sg">
                                                <span>
                                                    <i class="fab fa-git"></i>
                                                </span>
                                            </div>

                                            <p>Git</p>
                                        </div>
                                        <div class="level-left">
                                            <div class="i-sg">
                                                <span>
                                                    <i class="fab fa-html5"></i>
                                                </span>
                                            </div>

                                            <p>HTML5</p>
                                        </div>
                                        <div class="level-right">
                                            <div class="i-sg">
                                                <span>
                                                    <i class="fab fa-js"></i>
                                                </span>
                                            </div>

                                            <p>JavaScript</p>
                                        </div>
                                        <div class="level-left">
                                            <div class="i-sg">
                                                <span>
                                                    <i class="fab fa-node"></i>
                                                </span>
                                            </div>

                                            <p>nodejs</p>
                                        </div>
                                        <div class="level-right">
                                            <div class="i-sg">
                                                <span>
                                                    <i class="fab fa-react"></i>
                                                </span>
                                            </div>

                                            <p>Reactjs</p>
                                        </div>
                                        <div class="level-left">
                                            <div class="i-sg">
                                                <span>
                                                    <i class="fab fa-php"></i>
                                                </span>
                                            </div>

                                            <p>Php</p>
                                        </div>
                                        <div class="level-right">
                                            <div class="i-sg">
                                                <span>
                                                    <i class="fab fa-wordpress"></i>
                                                </span>
                                            </div>

                                            <p>Wordpress</p>
                                        </div>
                                    </div>
                                    <div class="column is-one-quarter sg-grand"></div>
                                    <div class="column is-one-quarter sg-grand">
                                        <div class="level-left">Ajax</div>
                                        <div class="level-right">Babel</div>
                                        <div class="level-left">Bulma</div>
                                        <div class="level-right">Jquery</div>
                                        <div class="level-left">MySql</div>
                                        <div class="level-right">PhotoShop</div>
                                        <div class="level-left">Phpmyadmin</div>
                                        <div class="level-right">Illustrator</div>
                                        <div class="level-left">Indesing</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselSlide>
                    <CarouselSlide>
                        <div class="box box-carousel sg-box">
                            <div>
                                <h1 class="title sg-right sg-min">{{formation}}</h1>
                                <div class="columns is-mobile sg-dateforma">
                                    <div class="column">
                                        <div class="sg-bottom">Janvier 2020 a maintenant</div>
                                        <div class="sg-bottom sg-paddingforma">2017-2019</div>
                                        <div class="sg-bottom">2013-2015</div>
                                        <div class="sg-bottom sg-paddingforma2">2011-2013</div>
                                        <div class="sg-bottom sg-paddingforma2">2008-2011</div>
                                    </div>

                                    <div class="column sg-floatr sg-forma is-two-thirds">
                                        <div class="sg-bottom">
                                            <span>
                                                Formation
                                                Becode
                                            </span> Liège
                                        </div>
                                        <div class="sg-bottom">
                                            Ipeps à Seraing formation en
                                            <span>web développement</span>
                                        </div>
                                        <div class="sg-bottom">
                                            Saint-Luc secondaire à Liège 5éme et 6éme
                                            <span>infographie</span>
                                        </div>
                                        <div class="sg-bottom">
                                            ARBH Bastogne 4éme section science forte et 5éme
                                            <span>section art</span>
                                        </div>
                                        <div class="sg-bottom">
                                            ARBH Houffalize
                                            <span>1er, 2éme et 3éme général</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselSlide>
                    <CarouselSlide>
                        <div class="box box-carousel sg-box">
                            <h1 class="title sg padding-sg">{{experience}}</h1>
                            <div class="columns is-mobile">
                                <div class="column sg-dateforma is-mobile">
                                    <div class="sg-bottom">2015-2017 1 an et 6 mois</div>
                                    <div class="sg-bottom">2014 6 mois</div>
                                    <div class="sg-bottom sg-paddingforma2">2013 2 mois</div>
                                    <div class="sg-bottom sg-paddingforma">2011-2012 2 Étés</div>
                                </div>
                                <div class="column sg-floatr sg-dateforma sg-forma is-two-thirds">
                                    <div class="sg-bottom">
                                        Employée :
                                        <span>
                                            communal à Houffalize Ménage et
                                            garderie
                                        </span>
                                    </div>
                                    <div class="sg-bottom">
                                        Étudiante :
                                        <span>commit de cuisine et plonge</span>
                                    </div>
                                    <div class="sg-bottom">
                                        Étudiante :
                                        <span>Ménage</span>
                                    </div>
                                    <div class="sg-bottom">
                                        Étudiante :
                                        <span>Accueil, animation, ménage et cafétéria</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselSlide>
                    <CarouselSlide>
                        <div class="box box-carousel sg-box">
                            <h1 class="title sg-right sg-min">Contact me</h1>
                            <div class="columns">
                                <div class="column">
                                    <div class="columns is-mobile sg-bottom">
                                        <div class="column is-one-quarter sg-padding">
                                            <span class="is-size-3">
                                                <i class="fab fa-facebook-square"></i>
                                            </span>
                                        </div>
                                        <a
                                            class="column"
                                            href="https://www.facebook.com/sarah.guillaume.140/"
                                        >Facebook</a>
                                    </div>
                                    <div class="columns is-mobile sg-bottom">
                                        <div class="column is-one-quarter sg-padding">
                                            <span class="is-size-3">
                                                <i class="fab fa-github"></i>
                                            </span>
                                        </div>
                                        <a class="column" href="https://github.com/SarahG4000">Sarah</a>
                                    </div>
                                    <div class="columns is-mobile sg-bottom">
                                        <div class="column is-one-quarter sg-padding">
                                            <span class="is-size-3">
                                                <i class="fab fa-linkedin"></i>
                                            </span>
                                        </div>
                                        <a
                                            class="column"
                                            href="https://www.linkedin.com/in/sarah-guillaume-06993219a/"
                                        >Linkedin</a>
                                    </div>
                                    <div class="columns is-mobile sg-bottom">
                                        <div class="column is-one-quarter sg-padding">
                                            <span class="is-size-3">
                                                <i class="fas fa-envelope"></i>
                                            </span>
                                        </div>
                                        <p class="column">sarah.guillaume4000@gmail.com</p>
                                    </div>
                                    <div class="columns is-mobile sg-bottom">
                                        <div class="column is-one-quarter sg-padding">
                                            <span class="is-size-3">
                                                <i class="fab fa-discord"></i>
                                            </span>
                                        </div>
                                        <p class="column">SarahG#4150</p>
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
a {
    color: #8d1414;
}

.sg-grand {
    font-size: 18px;
}

.margin-sg {
    margin-left: 105px;
}

.sg-cont {
    background: #646363 !important;
}

nav {
    position: absolute;
    z-index: 10;
}

form {
    margin-top: -100px;
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

.sg-min {
    width: 190px;
}

.sg-padding {
    padding: 0 0 0 82px;
}

.sg-title {
    margin-top: -10px;
    margin-bottom: 10px;
    color: #646363 !important;
}

.padding-sg {
    padding-left: 17px;
}

.sg-box {
    height: 475px;
}

.box {
    background-color: rgb(223, 219, 219) !important;
    color: #646363 !important;
}

.box-carousel {
    border-color: rgb(141, 141, 140);
    border: 1px solid;
    color: #646363 !important;
}

.sg-dateforma {
    margin-top: 50px;
    font-size: 20px;
}

.sg-forma {
    font-size: 22px;
    color: #646363;
}

.sg-floatr {
    float: right;
}

.sg-bottom {
    margin-bottom: 15px;
}

.sg-paddingforma {
    padding-top: 6px;
}
.sg-paddingforma2 {
    padding-top: 3px;
}

span {
    color: #8d1414;
}

.i-sg {
    margin-right: 11px;
}

.button:active,
.button:hover,
.butto.is-hovered,
.button.is-active {
    border: none;
}
</style>