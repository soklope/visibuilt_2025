<!doctype html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <?php wp_head()?>
    </head>
<body>

    <header class="header">
        <div class="page-container header__inner">
            <?php
                if ( function_exists( 'the_custom_logo' ) ) {
                    the_custom_logo();
                } else {
                    echo '<h1>' . get_bloginfo( 'name' ) . '</h1>'; 
                }

                wp_nav_menu( array(
                    'theme_location' => 'primary_menu',
                    'container'      => 'nav',
                    'container_class'=> 'main-navigation',
                    'menu_class'     => 'header__navigation'
                ) );
            ?>

            <button class="header__burger">menu</button>

            <!-- <button class="header__burger">
                <span></span>
                <span></span>
                <span></span>
            </button> -->
            
        </div>

        <?php
            wp_nav_menu( array(
                'theme_location' => 'primary_menu',
                'container'      => 'nav',
                'container_class'=> 'header__mega-menu-container',
                'menu_class'     => 'page-container header__mega-menu',
            ) );
        ?>
    </header>

    
