<template>
    <div class="carousel">
        <slot></slot>
        <button class="button is-boxed carousel__nav carousel__next" @click.prevent="prev">Prev</button>
        <button class="button is-boxed carousel__nav carousel__prev" @click.prevent="next">Next</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: 0,
            slides: [],
        };
    },
    computed: {
        slidesCount() {
            return this.slides.length;
        },
    },
    mounted() {
        this.slides = this.$children;

        this.slides.forEach((slide, i) => {
            slide.index = i++;
        });
    },
    methods: {
        next() {
            this.index++;
            if (this.index == this.slidesCount) {
                this.index = 0;
            }
        },
        prev() {
            this.index--;
            if (this.index < 0) {
                this.index = this.slidesCount - 1;
            }
        },
    },
};
</script>

<style>
.carousel {
    position: relative;
}

.carousel__nav {
    position: absolute;
    margin-top: -31px;
    top: 50px;
    left: 10px;
}
.carousel__next {
    right: 10px;
    left: auto;
}
</style>