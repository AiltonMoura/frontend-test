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
  }
}

export default RankingService;