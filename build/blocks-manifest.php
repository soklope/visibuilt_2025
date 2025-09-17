<?php
// This file is generated. Do not modify it manually.
return array(
	'contact-info' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'skp-blocks/contact-info',
		'version' => '0.1.0',
		'title' => 'Contact Info',
		'category' => 'skp-blocks',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'heading' => array(
				'type' => 'string',
				'default' => 'Your Heading Here'
			),
			'content' => array(
				'type' => 'string',
				'default' => 'Your content here...'
			),
			'marginSize' => array(
				'type' => 'string',
				'default' => 'm'
			)
		),
		'textdomain' => 'skp-theme',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'project-description' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'skp-blocks/project-description',
		'version' => '0.1.0',
		'title' => 'Project description',
		'category' => 'skp-blocks',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'innerBlocks' => true
		),
		'textdomain' => 'skp-theme',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'tagline' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'skp-blocks/tagline',
		'version' => '0.1.0',
		'title' => 'tagline',
		'category' => 'skp-blocks',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'taglineText' => array(
				'type' => 'string',
				'default' => 'Tagline text here'
			)
		),
		'textdomain' => 'skp-theme',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
