<?php

function hello_elementor_child_enqueue_scripts() {
	wp_enqueue_style( 'hello-elementor-child', get_stylesheet_directory_uri() . '/style.css', [ 'hello-elementor' ], '1.0.0' );
}

function wpdocs_scripts()
{
    if (is_front_page()):
        wp_enqueue_script('patch', get_stylesheet_directory_uri() . '/js/patch.js');
    endif;
	wp_enqueue_script('preloader', get_stylesheet_directory_uri() . '/js/preloader.js', [], time(), true);
    wp_enqueue_script('app', get_stylesheet_directory_uri() . '/assets/js/app.js', [], time(), true);
    wp_enqueue_style('app', get_stylesheet_directory_uri() . '/assets/css/app.css', [], time());
}

add_action('wp_enqueue_scripts', 'wpdocs_scripts');