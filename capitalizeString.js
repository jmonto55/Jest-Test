const capitalizeString = (str) => {
    let string = str.charAt(0).toUpperCase() + str.slice(1);
    return string;
};

module.exports = capitalizeString;