<!doctype html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <?php wp_head()?>
    </head>
<body>

    <header>
        <?php
            wp_nav_menu( array(
                'theme_location' => 'primary_menu',
                'container'      => 'nav',
                'container_class'=> 'main-navigation',
                'menu_class'     => 'menu',
            ) );
        ?>
    </header>
    
