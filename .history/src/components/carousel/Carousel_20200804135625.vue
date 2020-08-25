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
    margin-top: -40px;
    margin-right: 10px;
}
.sg-left {
    margin-left: -10px;
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