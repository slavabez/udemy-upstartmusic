const Artist = require('../models/artist');

/**
 * Sets a group of Artists as not retired
 * @param {array} _ids - An array of the _id's of of artists to update
 * @return {promise} A promise that resolves after the update
 */
module.exports = (_ids) => {
    console.log('Clicked');
    return Artist.update(
        {// Find criteria
            _id: {
                $in: _ids
            }
        },
        {
            // Set
            retired: false
        },
        {
            // Enable the multi option so that MongoDB knows to update all not just the first one
            multi: true
        });

};
