import 'whatwg-fetch'

const RankingService = {
  find () {
    return new Promise((resolve, reject) => {
      window.fetch('./public/fazenda.json').then(response => {
        var contentType = response.headers.get("content-type");
        if(contentType && contentType.indexOf("application/json") !== -1) {
          response.json().then((json) => {
            resolve(json)
          });
        } else {
          reject(new Error('Erro na requisição'));
        }
      })
    })
  },

  calculate (participante) {
    let total = parseFloat(participante.positive) + parseFloat(participante.negative);
    if (!isNaN(total)) {
      participante.positive = (parseFloat(participante.positive) / total * 100).toFixed()
      participante.negative = (parseFloat(participante.negative) / total * 100).toFixed()
    } else {
      participante.positive = 0;
      participante.negative = 0;
    }
    return participante;
  }
}

export default RankingService;