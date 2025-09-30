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
            'footer_menu'  => __( 'Footer Menu', 'visibuilt' ),
            'legal_menu'   => __( 'Legal Menu', 'visibuilt' )
        )
    );
}
add_action( 'after_setup_theme', 'visibuilt_register_menus' );





function my_admin_styles() {
    wp_enqueue_style('wp-admin');
}
add_action('admin_enqueue_scripts', 'my_admin_styles');





function script_setup() {
    wp_enqueue_script(
        'main-js',
        get_template_directory_uri() . '/main.js',
        array(),
        filemtime(get_template_directory() . '/main.js'),
        true
    );

    foreach (glob(get_template_directory() . '/assets/js/*.js') as $file) {
        wp_enqueue_script(
            basename($file, '.js'), 
            get_template_directory_uri() . '/assets/js/' . basename($file), // URL
            array(), 
            filemtime($file), 
            true 
        );
    }
}
add_action('wp_enqueue_scripts', 'script_setup');





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
    $style_css = get_template_directory() . '/assets/css/style.css';

    wp_enqueue_style(
        'mytheme-style',
        get_template_directory_uri() . '/assets/css/style.css',
        array(),
        filemtime($style_css)
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





function mytheme_setup() {
    add_theme_support( 'custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ) );

    add_theme_support( 'editor-styles' );

    add_editor_style( 'editor-style.css' );
    
}
add_action( 'after_setup_theme', 'mytheme_setup' );





function visibuilt_customize_social( $wp_customize ) {
    $wp_customize->add_section( 'visibuilt_social_links', array(
        'title'    => __( 'Social Links', 'visibuilt' ),
        'priority' => 170,
    ) );

    // LinkedIn
    $wp_customize->add_setting( 'visibuilt_linkedin_url' );
    $wp_customize->add_control( 'visibuilt_linkedin_url', array(
        'label'   => __( 'LinkedIn URL', 'visibuilt' ),
        'section' => 'visibuilt_social_links',
        'type'    => 'url',
    ) );

    // Instagram
    $wp_customize->add_setting( 'visibuilt_instagram_url' );
    $wp_customize->add_control( 'visibuilt_instagram_url', array(
        'label'   => __( 'Instagram URL', 'visibuilt' ),
        'section' => 'visibuilt_social_links',
        'type'    => 'url',
    ) );
}
add_action( 'customize_register', 'visibuilt_customize_social' );





function skp_register_block_category( $categories ) {
    return array_merge(
        [
            [
                'slug'  => 'skp-blocks',
                'title' => __( 'SKP Blocks', 'skp-theme' ),
                'icon'  => 'smiley',
            ],
        ],
        $categories
    );
}
add_filter( 'block_categories_all', 'skp_register_block_category', 10, 2 );






function add_page_container_to_blocks( $block_content, $block ) {
    $targets = [ 'core/columns', 'core/gallery', 'core/query', 'core/buttons' ];

    if ( in_array( $block['blockName'], $targets, true ) ) {
        $slug = str_replace( 'core/', '', $block['blockName'] );

        $block_content = str_replace(
            "wp-block-{$slug}",
            "wp-block-{$slug} page-container",
            $block_content
        );
    }

    return $block_content;
}
add_filter( 'render_block', 'add_page_container_to_blocks', 10, 2 );





function mytheme_set_default_image_aspect_ratio() {
    wp_add_inline_script(
        'wp-blocks',
        "
        wp.hooks.addFilter(
            'blocks.registerBlockType',
            'mytheme/set-default-image-aspect-ratio',
            function( settings, name ) {
                if ( name === 'core/image' ) {
                    settings.attributes = settings.attributes || {};
                    settings.attributes.aspectRatio = {
                        type: 'string',
                        default: '9/16' // 👈 change this to your desired default
                    };
                }
                return settings;
            }
        );
        "
    );
}
add_action( 'enqueue_block_editor_assets', 'mytheme_set_default_image_aspect_ratio' );





function mytheme_editor_scripts() {
    wp_enqueue_script(
        'mytheme-block-margin-control',
        get_template_directory_uri() . '/assets/js/block-margin-control.js',
        array(
            'wp-blocks',       // for registerBlockType
            'wp-element',      // for createElement, Fragment
            'wp-components',   // for ToolbarGroup, DropdownMenu
            'wp-block-editor', // for BlockControls
            'wp-compose',      // for createHigherOrderComponent
            'wp-hooks'         // for addFilter
        ),
        filemtime( get_template_directory() . '/assets/js/block-margin-control.js' ),
        true
    );
}
add_action( 'enqueue_block_editor_assets', 'mytheme_editor_scripts' );

