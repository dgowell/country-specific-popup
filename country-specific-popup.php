<?php
/*
Plugin Name: Country Specific Popup
Description: Adds a popup only shown to users from specified countries
Version: 1.2
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
    
    // Log country information
    //error_log('User is located in: ' . $country);
    
    if ($country == 'US') {
        return true;
    }
    return false;
}


// Define the shortcode for displaying the countdown
function country_specific_popup() {

    if ( is_plugin_active( 'woocommerce/woocommerce.php' ) ) {

        if ( inside_us() ) {

            // Enqueue scripts
            enqueue_country_specific_popup_scripts();

        } else {
            error_log('User is not inside the US.');
        }
    } else {
        error_log('WooCommerce is not active.');
    }
}

add_action( 'wp_enqueue_scripts' , 'country_specific_popup' );