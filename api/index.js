import ajax from './ajax.js'

export default {
  login(param) {
    return ajax.post('/login/getOpenidKey', param)
  }
}
