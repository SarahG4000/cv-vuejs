<template>
    <div class="container is-mobile">
        <div class="box box-sg columns is-mobile is-one-quarter">
            <div class="box box-sg column">
                <h1 class="sg is-size-3 is-family-primary">
                    <!-- Sarah
                    <br />Guillaume-->
                    {{jobs}}
                </h1>
                <img class="img" src="../assets/IMG_20200520_145947.jpg" />
            </div>
            <div class="column is-three-quarters">
                <h1 class="is-size-4">{{bundler}}</h1>
                <carousel>
                    <CarouselSlide>
                        <div class="box box-sg">
                            <h1 class="is-size-3">Contact me</h1>
                            <div class="columns">
                                <div class="column">
                                    <span class="is-size-1 is-centered">
                                        <i class="fab fa-facebook-square"></i>
                                    </span>
                                </div>
                                <a
                                    class="column is-two-thirds"
                                >https://www.facebook.com/sarah.guillaume.140/</a>
                            </div>
                            <div class="columns">
                                <div class="column">
                                    <span class="is-size-1">
                                        <i class="fab fa-github"></i>
                                    </span>
                                </div>
                                <a class="column is-two-thirds">https://github.com/SarahG4000</a>
                            </div>
                            <div class="columns">
                                <div class="column">
                                    <span class="is-size-1">
                                        <i class="fab fa-linkedin"></i>
                                    </span>
                                </div>
                                <a
                                    class="column is-two-thirds"
                                >https://www.linkedin.com/in/sarah-guillaume-06993219a/</a>
                            </div>
                            <div class="columns">
                                <div class="column">
                                    <span class="is-size-1">
                                        <i class="fas fa-envelope"></i>
                                    </span>
                                </div>
                                <a class="column is-two-thirds">sarah.guillaume4000@gmail.com</a>
                            </div>
                            <div class="columns">
                                <div class="column">
                                    <span class="is-size-1">
                                        <i class="fab fa-discord"></i>
                                    </span>
                                </div>
                                <a class="column is-two-thirds">SarahG#4150</a>
                            </div>
                        </div>
                    </CarouselSlide>
                    <CarouselSlide>
                        <div class="box box-carousel">
                            <div class="columns">
                                <div class="column"></div>
                                <div class="column"></div>
                            </div>
                        </div>
                    </CarouselSlide>
                    <CarouselSlide>
                        <div class="box box-carousel">
                            <div class="columns">
                                <div class="column"></div>
                                <div class="column"></div>
                            </div>
                        </div>
                    </CarouselSlide>
                    <CarouselSlide>
                        <div class="box box-carousel">
                            <div class="columns">
                                <div class="column"></div>
                                <div class="column"></div>
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
    top: 0;
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

.img {
    height: auto;
    max-width: 100%;
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
    box-shadow: 0 0.5em 1em -0.15em rgba(10, 10, 10, 0.4),
        0 0px 0 2px rgba(10, 10, 10, 0.02);
}

.sg-padding {
    padding: 0 0 0 82px;
}

.box-carousel {
    border-color: rgb(141, 141, 140);
    border: 1px solid;
    color: rgb(180, 176, 176);
}
</style>