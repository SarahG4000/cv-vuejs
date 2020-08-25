<template>
    <div class="carousel">
        <slot></slot>
        <div>
            <button
                class="button is-boxed carousel__nav carousel__next column is-half sg-left box box-sg"
                @click.prevent="prev"
            >Prev</button>
            <button
                class="button is-boxed carousel__nav carousel__prev column is-half sg-float box box-sg"
                @click.prevent="next"
            >Next</button>
        </div>
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
.carousel.carousel__next {
    right: 10px;
    left: auto;
}

.sg-float {
    float: right;
    margin-top: -64px;
    margin-right: 10px;
}
.sg-left {
    margin-left: -10px;
}
</style>