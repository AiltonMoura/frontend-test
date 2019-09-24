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
    let total = participante.positive + participante.negative;
    console.log(total);
    participante.positive = (participante.positive / total * 100).toFixed()
    participante.negative = (participante.negative / total * 100).toFixed()
    return participante;
  }
}

export default RankingService;