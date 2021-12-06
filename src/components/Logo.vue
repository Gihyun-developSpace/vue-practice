<template>
  <RouterLink 
    to="/" 
    class="logo">
    <span class="movie-title">VueMovie</span><span class="com-color">.COM</span>
  </RouterLink>
</template>

<style lang="scss" scoped>
@import "~/scss/main";

.logo {
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  color: $black;
  text-decoration: none;
  &:hover {
    color:$black;
  }
  .movie-title {
    color:#F1C40F;
    font-size: 30px;
  }
  .com-color {
    color: #ECF0F1;
    font-size: 30px;
  }
}
</style>