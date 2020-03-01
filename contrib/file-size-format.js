function bytesToKb(bytes) {
    return bytes / 1024;
}

function bytesToMb(bytes) {
    return bytesToKb(bytes) / 1024;
}

function bytesToGb(bytes) {
    return bytesToMb(bytes) / 1024;
}

const KB = 1024;
const MB = KB * 1024;
const GB = MB * 1024;

const converters = {
    KB: bytesToKb,
    MB: bytesToMb,
    GB: bytesToGb
};

const units = {
    '': 'Б',
    KB: 'КБ',
    MB: 'МБ',
    GB: 'ГБ'
};

/**
 * @param {number} bytes
 * @returns {string}
 */
module.exports = function(bytes) {
    let converter = '';

    if (bytes > KB) {
        converter = 'KB';
    }

    if (bytes > MB) {
        converter = 'MB';
    }

    if (bytes > GB) {
        converter = 'GB';
    }

    const unit = units[converter];
    if (converter === '') {
        return `${bytes} ${unit}`;
    }

    return `${converters[converter](bytes)} ${unit}`;
};
