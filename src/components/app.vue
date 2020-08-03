<template>
    <div class="container is-mobile is-fullhd">
        <div class="box box-sg columns is-mobile is-one-quarter">
            <div class="box box-sg column">
                <h1 class="sg is-size-3 is-family-primary">
                    <!-- Sarah
                    <br />Guillaume-->
                    {{bundler}}
                </h1>
                <img class="img" src="../assets/IMG_20200520_145947.jpg" />
            </div>
            <div class="column is-three-quarters">
                <h1 class="is-size-4">{{contact}}</h1>
                <carousel>
                    <CarouselSlide>1</CarouselSlide>
                    <CarouselSlide>2</CarouselSlide>
                    <CarouselSlide>3</CarouselSlide>
                    <CarouselSlide>4</CarouselSlide>
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
            contact: "Contact",
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
</style>