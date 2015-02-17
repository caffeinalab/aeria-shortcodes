<?php

add_shortcode( 'icon', function ( $params, $content=null ) {
    extract(shortcode_atts(array(
        'name' => 'default'
    ), $params));

    $content = preg_replace( '/<br class="nc".\/>/', '', $content );
    $result = '<i class="' . $name . '"></i>';
    return force_balance_tags( $result );
});
