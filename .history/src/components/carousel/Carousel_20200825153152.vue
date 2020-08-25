<template>
    <div class>
        <slot></slot>
        <div>
            <button
                class="button is-boxed carousel carousel__nav carousel__prev column sg-prev"
                @click.prevent="prev"
            >
                <i class="fas fa-angle-left size-sg"></i>
            </button>
            <button
                class="button is-boxed carousel carousel__nav carousel__next column sg-next"
                @click.prevent="next"
            >
                <i class="fas fa-angle-right size-sg"></i>
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
            //incrementation de bouton next
            this.index++;
            if (this.index == this.slidesCount) {
                this.index = 0;
            }
        },
        prev() {
            //incrementation du bouton prev
            this.index--;
            if (this.index < 0) {
                this.index = this.slidesCount - 1;
            }
        },
    },
};
</script>

<style lang="scss">
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
    background: white !important;
    color: #646363 !important;
    font-size: 35px !important;
    border: none;
    margin-top: 50vh !important; /* poussé de la moitié de hauteur de viewport */
    transform: translateY(-95%) !important;
}

.sg-next {
    float: right;
    margin-right: -9px;
    margin-top: 150px;
}

.sg-prev {
    float: left;
    margin-left: -9px;
    margin-top: 150px;
}

.size-sg {
    font-size: 70px;
}

.sg-align {
    top: -12px;
}
</style>