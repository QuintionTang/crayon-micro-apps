<template>
    <div id="navapp">
        <a-menu type="primary" mode="horizontal">
            <a-menu-item key="account">
                <router-link to="/account">Account</router-link>
            </a-menu-item>
            <a-menu-item key="products">
                <router-link to="/products">Products</router-link>
            </a-menu-item>
            <a-menu-item key="devpoint">
                <a
                    href="https://www.devpoint.cn"
                    target="_blank"
                    rel="noopener noreferrer"
                    >DevPoint</a
                >
            </a-menu-item>
        </a-menu>
    </div>
</template>

<script>
export default {
    name: "App",
};
</script>

<style>
#navapp {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
