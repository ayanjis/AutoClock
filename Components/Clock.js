class Clock  {
    constructor() {
        //date......
        this.newClock = document.createElement('div')
        this.newClock.classList.add('Clock')
        document.body.appendChild(this.newClock)
        
        this.newDateContainer = document.createElement('div')
        this.newDateContainer.classList.add('TimeContainer', 'Date')
        this.newClock.appendChild(this.newDateContainer)
        
        this.newDateLabel = document.createElement('samp')
        this.newDateLabel.classList.add('Date')
        this.newDateLabel.setAttribute('id', 'Date')
        this.newDateLabel.textContent = 'Sat,Apr 22,23'
        this.newDateContainer.appendChild(this.newDateLabel)
        
        //Hour.....
        this.newHourContainer = document.createElement('div')
        this.newHourContainer.classList.add('TimeContainer', 'Time_Hours')
        this.newClock.appendChild(this.newHourContainer)
        
        this.newHour = document.createElement('div')
        this.newHour.classList.add('Time', 'Hours')
        this.newHour.setAttribute('id', 'Hours')
        this.newHour.textContent = '12'
        this.newHourContainer.appendChild(this.newHour)
        
        this.newHourLabel = document.createElement('samp')
        this.newHourLabel.classList.add('Text')
        this.newHourLabel.textContent = 'hour'
        this.newHourContainer.appendChild(this.newHourLabel)
         
        //Minute.....
        this.newMinuteContainer = document.createElement('div')
        this.newMinuteContainer.classList.add('TimeContainer', 'Time_Minutes')
        this.newClock.appendChild(this.newMinuteContainer)
        
        this.newMinute = document.createElement('div')
        this.newMinute.classList.add('Time', 'Minutes')
        this.newMinute.setAttribute('id', 'Minutes')
        this.newMinute.textContent = '12'
        this.newMinuteContainer.appendChild(this.newMinute)
        
        this.newMinuteLabel = document.createElement('samp')
        this.newMinuteLabel.classList.add('Text')
        this.newMinuteLabel.textContent = 'Minute'
        this.newMinuteContainer.appendChild(this.newMinuteLabel)
        
        //Second.....
        this.newSecondContainer = document.createElement('div')
        this.newSecondContainer.classList.add('TimeContainer', 'Time_Seconds')
        this.newClock.appendChild(this.newSecondContainer)
        
        this.newSecond = document.createElement('div')
        this.newSecond.classList.add('Time', 'Seconds')
        this.newSecond.setAttribute('id', 'Seconds')
        this.newSecond.textContent = '12'
        this.newSecondContainer.appendChild(this.newSecond)
        
        this.newSecondLabel = document.createElement('samp')
        this.newSecondLabel.classList.add('Text')
        this.newSecondLabel.textContent = 'Second'
        this.newSecondContainer.appendChild(this.newSecondLabel)
        
    }
}

let C1 = new Clock