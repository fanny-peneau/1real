<?php

if( function_exists('acf_add_options_page') ) {
    acf_add_options_page();
}

add_action( 'wp_enqueue_scripts', 'hello_elementor_child_enqueue_scripts' );