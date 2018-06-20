const getTitle = (dirtyTitle) => {
    var result = dirtyTitle.split('- Youtube')[0].trim();

    // remove parentheses at the end, eg. Artist - Track (Official Music Video), (lyrics), (HQ) etc.
    result = result.replace(/(\[|\()+([^\(\)])+(\]|\))+/gi, '');

    // remove parentheses at the start, eg. (1998) Artist - Track
    result = result.replace(/^(\[|\()+([^\(\)])+(\]|\))+/gi, '');

    // in case there were no parentheses at the end
    result = result.replace(/(Official (.)*Video)+$/gi, '');
    result = result.replace(/lyrics$/gi, '');

    // Remove idiotic .extensions
    result = result.replace(/(\.(mp3|mp4|wmv))+$/gi, '');

    // Make title breathable if needed, eg. Artist-Track -> Artist - Track
    result = result.replace(/([\w]+)-([\w]+)/gi, '$1 - $2');

    // Normalize separator, eg. Artist -- Track -> Artist - Track
    result = result.replace(/([\w]+)--([\w]+)/gi, '$1 - $2');
    result = result.replace(/([\w]+) -- ([\w]+)/gi, '$1 - $2');

    // Replace idiotic separator if needed, eg. Artist // Track -> Artist - Track
    result = result.replace(/([\w]+)\s\/\/\s([\w]+)/gi, '$1 - $2');

    result = result.trim();
    return result;
};

export { getTitle };