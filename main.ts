input.onButtonPressed(Button.A, function () {
    if (secondes >= 0) {
        secondes += 10
        _4digit.show(secondes)
    }
})
input.onGesture(Gesture.Shake, function () {
    while (secondes > 0) {
        _4digit.show(secondes)
        basic.pause(1000)
        secondes += 0 - 1
    }
    _4digit.show(0)
    if (secondes == 0) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.UntilDone)
    }
})
input.onButtonPressed(Button.AB, function () {
    secondes = 0
    _4digit.show(secondes)
})
input.onButtonPressed(Button.B, function () {
    if (secondes >= 0) {
        secondes += 1
        _4digit.show(secondes)
    }
})
let _4digit: grove.TM1637 = null
let secondes = 0
secondes = 0
_4digit = grove.createDisplay(DigitalPin.P0, DigitalPin.P14)
