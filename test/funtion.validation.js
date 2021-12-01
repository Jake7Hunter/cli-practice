const isAmountInvalid = (amount) => {
    return amount === undefined || amount <0
};

const isInitialAmountInvalid = (initialAmount) => {
    return initialAmount === undefined
};

const isTargetAmountInvalid = (targetAmount) => {
    return targetAmount === undefined
};

module.exports = {
    isAmountInvalid,
    isInitialAmountInvalid,
    isTargetAmountInvalid,
}