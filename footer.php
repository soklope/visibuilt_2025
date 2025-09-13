        <?php $is_contact_page = is_page( 'contact' ); ?>
        
        <footer class="<?= $is_contact_page ? 'footer footer--contact' : 'footer'?>">
            <div class="footer__inner page-container">
                <div class="footer__child-container">
                    <?php 
                        if ( function_exists( 'the_custom_logo' ) ) {
                            the_custom_logo();
                        } else {
                            echo '<h1>' . get_bloginfo( 'name' ) . '</h1>'; 
                        }
                    ?>
                </div>

                <hr>

                <div class="footer__child-container">
                    <?php
                        wp_nav_menu( array(
                            'theme_location' => 'footer_menu',
                            'container'      => 'nav',
                            'container_class'=> 'footer__navigation-container',
                            'menu_class'     => 'footer__navigation',
                            'depth'          => 1, // Optional: no dropdowns in footer
                        ) );
                    ?>

                    <?php
                        wp_nav_menu( array(
                            'theme_location' => 'legal_menu',
                            'container'      => 'nav',
                            'container_class'=> 'footer__navigation-container',
                            'menu_class'     => 'footer__navigation',
                            'depth'          => 1, // Optional: no dropdowns in footer
                        ) );
                    ?>
                </div>

                <hr>

                <div class="footer__child-container">
                    <div class="footer__legal">
                        <p>© <?php echo date('Y'); ?> Visibuilt ApS</p>
                        <p>Alfa Laval Innovation House</p>
                        <p>Maskinvej 5</p>
                        <p>CVR: 4354 7658</p>
                    </div>

                    <div class="footer__some">
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
        </footer>
        
        <?php wp_footer(); ?>
    </body>
</html>
