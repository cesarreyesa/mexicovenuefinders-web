
var mvf = {};

mvf.setupHome = function () {
    $('form.search-form button').on('click', function (event) {
        event.preventDefault();
        var destinationId = $('#destinations').val();
        var venueTypes = $('#venueTypes').val();
        document.location.href = '/search-results?d=' + destinationId + '&vt=' + venueTypes;
    });
};