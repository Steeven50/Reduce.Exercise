function extractValue(arr, key) {
    return arr.map(obj => obj[key]);
}

function vowelCount(str) {
    const vowels = "aeiou";
    const vowelCountObj = {};
    str.toLowerCase().split('').forEach(char => {
        if (vowels.includes(char)) {
            if (!vowelCountObj[char]) {
                vowelCountObj[char] = 1;
            } else {
                vowelCountObj[char]++;
            }
        }
    });
    return vowelCountObj;
}

function addKeyAndValue(arr, key, value) {
    return arr.map(obj => ({...obj, [key]: value}));
}

function partition(arr, callback) {
    return arr.reduce(([pass, fail], elem) => {
        return callback(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]];
    }, [[], []]);
}
