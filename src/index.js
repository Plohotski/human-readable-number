module.exports = function toReadable(number) {
    let readableNumber = ''
    const one = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const ten = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    const tenNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    if (number === 0) {
        return one[0]
    }

    if (Math.trunc(number / 100))
        readableNumber = one[Math.trunc(number / 100)] + ' hundred'

    if ((number % 100 < 20) && (number % 100 > 9)) {
        if (readableNumber != '')
            readableNumber = readableNumber + ' '
        return readableNumber + tenNineteen[number % 10]
    }

    if (number % 100 > 10) {
        if (readableNumber != '')
            readableNumber = readableNumber + ' '
        readableNumber = readableNumber + ten[(number % 100 - number % 10) / 10]
    }

    if (number % 10) {
        if (readableNumber != '')
            readableNumber = readableNumber + ' '
        readableNumber = readableNumber + one[number % 10]
    }
    return readableNumber;
}