$(document).ready(function () {

    // bind the click event to #top internal page anchors
    $('a[href*="#top"]').on('click', function (e) {

        // prevent default action and bubbling
        e.preventDefault();
        e.stopPropagation();

        // set target to anchor's "href" attribute
        var target = $(this).attr('href');

        // scroll to each target
        $(target).velocity('scroll', {
            duration: 500,
            offset: -40,
            easing: 'ease-in-out'
        });
    });
});