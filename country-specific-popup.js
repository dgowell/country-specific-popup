jQuery(document).ready(function($) {
    // Create and display the popup
    function displayPopup() {
        // Create your popup HTML structure dynamically or use a hidden element in your HTML and show it here
        var popupContent = '<div class="popup">Your Popup Content Here</div>';

        // Append the popup content to the body
        $('body').append(popupContent);

        // Show the popup (you can add your own styling or animation here)
        $('.popup').show();
    }

    // Call the function to display the popup when the DOM is ready
    displayPopup();
});