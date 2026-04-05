input.onButtonPressed(Button.A, function () {
    basic.showString("time for bed")
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 2; index++) {
        music.setVolume(21)
        music.play(music.stringPlayable("C5 F C G C E G C5 ", 40), music.PlaybackMode.UntilDone)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Bed now ")
    basic.showLeds(`
        . . . . .
        # . . . .
        # . # # #
        # # # # #
        # . . . #
        `)
    basic.pause(700)
    basic.showIcon(IconNames.Heart)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        for (let index = 0; index < 9; index++) {
            basic.showIcon(IconNames.Diamond)
            basic.pause(500)
            basic.showIcon(IconNames.SmallDiamond)
            basic.pause(500)
            basic.showIcon(IconNames.Diamond)
        }
    }
})
