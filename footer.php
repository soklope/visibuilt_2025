    <p>Footer here</p>
        <?php
            wp_nav_menu( array(
                'theme_location' => 'footer_menu',
                'container'      => 'nav',
                'container_class'=> 'footer-navigation',
                'menu_class'     => 'footer-menu',
                'depth'          => 1, // Optional: no dropdowns in footer
            ) );
        ?>
    </body>
</html>
