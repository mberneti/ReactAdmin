import validate from "validate.js";
import _ from 'lodash';

export default function isValid(info, constraints, callback) {
    let result = validate(info, constraints, { fullMessages: false });
    let isValid = result === undefined;
    let kvArray = [];

    if (!isValid)
        _.forEach(result, (value, key) => (kvArray.push([key, value[0]])));

    if (typeof callback !== 'undefined')
        callback(kvArray);

    return result === undefined;
}