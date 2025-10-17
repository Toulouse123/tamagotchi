input.onButtonPressed(Button.A, function () {
    knuffel += 5
})
input.onButtonPressed(Button.B, function () {
    if (dood == 0) {
        voeding += 5
    }
    if ((0 as any) == (1 as any)) {
        voeding += 0
    }
})
let dood = 0
dood = 0
let knuffel = 20
let voeding = 20
loops.everyInterval(1000, function () {
    knuffel += -1
    voeding += -1
})
basic.forever(function () {
    if (knuffel > 10 && voeding > 10) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (knuffel > 0 && knuffel < 10 && (voeding > 0 && voeding < 10)) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
    if (knuffel < 0 && voeding < 0) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (dood == 0) {
    	
    }
})
