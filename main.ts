input.onButtonPressed(Button.A, function () {
    lengte = grove.measureInCentimeters(DigitalPin.P0)
    _4digit.show(lengte)
})
input.onButtonPressed(Button.AB, function () {
    let afstand_y = 0
    let afstand_x = 0
    oppervlakte = afstand_x * afstand_y
    _4digit.show(oppervlakte)
})
input.onButtonPressed(Button.B, function () {
    breedte = grove.measureInCentimeters(DigitalPin.P0)
    _4digit.show(breedte)
})
let _4digit: grove.TM1637 = null
let oppervlakte = 0
let breedte = 0
let lengte = 0
lengte = 0
breedte = 0
oppervlakte = 0
_4digit = grove.createDisplay(DigitalPin.P1, DigitalPin.P15)
