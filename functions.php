<?php

function wpSetup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'wpSetup');

function visibuilt_register_menus() {
    register_nav_menus(
        array(
            'primary_menu' => __( 'Header Menu', 'visibuilt' ),
            'footer_menu'  => __( 'Footer Menu', 'visibuilt' )
        )
    );
}
add_action( 'after_setup_theme', 'visibuilt_register_menus' );

function my_admin_styles() {
    wp_enqueue_style('wp-admin');
}
add_action('admin_enqueue_scripts', 'my_admin_styles');

function script_and_styles_setup() {
    wp_enqueue_style('theme-style', get_stylesheet_uri());
    wp_enqueue_script('main-js', get_template_directory_uri() . '/main.js', NULL, '1.0',true);
}
add_action('wp_enqueue_scripts', 'script_and_styles_setup');

function skp_blocks_hero_block_init() {
	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
		wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
		return;
	}

	if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
		wp_register_block_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
	}
    
	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
	foreach ( array_keys( $manifest_data ) as $block_type ) {
		register_block_type( __DIR__ . "/build/{$block_type}" );
	}
}
add_action( 'init', 'skp_blocks_hero_block_init' );

function mytheme_enqueue_styles() {
    wp_enqueue_style(
        'mytheme-style',
        get_template_directory_uri() . '/assets/css/style.css',
        array(),
        filemtime(get_template_directory() . '/assets/css/style.css') 
    );
}
add_action( 'wp_enqueue_scripts', 'mytheme_enqueue_styles' );


function mytheme_block_editor_styles() {
    wp_enqueue_style(
        'mytheme-editor-style',
        get_template_directory_uri() . '/assets/css/style.css',
        array(),
        filemtime(get_template_directory() . '/assets/css/style.css')
    );
}
add_action( 'enqueue_block_editor_assets', 'mytheme_block_editor_styles' );

