const $ = id => document.getElementById(id)

var d = new Date
let h = d.getHours()
let m = d.getMinutes()
let s = d.getSeconds()
let newTime = `${h} : ${m} : ${s}`
console.log(newTime)

console.log($('Hours').textContent = h)
console.log($('Minutes').textContent = m)
console.log($('Seconds').textContent = s)