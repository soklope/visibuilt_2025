<?php
	$heading   = $attributes['heading'] ?? '';
	$content   = $attributes['content'] ?? '';
	$image_url = $attributes['imageUrl'] ?? '';
?>

<div class="wp-block-skp-blocks-hero page-container" <?php echo get_block_wrapper_attributes(); ?>>
    <?php if ( $heading ) : ?>
        <h2><?php echo esc_html( $heading ); ?></h2>
    <?php endif; ?>

    <?php if ( $content ) : ?>
        <p><?php echo esc_html( $content ); ?></p>
    <?php endif; ?>

    <?php if ( $image_url ) : ?>
        <img src="<?php echo esc_url( $image_url ); ?>" alt="">
    <?php endif; ?>
</div>
