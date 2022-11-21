<template>
  <div class="logo">Cats</div>
  <router-view/>
</template>

<script lang="ts">

</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: content-box;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.logo {
    padding: 15px;
    margin-bottom: 15px;
    display: flex;
    background: rgb(25,58,135);
    background: linear-gradient(260deg, hsl(241, 1%, 33%) 0%, hsl(198, 75%, 14%) 100%) fixed;
    color: #fff;
    font-size: 26px;
}
</style>
