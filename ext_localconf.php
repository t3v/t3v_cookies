<?php
defined('TYPO3_MODE') or die();

// === Variables ===

$extensionKey        = $_EXTKEY;
$configurationFolder = \T3v\T3vCore\Utility\ExtensionUtility::configurationFolder($extensionKey);
$iconsFolder         = \T3v\T3vCore\Utility\ExtensionUtility::iconsFolder($extensionKey);

// === Page TSconfig ===

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig("<INCLUDE_TYPOSCRIPT: source=\"{$configurationFolder}/TSconfig.ts\">");

// === Backend ===

if (TYPO3_MODE === 'BE') {
  // --- Icons ---

  $iconRegistry = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Core\Imaging\IconRegistry::class);

  // +++ Note Grid Element Icon +++

  $iconKey        = 'Note Grid Element';
  $iconIdentifier = \T3v\T3vCore\Utility\IconUtility::iconIdentifier($iconKey);
  $iconSignature  = \T3v\T3vCore\Utility\IconUtility::iconSignature($extensionKey, $iconIdentifier);

  $iconRegistry->registerIcon(
    $iconSignature,
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => "{$iconsFolder}/GridElements/NoteGridElement.svg"]
  );
}