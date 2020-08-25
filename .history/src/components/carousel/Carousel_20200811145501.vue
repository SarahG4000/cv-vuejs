<template>
    <div class="carousel">
        <slot></slot>
        <div>
            <button
                class="button is-boxed carousel carousel__nav carousel__next column"
                @click.prevent="prev"
            >
                <i class="fas fa-angle-left"></i>
            </button>
            <button
                class="button is-boxed carousel carousel__nav carousel__prev column"
                @click.prevent="next"
            >
                <i class="fas fa-angle-right"></i>
            </button>
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
    position: absolute !important;
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

.sg-but {
    margin-top: -40px;
}

button {
    border-radius: 0% !important;
}
</style>