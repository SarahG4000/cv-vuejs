<template>
    <div>
        <slot></slot>
        <button class="button is-boxed">Next ></button>
        <button class="button is-boxed">Prev <</button>
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
};
</script>