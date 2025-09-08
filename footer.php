        <footer class="footer">
            <div class="footer__inner page-container">
                <div class="footer__child-container">
                    <p>Mailchimp goes here</p>
                    <p>Mailchimp goes here</p>
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
                        <p>© <?php echo date('Y'); ?> Your Company Name</p>
                        <p>123 Business Street, 1000 Copenhagen, Denmark</p>
                        <p>123 Business Street, 1000 Copenhagen, Denmark</p>
                        <p>Tlf: +45 88 88 88 88</p>
                        <p>CVR: 12345678</p>
                    </div>
                    <p>SOME here</p>
                </div>
            </div>
        </footer>
        
        <?php wp_footer(); ?>
    </body>
</html>
