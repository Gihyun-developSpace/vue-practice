<template>
  <div class="container">
  <h1>
    <span class="title-color">OPEN API</span><br />
    <span class="sub-color">THE MOVIE<br/> SEARCH DATABASE</span>
  </h1>

  <p>
    VueMovie에 오신 것을 환영합니다! VueMovie에서는 영화를 간편하게 찾아볼 수 있습니다!
  </p>
  </div>
</template>

<style lang="scss" scoped>
@import "~/scss/main";
.container {
  padding-top:40px;
  text-align: center;
}
h1 {
  line-height: 1.2;
  font-family: "Oswald", sans-serif;
  font-size: 80px;
  .title-color {
    color: #F1C40F;
  }
  .sub-color {
    color: #ECF0F1;
  }
}
p {
  margin: 30px 0;
  color: #ECF0F1;
}
</style>