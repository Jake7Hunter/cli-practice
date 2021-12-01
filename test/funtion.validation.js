const isAmountInvalid = (amount) => {
    return amount === undefined || amount <0
};

const isInitialAmountInvalid = (initialAmount) => {
    return initialAmount === undefined
};

const isTargetAmountInvalid = (targetAmount) => {
    return targetAmount === undefined
};

const currencyTargetInvalid = (targetAmount) => {
    return supportedCurrencies.includes(targetAmount) === false
};

const currencyInitialInvalid = (initialAmount) => {
    return supportedCurrencies.includes(initialAmount) === false
};

const supportedCurrencies = [
    "USD",
    "CAD"
  ];

module.exports = {
    isAmountInvalid,
    isInitialAmountInvalid,
    isTargetAmountInvalid,
    currencyTargetInvalid,
    currencyInitialInvalid,
}