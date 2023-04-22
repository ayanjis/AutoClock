const $ = id => document.getElementById(id)

function updateTime() {
    let d = new Date
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()
    let day = d.getDay()
    let mont = d.getMonth()
    // console.log(mont)
    
    if (h < 10) {
        h = `0${m}` 
    }
    if (m < 10) {
        m = `0${m}` 
    }
    if (s < 10) {
        s = `0${s}` 
    }

    // let t_str = h + ":" + m + " ";
    // if (h > 11) {
    //     t_str += "PM";
    // } else {
    //     t_str += "AM";
    // }

    // let newTime = `${h} : ${m} : ${s}`
    // console.log(newTime) 

    $('Hours').textContent = h
    $('Minutes').textContent = m
    $('Seconds').textContent = s

}
setInterval(updateTime, 1000);