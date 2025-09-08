<?php get_header(); ?>

<main id="main" class="site-main">
    <?php if ( ! is_front_page() ) : ?>
        <div class="page-heading page-container">
            <h1 class="page-heading__title"><?php the_title(); ?></h1>
            <hr>
            <p>X</p>
        </div>
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
