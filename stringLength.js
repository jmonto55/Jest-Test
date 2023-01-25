const stringLength = (string) => {
    if(string.length < 1 || string.length > 10) return 'Size error';
    return string.length;
};



module.exports = stringLength;