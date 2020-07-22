<template>
    <div class="container is-mobile is-fullhd">
        <h1>{{bundler}}</h1>
        <div class="card">
            <div class="card">
                <img class="img" src="../assets/testeCv1.png" />
            </div>
            <div>
                <p
                    class="item"
                >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, aliquam suscipit, nesciunt ex quia consequuntur vero quo corporis veritatis ea, voluptates rerum dolorem maiores inventore ipsum tempora. Dolor, ad sint.</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    data() {
        return {
            bundler: "Welcom",
        };
    },
});
</script>

<style lang="scss" scoped>
.container {
    color: green;
    background: darkblue;
}

.card {
    background: rgb(46, 49, 59);
}

.img {
    height: auto;
    max-width: 15%;
}
</style>