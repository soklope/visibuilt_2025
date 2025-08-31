<?php
// This file is generated. Do not modify it manually.
return array(
	'text-image' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'skp-blocks/text-image',
		'version' => '0.1.0',
		'title' => 'Text Image',
		'category' => 'widgets',
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
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'hero',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
