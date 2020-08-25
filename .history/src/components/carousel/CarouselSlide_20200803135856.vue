<template>
    <div>
        <p>Index: {{ index }}</p>
        <slot></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: 0,
        };
    },
};
</script>