module.exports = {
    EMAIL: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    PASSWORD: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
    PRICE: /^\d+(,\d{1,2})?$/,
    YEAR: /^(19|20)\d{2}$/
};