input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(5)
    basic.showIcon(IconNames.Sad)
})
radio.setGroup(81)
music.playMelody("F A F A F A F A ", 500)
basic.forever(function () {
    if (input.rotation(Rotation.Roll) < -45) {
        radio.sendNumber(3)
        basic.showLeds(`
            . . . . .
            . # . . .
            # # # # #
            . # . . .
            . . . . .
            `)
    } else if (input.rotation(Rotation.Roll) > 45) {
        radio.sendNumber(4)
        basic.showLeds(`
            . . . . .
            . . . # .
            # # # # #
            . . . # .
            . . . . .
            `)
    } else if (input.rotation(Rotation.Pitch) < -45) {
        radio.sendNumber(1)
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (input.rotation(Rotation.Pitch) > 45) {
        radio.sendNumber(2)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            . . # . .
            `)
    } else {
        radio.sendNumber(0)
        basic.showIcon(IconNames.No)
    }
})
