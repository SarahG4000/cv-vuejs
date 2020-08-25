<template>
    <div>
        index: {{index}}
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