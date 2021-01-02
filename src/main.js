const {mult , math, c} = require("./js/mathUtils")

console.log(mult(50,50))
console.log(math(365,20))
console.log(c(3,2))
require("./css/sty.css")
require("./css/le.less")
import Vue from "vue"
// import App from "./js/App"
import App from "./js/App"
new Vue({
  el:"#app",
  template : "<App/>",
  components :{
    App
  }
})