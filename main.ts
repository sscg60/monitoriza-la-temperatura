let TEMPERATURA = 0
input.onGesture(Gesture.Shake, function () {
    TEMPERATURA = TEMPERATURA
    basic.showNumber(input.temperature())
})
