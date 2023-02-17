let counter = 0
let display: TM1650Display = new TM1650Display(DigitalPin.P1, DigitalPin.P0)
display.displayOn(5)
display.showHex(0xCAFE)
basic.forever(function () {
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    display.showInteger(counter)
counter += 1
    if (counter > 9999) {
        counter = 0
    }
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    display.showInteger(counter)
counter += 1
    if (counter > 9999) {
        counter = 0
    }
})
basic.forever(function () {
	
})
