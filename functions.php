<?php

function hello_elementor_child_enqueue_scripts()
{
    wp_enqueue_style('hello-elementor-child', get_stylesheet_directory_uri() . '/style.css', ['hello-elementor'], '1.0.0');
}

require_once 'inc/acf-options.php';

require_once 'inc/enqueue-files.php';