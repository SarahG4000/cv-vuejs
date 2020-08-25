<template>
    <div class="container">
        <div class="box column is-one-fifth">
            <h1 class="sg-right title is-family-primary color-sg">{{bundler}}</h1>

            <img class="img" src="../assets/IMG_20200520_145947.jpg" />
            <h2 class="sg title is-family-primary padding-sg color-sg">{{jobs}}</h2>
        </div>

        <carousel>
            <CarouselSlide>
                <div class="sg-box">
                    <div>
                        <h1 class="title sg padding-sg bottom-sg">{{competence}}</h1>
                        <div class="columns">
                            <div class="column is-one-quarter margin-sg sg-grand">
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
                            <div class="column is-one-third sg-grand"></div>
                            <div class="column is-one-quarter sg-grand">
                                <div class="level-left">Ajax</div>
                                <div class="level-right">Babel</div>
                                <div class="level-left">Bootstrap</div>
                                <div class="level-right">Bulma</div>
                                <div class="level-left">Jquery</div>
                                <div class="level-right">MySql</div>
                                <div class="level-left">PhotoShop</div>
                                <div class="level-right">Phpmyadmin</div>
                                <div class="level-left">Illustrator</div>
                                <div class="level-right">Indesing</div>
                            </div>
                        </div>
                    </div>
                </div>
            </CarouselSlide>
            <CarouselSlide>
                <div class="sg-box">
                    <div>
                        <h1 class="title sg-right sg-min bottom-sg">{{formation}}</h1>
                        <div class="columns is-mobile sg-dateforma">
                            <div class="column is-one-fifth sg-style0"></div>
                            <div class="column is-one-third">
                                <div class="sg-bottom">Janvier 2020 a maintenant</div>
                                <div class="sg-bottom sg-paddingforma">2017-2019</div>
                                <div class="sg-bottom">2013-2015</div>
                                <div class="sg-bottom sg-paddingforma2">2011-2013</div>
                                <div class="sg-bottom sg-paddingforma2">2008-2011</div>
                            </div>
                            <div class="column is-one-fifth sg-grand sg-style1"></div>

                            <div class="column sg-floatr sg-forma is-one-third">
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
                <div class="sg-box">
                    <h1 class="title sg padding-sg bottom-sg">{{experience}}</h1>
                    <div class="columns is-mobile">
                        <div class="column is-one-fifth sg-style0"></div>
                        <div class="column sg-dateforma is-mobile">
                            <div class="sg-bottom">2015-2017 18 mois</div>
                            <div class="sg-bottom">2014 6 mois</div>
                            <div class="sg-bottom sg-paddingforma2">2013 2 mois</div>
                            <div class="sg-bottom sg-paddingforma">2011-2012 2 Étés</div>
                        </div>
                        <div class="column is-one-fifth sg-grand sg-style2"></div>
                        <div class="column sg-floatr sg-dateforma sg-forma is-one-thirds">
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
                <div class="bsg-box">
                    <h1 class="title sg-right sg-min bottom-sg">{{home}}</h1>
                    <div class="columns">
                        <div class="column is-one-fifth sg-grand sg-style0"></div>
                        <div class="column is-one-third">
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
                        <div class="column is-one-fifth sg-grand sg-style2"></div>

                        <div class="column is-one-third">
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
                                    <label class="label">Message</label>
                                    <div class="control">
                                        <textarea class="textarea" placeholder="Textarea"></textarea>
                                    </div>
                                </div>

                                <div class="field is-grouped">
                                    <div class="control">
                                        <button
                                            class="button sg-button is-link"
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
        //important des elements
        Carousel: () => import("./carousel/Carousel.vue"),
        CarouselSlide: () => import("./carousel/CarouselSlide.vue"),
    },
};
</script>

<style lang="scss" >
.container {
    color: #646363 !important;
    // background: darkblue;
    top: 0;
    max-width: 100% !important;
    max-height: 100% !important;
}

.sg-button {
    font-size: 20px !important;
}

.box {
    position: absolute;
    z-index: 20;
    margin-left: 39%;
    border-radius: 0 !important;
    box-shadow: none !important;
    color: #646363 !important;
    border: #646363 1px solid !important;
    margin-top: 50vh !important; /* poussé de la moitié de hauteur de viewport */
    transform: translateY(-55%) !important;
}

.sg-style0 {
    width: 9% !important;
}
.sg-style1 {
    margin-right: 0% !important;
}
.sg-style2 {
    margin-right: -2% !important;
}

a {
    color: #8d1414;
}

.color-sg {
    color: #646363 !important;
}

.bottom-sg {
    margin-bottom: 60px !important;
}

.sg-grand {
    font-size: 20px;
}

.margin-sg {
    margin-left: 105px;
}

.sg-cont {
    background: white !important;
}

nav {
    position: absolute;
    z-index: 10;
}

form {
    margin-top: 5px;
}

.img {
    height: auto;
    max-width: 60%;
    margin-left: 19%;
}
.sg {
    border-left: 3px solid #8d1414;
    margin: 25px;
}
.sg-right {
    border-right: 3px solid #8d1414;
    margin: 25px;
}

.sg-min {
    width: 190px;
}

.sg-padding {
    padding: 0 0 0 82px !important;
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
    color: #646363;
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
    margin-top: 23px !important;
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
    font-size: 25px;
}

.button:active,
.button:hover,
.butto.is-hovered,
.button.is-active {
    border: none;
}
</style>
