<template>
    <div class="container is-mobile is-fullhd">
        <!-- <h1>{{bundler}}</h1> -->
        <div class="card columns is-mobile is-one-quarter">
            <div class="card column">
                <img class="img" src="../assets/IMG_20200520_145947.jpg" />
            </div>
            <div class="column is-three-quarters">
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
    color: rgb(182, 199, 192);
    // background: darkblue;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    z-index: 1000;
    justify-content: center;
    align-items: center;
    background: "rgba(0,0,0,0.5)";
}

.card {
    background: rgb(46, 49, 59);
}

.img {
    height: auto;
    max-width: 100%;
}
</style>