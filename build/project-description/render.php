<?php
/**
 * Server-side rendering of the Project Description block.
 *
 * @param array  $attributes The block attributes.
 * @param string $content    The inner blocks content.
 */

?>

<div <?php echo get_block_wrapper_attributes( [ 'class' => 'skp-project-description' ] ); ?>>
	<?php
		// Output inner blocks
		echo $content;
	?>
</div>
