<!doctype html>

<?php $is_contact_page = is_page( 'contact' ); ?>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <?php wp_head()?>
    </head>
    
    <body <?php body_class( $is_contact_page ? 'body body--contact' : 'body' ); ?>>

    <header class="<?= $is_contact_page ? 'header header--contact header--show' : 'header header--show' ?>">
        <div class="page-container header__inner">
            <?php
                if ( function_exists( 'the_custom_logo' ) ) {
                    if ( $is_contact_page ) {
                        add_filter( 'get_custom_logo', function( $html ) {
                            $html = str_replace( 'custom-logo', 'custom-logo--contact custom-logo', $html );
                            return $html;
                        });
                    }
                    the_custom_logo();
                } else {
                    echo '<h1 class="' . ( $is_contact_page ? 'site-title site-title--contact' : 'site-title' ) . '">' . get_bloginfo( 'name' ) . '</h1>'; 
}

                wp_nav_menu( array(
                    'theme_location'  => 'primary_menu',
                    'container'       => 'nav',
                    'container_class' => 'main-navigation',
                    'menu_class'      => 'header__navigation' . ( is_page( 'contact' ) ? ' header__navigation--contact' : '' ),
                ) );
            ?>

            <button class="<?= $is_contact_page ? 'header__burger header__burger--contact' : 'header__burger' ?>">menu</button>
        </div>

        <div class="<?= $is_contact_page ? 
                'header__mega-menu-container header__mega-menu-container--contact' 
                : 'header__mega-menu-container' 
            ?>">

            <div class="page-container">
                <?php
                    wp_nav_menu( array(
                        'theme_location' => 'primary_menu',
                        'container'      => 'nav',
                        'container_class'=>  '',
                        'menu_class'     => 'header__mega-menu',
                    ) );
                ?>

                <div class="header__mega-menu-some-container">
                    <?php if ( $linkedin = get_theme_mod( 'visibuilt_linkedin_url' ) ) : ?>
                        <a href="<?php echo esc_url( $linkedin ); ?>" target="_blank" rel="noopener">
                            <i class="some__linkedin"></i>
                        </a>
                    <?php endif; ?>
        
                    <?php if ( $instagram = get_theme_mod( 'visibuilt_instagram_url' ) ) : ?>
                        <a href="<?php echo esc_url( $instagram ); ?>" target="_blank" rel="noopener">
                            <i class="some__instagram"></i>
                        </a>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </header>

    
