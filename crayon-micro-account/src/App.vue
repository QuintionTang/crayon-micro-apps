<template>
    <div>
        <Account />
    </div>
</template>

<script>
import Account from "./components/Account.vue";

export default {
    name: "App",
    components: {
        Account,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
