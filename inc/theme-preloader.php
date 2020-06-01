<?php

/**
 * Add preloader markup in page structure
 */
function real_add_loader() {
	?><div id="pre-loader" class="preloader-wrapper">
		<div class="preloader">
			<img src="/wp-content/themes/hello-theme-child-master/assets/loader.gif">
		</div>
	</div><?php
}

add_action( 'wp_body_open', 'real_add_loader' );


/**
 * Add preloader-active class to HTML parent tag
 *
 * @param $output
 * @param $doctype
 *
 * @return string
 */
function add_no_js_class_to_html_tag( $output, $doctype ) {
	if ( 'html' !== $doctype ) {
		return $output;
	}

	$output .= ' class="preloader-active"';

	return $output;
}

add_filter( 'language_attributes', 'add_no_js_class_to_html_tag', 10, 2 );