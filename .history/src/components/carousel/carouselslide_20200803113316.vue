<template>
    <div>
        <p>Index: {{ index }}</p>
        <slot></slot>
    </div>
</template>

<script>
export default Vue.extend({
    data() {
        return {
            index: 0,
        };
    },
});
</script>