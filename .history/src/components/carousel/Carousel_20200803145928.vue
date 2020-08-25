<template>
    <div>
        <slot></slot>
        <button class="button is-boxed" @click.prevent="prev"><\Prev</button>
        <button class="button is-boxed" @click.prevent="next">Next ></button>
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
    mounted() {
        this.slides = this.$children;

        this.slides.forEach((slide, i) => {
            slide.index = i++;
        });
    },
    methods: {
        next() {
            this.index++;
        },
        prev() {
            this.index--;
        },
    },
};
</script>