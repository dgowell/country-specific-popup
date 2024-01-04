jQuery(document).ready(function($) {
    // Create and display the popup

    const siteURL = "https://www.waterlesstoilets.co.uk";

    function displayPopup() {
        // Create your popup HTML structure dynamically or use a hidden element in your HTML and show it here
        var popupContent = `
        <script type="text/javascript">
	
            function handleClose() {
                document.getElementById("us-popup").style.display = "none";
            }

            function setCookie(cname, cvalue, exhours) {
            const d = new Date();
            d.setTime(d.getTime() + (exhours*60*60*1000));
            let expires = "expires="+ d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            }

            function getCookie(cname) {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(";");
            for(let i = 0; i <ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == " ") {
                c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
                }
            }
            return "";
            }

            setTimeout(function() {
                if (getCookie("_us-popup-displayed") != "true") {
                    document.getElementById("us-popup").style.display = "flex";
                    setCookie("_us-popup-displayed","true",3);

                }
            }, 1000);
            </script>
            <div id="us-popup" class="dialog-widget dialog-lightbox-widget dialog-type-buttons dialog-type-lightbox elementor-popup-modal" style="background-color:#00000073;justify-content: center;align-items: center; display:none;" >
                    <div class="dialog-widget-content dialog-lightbox-widget-content animated">
                        <div class="dialog-message dialog-lightbox-message">
                            <div class="elementor elementor-14885 elementor-location-popup" style="display: block;">
                                <div class="elementor-section-wrap">
                                    <section class="elementor-section elementor-top-section elementor-element elementor-element-042040e elementor-section-full_width elementor-section-height-default elementor-section-height-default">
                                        <div class="elementor-container elementor-column-gap-wider">
                                            <div class="elementor-row">
                                                <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5c8acec">
                                                    <div class="elementor-column-wrap elementor-element-populated">
                                                        <div id="us-popup-container" class="elementor-widget-wrap">
                                                            <div class="elementor-element elementor-element-9de1b3a elementor-widget elementor-widget-heading">
                                                                <div class="elementor-widget-container">
                                                                    <h2 class="elementor-heading-title elementor-size-default">Are you based in the US?</h2>
                                                                </div>
                                                            </div>
                                                            <div class="elementor-element elementor-element-75fdfde elementor-widget elementor-widget-text-editor">
                                                                <div class="elementor-widget-container">
                                                                    <div class="elementor-text-editor elementor-clearfix" style="font-size:1rem">
                                                                        <p dir="auto">Some of our products can be shipped to the US. Please contact us for a shipping quote. We will need your address and the specific product(s) you are interested in.</p>
                                                                        <p dir="auto">Our WooWoo GT and Kazuba product ranges are available in the US.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <section
                                                                class="elementor-section elementor-inner-section elementor-element elementor-element-f2db985 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                                                                <div class="elementor-container elementor-column-gap-default">
                                                                    <div id="us-popup-buttons-row" class="elementor-row">
                                                                        <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-b1660a9">
                                                                            <div
                                                                                class="elementor-column-wrap elementor-element-populated">
                                                                                <div class="elementor-widget-wrap">
                                                                                    <div class="elementor-element elementor-element-8b08232 elementor-align-justify elementor-widget elementor-widget-button">
                                                                                        <div class="elementor-widget-container">
                                                                                            <div class="elementor-button-wrapper">
                                                                                            <a href="${siteURL}/woowoo-gt/"
                                                                                            class="elementor-button-link elementor-button elementor-size-sm"
                                                                                            role="button">
                                                                                            <span
                                                                                                class="elementor-button-content-wrapper">
                                                                                                <span
                                                                                                    class="elementor-button-text">WooWoo GT</span>
                                                                                            </span>
                                                                                        </a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-c2bb0d0">
                                                                            <div
                                                                                class="elementor-column-wrap elementor-element-populated">
                                                                                <div class="elementor-widget-wrap">
                                                                                    <div class="elementor-element elementor-element-d423e52 elementor-align-justify elementor-tablet-align-justify elementor-mobile-align-justify elementor-widget elementor-widget-button">
                                                                                        <div class="elementor-widget-container">
                                                                                            <div class="elementor-button-wrapper">
                                                                                                <a href="${siteURL}/kazuba/"
                                                                                                    class="elementor-button-link elementor-button elementor-size-sm"
                                                                                                    role="button">
                                                                                                    <span
                                                                                                        class="elementor-button-content-wrapper">
                                                                                                        <span
                                                                                                            class="elementor-button-text">Kazuba</span>
                                                                                                    </span>
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-b1660a9">
                                                                            <div
                                                                                class="elementor-column-wrap elementor-element-populated">
                                                                                <div class="elementor-widget-wrap">
                                                                                    <div class="elementor-element elementor-element-8b08232 elementor-align-justify elementor-widget elementor-widget-button">
                                                                                        <div class="elementor-widget-container">
                                                                                            <div class="elementor-button-wrapper">
                                                                                                <a id="dismiss-button" href="" onclick="handleClose()" class="elementor-button-link elementor-button elementor-size-sm">
                                                                                                    <span class="elementor-button-content-wrapper">
                                                                                                        <span class="elementor-button-text">Dismiss</span>
                                                                                                    </span>
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div class="dialog-buttons-wrapper dialog-lightbox-buttons-wrapper"></div>
                        <div class="dialog-close-button dialog-lightbox-close-button" style="display: block;"  onclick="handleClose();"><i class="eicon-close"></i></div>
                    </div>
                </div>`;

        // Append the popup content to the body
        $('body').append(popupContent);

        // Show the popup (you can add your own styling or animation here)
        $('.popup').show();
    }

    // Call the function to display the popup when the DOM is ready
    displayPopup();
});