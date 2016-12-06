<?php
$EM_CONF[$_EXTKEY] = [
  'title' => 'T3v Cookies',
  'description' => 'The TYPO3voila Cookies extension.',
  'author' => 'Maik Kempe',
  'author_email' => 'mkempe@bitaculous.com',
  'author_company' => 'Bitaculous - It\'s all about the bits, baby!',
  'category' => 'fe',
  'state' => 'stable',
  'version' => '1.1.0',
  'shy' => false,
  'createDirs' => '',
  'uploadfolder' => false,
  'modify_tables' => '',
  'clearCacheOnLoad' => true,
  'constraints' => [
    'depends' => [
      'typo3' => '7.6.0-8.1.99',
      'gridelements' => '',
      't3v_core' => '',
      't3v_content' => ''
    ],
    'conflicts' => [
    ],
    'suggests' => []
  ]
];