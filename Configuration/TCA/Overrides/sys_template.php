<?php
defined('TYPO3_MODE') or die();

// === Variables ===

$extensionKey   = 't3v_cookies';
$extensionTitle = 'T3v Cookies';

// === TypoScript ===

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extensionKey, 'Configuration/TypoScript', $extensionTitle);
