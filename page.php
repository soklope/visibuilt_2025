<?php get_header(); ?>

<?php $parent_id = wp_get_post_parent_id( get_the_ID() );?>

<main id="main" class="site-main">
    <?php if ( ! is_front_page() ) : ?>
        <?php if ( $parent_id ) : ?>

            <div class="page-heading page-container">
                <h1 class="page-heading__title">
                    <?php echo get_the_title( $parent_id ); ?>
                </h1>
                <hr>
                <h3 class="page-heading__sub-title"><?php the_title(); ?></h3>
            </div>
            
            <?php else : ?>
                
                <div class="page-heading page-container">
                    <h1 class="page-heading__title"><?php the_title(); ?></h1>
                    <hr>
                    <span class="page-heading__icon"></span>
                </div>

        <?php endif; ?>

        
    <?php endif; ?>

    <?php 
    if ( have_posts() ) : 
        while ( have_posts() ) : the_post(); 
            the_content();
        endwhile; 
    endif; 
    ?>
</main>

<?php get_footer(); ?>
