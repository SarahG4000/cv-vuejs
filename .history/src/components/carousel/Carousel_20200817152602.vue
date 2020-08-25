<template>
    <div class="carousel sg-align">
        <slot></slot>
        <div>
            <button
                class="button is-boxed carousel carousel__nav carousel__prev column sg-prev"
                @click.prevent="next"
            >
                <i class="fas fa-angle-right size-sg"></i>
            </button>
            <button
                class="button is-boxed carousel carousel__nav carousel__next column sg-next"
                @click.prevent="prev"
            >
                <i class="fas fa-angle-left size-sg"></i>
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

button {
    background: #646363 !important;
    color: white !important;
    font-size: 35px;
}

.sg-next {
    float: right;
    margin-right: -422px;
    height: 531px !important;
    margin-top: -69px;
    border: none !important;
}

.sg-prev {
    height: 531px !important;
    margin-right: -68px;
    margin-top: -69px;
    border: none !important;
}

.size-sg {
    font-size: 70px;
}

.sg-align {
    top: -12px;
}
</style>