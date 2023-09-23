<template>
  <nav class="main-navbar">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="25" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer" @click="$router.back()">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
    </svg>
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
  display: flex;
  gap: 1rem;
  justify-content: center;
}

a.router-link-exact-active{
  text-decoration: underline;
}
</style>
