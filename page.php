<?php get_header(); ?>

<?php $parent_id = wp_get_post_parent_id( get_the_ID() );?>
<?php $is_contact_page = is_page( 'contact' ); ?>

<main id="main" class="<?= $is_contact_page ? 'page-main page-main--contact' : 'page-main' ?>">
    <?php if ( ! is_front_page() ) : ?>
        <?php if ( $parent_id ) : ?>

            <div class="page-heading page-container">
                <h1 class="page-heading__title">
                    <?php echo get_the_title( $parent_id ); ?>
                </h1>
                <hr class="page-heading__hr">
                <h3 class="page-heading__sub-title"><?php the_title(); ?></h3>
            </div>
            
            <?php else : ?>
                
                <div class="page-heading page-container">
                    <h1 class="<?= $is_contact_page ? 'page-heading__title page-heading__title--contact' : 'page-heading__title' ?>"><?php the_title(); ?></h1>
                    <hr class="<?= $is_contact_page ? 'page-heading__hr page-heading__hr--contact' : 'page-heading__hr' ?>">
                    <span class="<?= $is_contact_page ? 'page-heading__icon page-heading__icon--contact' : 'page-heading__icon' ?>"></span>
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
