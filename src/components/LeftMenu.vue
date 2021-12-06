<template>
  <nav class="side-box">
    <Logo />
  </nav>
</template>

<script>
import Logo from '~/components/Logo'
export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
.side-box {
  padding: 40px 0 0 40px;
  box-sizing: border-box;
  top: 0;
  left: 0;
  position: sticky;
}
</style>