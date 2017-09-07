export default class UnitHelpers {

    constructor(baseFontSize = 16) {
        this.baseFontSize = baseFontSize
    }

    toRem(px) {
        return `${parseFloat(px) / this.baseFontSize}rem`
    }

    toEm(px) {
        return `${parseFloat(px) / this.baseFontSize}em`
    }

    toPx(rem, round = true) {
        const value = parseFloat(rem) * this.baseFontSize

        return round ? `${Math.round(value)}px` : `${value}px`
    }
}
