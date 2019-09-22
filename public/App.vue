<template>
  <div id="app" class="container-fluid">
    <div class="row justify-content-md-center">
      <div class="col-6">
        <div id="header">
          <div class="row">
            <div class="col-md-3 col-lg-2">
              <img src="./images/logo_fazenda.png">
            </div>
            <div class="col-md-9 col-lg-10 align-self-end">
              <img src="./images/ranking.png">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
    }
  }
}
</script>

<style lang='scss' scoped>
@import '~styles/style';
@import '~styles/colors';
@import '~styles/dimens';

#app {
  text-align: $text-align;
  font-size: $font-size;
  font-family: $font-family;
};

#header div:nth-child(2) {
  background-color: $secondColor;
  text-align: $textAlignHeader;
  margin-bottom: $marginBottomHeader
}

#header div:nth-child(1) {
  z-index: 1;
}

.container-fluid {
  background-image: url('./images/background.png')
}

#header div:nth-child(2) img{
  margin-right: 20px
}

</style>