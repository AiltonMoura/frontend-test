<template>
  <div id="app">
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      msg: 'Init Project'
    }
  }
}
</script>

<style lang='scss' scoped>
@import '~styles/style';

div {
  text-align: $text-align;
  font-size: $font-size;
  font-family: $font-family;
}

</style>