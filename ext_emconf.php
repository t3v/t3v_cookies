<?php
$EM_CONF[$_EXTKEY] = [
  'title' => 'T3v Cookies',
  'description' => 'The cookies extension of TYPO3Voila.',
  'author' => 'Maik Kempe',
  'author_email' => 'mkempe@bitaculous.com',
  'author_company' => 'Bitaculous - It\'s all about the bits, baby!',
  'category' => 'fe',
  'state' => 'stable',
  'version' => '6.0.0',
  'createDirs' => '',
  'uploadfolder' => false,
  'clearCacheOnLoad' => false,
  'constraints' => [
    'depends' => [
      'typo3' => '9.5.0-10.4.99',
      'gridelements' => '',
      'vhs' => '',
      't3v_core' => '',
      't3v_content' => ''
    ],
    'conflicts' => [],
    'suggests' => []
  ],
  'autoload' => [
    'psr-4' => [
      'T3v\\T3vCookies\\' => 'Classes'
    ]
  ],
  'autoload-dev' => [
    'psr-4' => [
      'T3v\\T3vCookies\\Tests\\' => 'Tests'
    ]
  ]
];
