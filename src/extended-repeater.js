module.exports = function repeater(str, options) {
    str = String(str);
    let addition;
    options.addition === undefined ? addition = '' : addition = String(options.addition);
    const repeatTimes = options.repeatTimes || 1;
    const separator = options.separator || '+';
    const additionRepeatTimes = options.additionRepeatTimes || 1;
    const additionSeparator = options.additionSeparator || '|';
    const arr = [];
    for (let i = 0; i < repeatTimes; i++) {
        arr.push(str);
        for (let j = 0; j < additionRepeatTimes; j++) {
            arr.push(addition);
            if (j !== additionRepeatTimes - 1) {
                arr.push(additionSeparator);
            }
        }
        if (i !== repeatTimes - 1) {
            arr.push(separator);
        }
    }
    return arr.join('');
};
