const isAmountInvalid = (amount) => {
    return amount === undefined || amount <0
};

const isInitialAmountInvalid = (initialAmount) => {
    return initialAmount === undefined
};

module.exports = {
    isAmountInvalid,
    isInitialAmountInvalid,
}