def on_button_pressed_a():
    basic.show_string("time for bed")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_string("Bed now ")
    basic.show_leds("""
        . . . . .
        # . . . .
        # . # # #
        # # # # #
        # . . . #
        """)
    basic.pause(700)
    basic.clear_screen()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    for index in range(2):
        music.set_volume(44)
        music.play(music.string_playable("C5 F - G - E G C5 ", 40),
            music.PlaybackMode.UNTIL_DONE)
    for index2 in range(9):
        basic.show_icon(IconNames.DIAMOND)
        basic.pause(500)
        basic.show_icon(IconNames.SMALL_DIAMOND)
        basic.pause(500)
        basic.show_icon(IconNames.DIAMOND)
input.on_button_pressed(Button.B, on_button_pressed_b)
