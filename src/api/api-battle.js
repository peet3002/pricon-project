import axios from 'axios'

const funcs = {
  getBattleTeam(param) {
    return new Promise((resolve, reject) => {
      axios.get(`http://adisonmeesin.xyz/api/battle.php${param}`)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}

export default funcs
