input.onButtonPressed(Button.A, function () {
    lengte = grove.measureInCentimeters(DigitalPin.P0)
    display.show(lengte)
})
input.onButtonPressed(Button.AB, function () {
    oppervlakte = lengte * breedte
    display.show(oppervlakte)
})
input.onButtonPressed(Button.B, function () {
    breedte = grove.measureInCentimeters(DigitalPin.P0)
    display.show(breedte)
})
let display: grove.TM1637 = null
let oppervlakte = 0
let breedte = 0
let lengte = 0
lengte = 0
breedte = 0
oppervlakte = 0
display = grove.createDisplay(DigitalPin.P1, DigitalPin.P15)
