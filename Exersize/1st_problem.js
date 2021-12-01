// Write a JavaScript program to display the current date, day and time.

var today = new Date()
var day = today.getDay()
var dayList = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

var dd = String(today.getDate()).padStart(2, '0')
var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
var yyyy = today.getFullYear()

date = mm + '/' + dd + '/' + yyyy
console.log('Today is ' + date + ', ' + dayList[day])

var hour = today.getHours()
var minute = today.getMinutes()
var second = today.getSeconds()

var prepand = hour >= 12 ? 'PM' : 'AM'

hour = hour >= 12 ? hour - 12 : hour

if (hour === 0 && prepand === 'PM') {
  if (minute === 0 && second === 0) {
    hour = 12
    prepand = 'noon'
  } else {
    hour = 12
    prepand = 'PM'
  }
}

console.log(
  'Current time is ' +
    hour +
    ' ' +
    prepand +
    ' ' +
    minute +
    ' minute ' +
    second +
    ' second'
)
