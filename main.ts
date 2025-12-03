let TEMPERATURA = 0
input.onGesture(Gesture.Shake, function () {
    TEMPERATURA = TEMPERATURA
    basic.showNumber(input.temperature())
    if (TEMPERATURA > 21) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
