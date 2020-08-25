<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: 0,
            slides: this.$children,
        };
    },
    mounted() {
        console.log(thiss.$children);
    },
};
</script>