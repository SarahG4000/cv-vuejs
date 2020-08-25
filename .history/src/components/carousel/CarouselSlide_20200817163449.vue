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
    animation: fadeIn 2s;
}

.slide-leave-active {
    animation: fadeOut 1s;
    position: absolute;
    top: 0;
    bottom: 0;
}

/* @keyframes bounceInDown {
    from {
        transform: translateY(200%);
    }
    to {
        transform: translateY(0);
    }
}

@keyframes bounceOutDown {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-200%);
    }
} */
</style>