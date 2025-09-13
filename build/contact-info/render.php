<?php
    $heading = isset( $attributes['heading'] ) ? $attributes['heading'] : '';
    $content = isset( $attributes['content'] ) ? $attributes['content'] : '';
    $margin  = isset( $attributes['marginSize'] ) ? $attributes['marginSize'] : 'm';

    $classes = 'skp-contact-info page-container skp-margin-' . esc_attr( $margin );
    $wrapper_attributes = get_block_wrapper_attributes( [ 'class' => $classes ] );
?>

<div <?php echo $wrapper_attributes; ?>>
    <?php if ( $heading ) : ?>
        <h2 class="skp-contact-info__heading"><?php echo $heading; ?></h2>
    <?php endif; ?>

    <?php if ( $content ) : ?>
        <p class="skp-contact-info__text"><?php echo $content; ?></p>
    <?php endif; ?>
</div>
