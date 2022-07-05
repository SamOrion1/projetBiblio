<template>
  <div id="app">
    <nav>
      <h1>Projet Bibliothèque</h1>
      <router-link to="/">Home</router-link> |
      <router-link to="/livre">Livre</router-link> |
      <router-link to="/personne">Personne</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
