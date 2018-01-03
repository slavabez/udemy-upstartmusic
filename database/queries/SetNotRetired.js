const Artist = require('../models/artist');

/**
 * Sets a group of Artists as not retired
 * @param {array} _ids - An array of the _id's of of artists to update
 * @return {promise} A promise that resolves after the update
 */
module.exports = (_ids) => {

    return Artist.update(
        {
            // Find criteria
            _id: {
                $in: _ids
            }
        },
        {
            // Set
            retired: false
        },
        {
            multi: true
        });

};
