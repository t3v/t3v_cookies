# -------------------------
# | T3v Cookies Constants |
# -------------------------

plugin {
  tx_t3vcookies {
    persistence {
      # cat=plugin/tx_t3vcookies/persistence; type=boolean; label=Enables the automatic cache clearing when changing data sets
      enableAutomaticCacheClearing = 1

      # cat=plugin/tx_t3vcookies/persistence; type=int+; label=The PID of the storage
      storagePid = 0

      # cat=plugin/tx_t3vcookies/persistence; type=boolean; label=Updates reference index to ensure data integrity
      updateReferenceIndex = 1
    }

    settings {
      # ...
    }

    view {
      # cat=plugin/tx_t3vcookies/view; type=string; label=The default path to the layouts
      layoutRootPath = EXT:t3v_cookies/Resources/Private/Layouts/

      # cat=plugin/tx_t3vcookies/view; type=string; label=The default path to the templates
      templateRootPath = EXT:t3v_cookies/Resources/Private/Templates/

      # cat=plugin/tx_t3vcookies/view; type=string; label=The default path to the partials
      partialRootPath = EXT:t3v_cookies/Resources/Private/Partials/
    }
  }
}