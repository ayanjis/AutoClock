const $ = id => document.getElementById(id)
const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']


function updateTime() {
    let d = new Date
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()
    let day = d.getDay()
    let date = d.getDate()
    let month = d.getMonth()
    let year = d.getFullYear()
    let twoDigitYear = year.toString().substr(-2);

    let newDay = dayNames[day];
    let newMonth = monthNames[month];
    let newDate = `${newDay},${newMonth} ${date},${twoDigitYear}`



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

    $("Date").textContent = newDate
    $('Hours').textContent = h
    $('Minutes').textContent = m
    $('Seconds').textContent = s

}
setInterval(updateTime, 1000);