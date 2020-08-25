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

<style lang="scss">
.slide-enter-active {
    /*animation d'entre et leave anomation de sortie*/
    animation: rollIn 2s;
}

.slide-leave-active {
    position: absolute;
    top: 0;
    bottom: 0;
}
</style>
