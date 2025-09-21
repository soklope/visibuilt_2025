<?php get_header(); ?>

<main id="main" class="site-main">
    <?php if ( have_posts() ) : ?>
        <?php while ( have_posts() ) : the_post(); ?>
            <div class="page-container">
                <p class="single__date"><?php echo get_the_date(); ?></p>
                <h2 class="single__title"><?php the_title(); ?></h2>
                <div class="single__hero">
                    <?php the_post_thumbnail( 'full' ); ?>
                </div>
                
                <div class="single__content">
                    <?php the_content(); ?>
                </div>
            </div>
        <?php endwhile; ?>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
