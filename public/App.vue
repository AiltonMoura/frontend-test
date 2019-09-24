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
    <div class="row justify-content-md-center">
      <div class="col-6">
        <div id="ranking">
          <div class="row rowInactive"
            v-for="(participante, index) in participantes" :key="index"
            :class="{rowActive: index === styleActive}"
            @mouseover="selectItem(index), show(index)" @mouseout="styleActive = false, open = false">
            <div class="col-md-3 col-lg-2">
              <img width="70px" height="70px"
              class="imgInactive"
              :src="participante.picture" 
              :class="{imgActive: index === styleActive}" />
              <div class="position"><span class="numberPosition">{{ index + 1 }}</span></div>
            </div>
            <div class="col-md-9 col-lg-10">
              <p class="nameInactive"
              :class="{nameActive: index === styleActive}" >
              {{ participante.name }}
              </p>
              <p class="descriptionInactive"
              :class="{descriptionActive: index === styleActive}">
              {{ participante.description }}
              </p>
              <div id="points" v-show="index === open">
                <table>
                  <thead>
                    <th>GOSTAM</th>
                    <th>NÃO GOSTAM</th>
                  </thead>
                  <tbody>
                    <td>
                      {{ participante.positive + '%'}}
                    </td>
                    <td>
                      {{participante.negative + '%'}}
                    </td>
                  </tbody>
                </table>
              </div>
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
      participantes: [],
      styleActive: false,
      open: false
    }
  },

created () {
    RankingService.find()
      .then(response => {
        let participantesMap = response.data.map(participante => {
          return RankingService.calculate(participante)
        })
        this.participantes = this.order(participantesMap);
      })
      .catch(error => {
        console.error(error);
      })
  },
  
  methods: {
    order (participantes) {
      return participantes.sort(function (a, b) {
        if (a.positive < b.positive) {
          return 1;
        }
        if (a.positive > b.positive) {
          return -1;
        }
        return 0;
      });
    },

    selectItem(i) {
      this.styleActive = i;
    },
    show(i) {
      this.open = i;
    },
  },
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
  background-image: url('./images/background.png').
  height: 100%;
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
  margin-right: $marginImageHeader;
  padding: $paddingImageHeader
}

#ranking .row{
  padding: $rankRowPadding
}

.rowInactive {
  background-color: $secondColor;
}

.rowActive {
  background-color: $primaryColor;
}

#ranking .row div:nth-child(2) {
  padding-top: $rankDivPadding;
}

.imgInactive {
  border-radius: $radius;
  border: $borderRadius $primaryColor;
  float: $flotl
}

.imgActive {
  border-radius: $radius;
  border: $borderRadius $secondColor;
  float: $flotl;
}

#ranking p:nth-child(1) {
  font-size: $nameSize;
  font-weight: $bold;
  margin-bottom: $marginBottomName
}
.nameInactive {
  color: $primaryColor;
}
.nameActive {
  color: $secondColor;
}

#ranking p:nth-child(2){
  font-size: $descriptionSize;
  font-weight: $bold;
  margin-top: $marginTopDescription;
  float: $flotl;
}
.descriptionInactive {
  color: $thirdColor;
}
.descriptionActive {
  color: $colorBlack;
}

#points {
  float: $flotr;
  margin-right: -190px;
  margin-top: -27px;
  color: $secondColor
}

#points thead {
  background-color: $primaryColor
}

#points th {
  font-size: 10px;
  text-align: $alignCenter;
  padding: 2px 8px;
}

#points td {
  font-size: 20px;
  text-align: $alignCenter;
  padding: 2px 8px;
  color: $thirdColor;
  background-color: $secondColor;
  font-weight: $bold;
  border-right: $border $colorBlack;

}

#points th:nth-child(1) {
  border-right: $border $colorBlack;
}

.position {
  width: 22px;
  height: 22px;
  border-radius: 15px;
  border: 2px solid $thirdColor;
  text-align: $alignCenter;
  float: $flotl;
  margin-left: 47px;
  z-index: 2;
  position: absolute;
  margin-top: 50px;
  background-color: $secondColor
}

.numberPosition {
  margin-top: -13px;
  float: $flotl;
  margin-left: 6px;
  font-size: 14px;
  font-weight: $bold;
  color: $grey
}
</style>
