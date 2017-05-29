<?php
defined('TYPO3_MODE') or die('Access denied.');

call_user_func(function ($namespace, $extkey) {
  $extensionSignature = \TYPO3\CMS\Core\Utility\GeneralUtility::underscoredToUpperCamelCase($namespace . '.' . $extkey);

  // === TsConfig ===

  \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $extkey . '/Configuration/TSconfig.ts">');
}, 't3v', $_EXTKEY);