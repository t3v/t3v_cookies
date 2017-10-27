<?php
defined('TYPO3_MODE') or die('Access denied.');

call_user_func(function($namespace, $extkey) {
  $extensionSignature = \TYPO3\CMS\Core\Utility\GeneralUtility::underscoredToUpperCamelCase($namespace . '.' . $extkey);

  // === Icons ===

  $iconRegistry = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(
    \TYPO3\CMS\Core\Imaging\IconRegistry::class
  );

  // --- Note Grid Element ---

  $iconIdentifier = 'note_grid_element';

  $iconRegistry->registerIcon(
    "{$extkey}-{$iconIdentifier}",
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => "EXT:{$extkey}/Resources/Public/Icons/GridElements/NoteGridElement.svg"]
  );

  // === TypoScript ===

  \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extkey, 'Configuration/TypoScript', 'T3v Cookies');
}, 't3v', $_EXTKEY);