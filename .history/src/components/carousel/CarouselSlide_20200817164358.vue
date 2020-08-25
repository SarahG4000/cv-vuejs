<template>
    <transition name="slide">
        <div v-show="visible">
            <!-- Index: {{ index }} -->
            <!-- visible ? {{visible}} -->
            <slot></slot>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            index: 0,
        };
    },
    computed: {
        visible() {
            return this.index === this.$parent.index;
        },
    },
};
</script>

<style>
.slide-enter-active {
    animation: flipInX 3s;
}

.slide-leave-active {
    animation: flipOutX 1s;
}
</style>