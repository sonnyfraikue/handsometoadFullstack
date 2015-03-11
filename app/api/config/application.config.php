<?php
return array(
    'configuration' => array(
        'local' => array(
            'endpointprefix' => '/api/',
        ),
        'live' => array(
            'endpointprefix' => '/',
        ),
        'thehost' => $_SERVER['HTTP_HOST'],
    ),
);
