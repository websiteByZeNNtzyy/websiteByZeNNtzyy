// smooth-scroll.js

// Smooth scroll functionality
$(document).ready(function() {
    // Select all links with hashes
    $('a[href*="#"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/\#$/, '') === 
                this.pathname.replace(/\#$/, '') 
                && location.hostname === this.hostname
            ) {
                // Find the target
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a target exist?
                if (target.length) {
                    // Prevent default anchor click behavior
                    event.preventDefault();
                    // Animate
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Add hash to URL when done
                        window.location.hash = target.selector;
                    });
                }
            }
        });
});

// Interactive Features
$(document).ready(function() {
    // Show a message when a button is clicked
    $('#interactive-button').click(function() {
        alert('Button clicked!');
    });
});