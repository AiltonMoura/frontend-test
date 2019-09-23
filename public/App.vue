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
        <div id="ranking">
          <div class="row" v-for="(participante, index) in participantes" :key="index">
            <div class="col-md-3 col-lg-2">
              <img :src="participante.picture" width="70px" height="70px"/>
            </div>
            <div class="col-md-9 col-lg-10">
              <p>{{ participante.name }}</p>
              <p>{{ participante.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RankingService from './javascripts/services/RankingService'

export default {
  name: 'app',

  data () {
    return {
      participantes: []
    }
  },

created () {
    RankingService.find()
      .then(response => {
        this.participantes = response.data
      })
      .catch(error => {
        console.error(error);
      })
  }
}
</script>

<style lang='scss' scoped>
@import '~styles/style';
@import '~styles/colors';
@import '~styles/dimens';

#app {
  font-family: $font-family;
};

.container-fluid {
  background-image: url('./images/background.png')
}

#header div:nth-child(2) {
  background-color: $secondColor;
  text-align: $textAlignHeader;
  margin-bottom: $marginBottomHeader
}

#header div:nth-child(1) {
  z-index: 1;
}

#header div:nth-child(2) img{
  margin-right: marginImageHeader;
  padding: 15px 0
}

#ranking .row{
  background-color: $secondColor;
  padding: $rankRowPadding
}

#ranking .row div:nth-child(2) {
  padding-top: $rankDivPadding;
}

#ranking .row:nth-child(2){
  background-color: $primaryColor
}

#ranking img {
  border-radius: 50%;
  border: $borderRadius $primaryColor
}

#ranking p:nth-child(1){
  font-size: $nameSize;
  color: $primaryColor;
  font-weight: $bold;
  margin-bottom: $marginBottomName
}

#ranking p:nth-child(2){
  font-size: $descriptionSize;
  color: $thirdColor;
  font-weight: $bold;
  margin-top: $marginTopDescription
}

</style>