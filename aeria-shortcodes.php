<?php
/*
Plugin Name: Aeria Shortcodes
Description: Aeria Shortcodes
Version: 1.0.1
Author: Caffeina srl
Author URI: http://caffeina.it
*/

require_once( __DIR__.'/inc/as_grid.php' );
require_once( __DIR__.'/inc/as_icons.php' );

// Autoupdate
include __DIR__.'/lib/plugin-update-checker.php';
PucFactory::buildUpdateChecker(
    'https://raw.githubusercontent.com/CaffeinaLab/aeria-shortcodes/master/metadata.json',
    __FILE__,
    'aeria-shortcodes'
);

class AeriaShortcodes {

    public $shortcodes = [
        'grid',
        'icons'
    ];

    public function __construct() {
        add_action( 'init', [ &$this, 'init' ] );
    }

    function init() {

        if(is_admin() ) {
            wp_enqueue_style( 'as_admin_style', plugins_url( 'css/admin.css', __FILE__ ) );
        }

        if ( !current_user_can( 'edit_posts' ) && !current_user_can( 'edit_pages' ) ) {
            return;
        }

        if ( get_user_option( 'rich_editing' ) == 'true' ) {
            add_filter( 'mce_external_plugins', [ &$this, 'regplugins' ] );
            add_filter( 'mce_buttons_2', [ &$this, 'regbtns' ] );
        }
    }

    function regbtns( $buttons ) {
        foreach ( $this->shortcodes as &$shortcode ) {
            array_push( $buttons, 'as_' . $shortcode );
        }
        return $buttons;
    }

    function regplugins( $plgs) {
        foreach ( $this->shortcodes as &$shortcode ) {
            $plgs[ 'as_' . $shortcode ] = plugins_url( 'js/plugins/' . $shortcode . '.js', __FILE__ );
        }
        return $plgs;
    }

}

$ascodes = new AeriaShortcodes();
