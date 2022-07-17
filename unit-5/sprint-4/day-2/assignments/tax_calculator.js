


const taxCalci = (amount) => {

    if (amount >= 1000000) {
        return 125000 + (amount - 1000000) * .3;
    }

    if (amount >= 500000) {
        return 25000 + (amount - 500000) * .2;
    }

    if (amount >= 250000) {
        return (amount - 250000) * .1;
    }

    if (amount < 250000) {
        return 0;
    }

}

// console.log(taxCalci(1000000))

module.exports = taxCalci;