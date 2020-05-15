<?php
/*
 * Template Name: Marzipano
 */

add_filter( 'body_class', 'mes_classes_body' );
function mes_classes_body( $classes ) {
	$classes[] = 'marzipano-page single-scene view-control-buttons';

	return $classes;
}

get_header(); ?>

    <div id="pano"></div>

    <div id="sceneList">
        <ul class="scenes">

            <a href="javascript:void(0)" class="scene" data-id="0-vulture_hide">
                <li class="text">vulture_hide</li>
            </a>

        </ul>
    </div>

    <div id="titleBar">
        <h1 class="sceneName"></h1>
    </div>

    <a href="javascript:void(0)" id="autorotateToggle">
        <img class="icon off" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/marzipano/img/play.png">
        <img class="icon on" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/marzipano/img/pause.png">
    </a>

    <a href="javascript:void(0)" id="fullscreenToggle">
        <img class="icon off" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/marzipano/img/fullscreen.png">
        <img class="icon on" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/marzipano/img/windowed.png">
    </a>

    <a href="javascript:void(0)" id="sceneListToggle">
        <img class="icon off" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/marzipano/img/expand.png">
        <img class="icon on" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/marzipano/img/collapse.png">
    </a>

    <a href="javascript:void(0)" id="viewUp" class="viewControlButton viewControlButton-1">
        <img class="icon" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/marzipano/img/up.png">
    </a>
    <a href="javascript:void(0)" id="viewDown" class="viewControlButton viewControlButton-2">
        <img class="icon" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/marzipano/img/down.png">
    </a>
    <a href="javascript:void(0)" id="viewLeft" class="viewControlButton viewControlButton-3">
        <img class="icon" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/marzipano/img/left.png">
    </a>
    <a href="javascript:void(0)" id="viewRight" class="viewControlButton viewControlButton-4">
        <img class="icon" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/marzipano/img/right.png">
    </a>
    <a href="javascript:void(0)" id="viewIn" class="viewControlButton viewControlButton-5">
        <img class="icon" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/marzipano/img/plus.png">
    </a>
    <a href="javascript:void(0)" id="viewOut" class="viewControlButton viewControlButton-6">
        <img class="icon" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/marzipano/img/minus.png">
    </a>


    <script src="<?php echo get_stylesheet_directory_uri(); ?>/assets/marzipano/vendor/es5-shim.js"></script>
    <script src="<?php echo get_stylesheet_directory_uri(); ?>/assets/marzipano/vendor/eventShim.js"></script>
    <script src="<?php echo get_stylesheet_directory_uri(); ?>/assets/marzipano/vendor/classList.js"></script>
    <script src="<?php echo get_stylesheet_directory_uri(); ?>/assets/marzipano/vendor/requestAnimationFrame.js"></script>
    <script src="<?php echo get_stylesheet_directory_uri(); ?>/assets/marzipano/vendor/screenfull.min.js"></script>
    <script src="<?php echo get_stylesheet_directory_uri(); ?>/assets/marzipano/vendor/bowser.min.js"></script>
    <script src="<?php echo get_stylesheet_directory_uri(); ?>/assets/marzipano/vendor/marzipano.js"></script>

    <script src="<?php echo get_stylesheet_directory_uri(); ?>/assets/marzipano/data.js"></script>
    <script src="<?php echo get_stylesheet_directory_uri(); ?>/assets/marzipano/index.js"></script>

<?php get_footer(); ?>