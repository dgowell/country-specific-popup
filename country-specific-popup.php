<?php
/*
Plugin Name: Country Specific Popup
Description: Adds a popup only shown to users from specified countries
Version: 1.0
Author: TapaCode 
*/

// Enqueue necessary scripts and styles
function enqueue_country_specific_popup_scripts() {
    wp_enqueue_script('country-specific-popup-script', plugins_url('country-specific-popup.js', __FILE__), array('jquery'), '1.2', true);
    wp_enqueue_style('country-specific-popup-style', plugins_url('country-specific-popup.css', __FILE__), array(), '1.2', 'all');
}

function inside_us(){
	$location = WC_Geolocation::geolocate_ip();
	$country = $location['country'];
	if ($country == 'MX') {
		return false;
	}
	return true;
}


// Define the shortcode for displaying the countdown
function country_specific_popup() {
    if ( is_plugin_active( 'woocommerce/woocommerce.php' ) ) {
        // WooCommerce is active
            if ( inside_us() ) {
                // User is from the United States (US)
                echo "bigsbyo";
                enqueue_country_specific_popup_scripts();
            }
    }
}
add_action( 'wp_footer' , 'country_specific_popup' );
