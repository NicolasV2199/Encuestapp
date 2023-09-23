<template>
  <nav class="main-navbar">
    <router-link :to="{name: 'survey-list'}">Ver todas las encuestas</router-link> |
    <router-link :to="{name: 'survey-create'}">Crear</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

a{
  text-decoration: none;
  color: #fff;
}
.main-navbar{
  background-color: #735240;
  color: #fff;
  margin-bottom: 2rem;
}

a.router-link-exact-active{
  text-decoration: underline;
}
</style>
