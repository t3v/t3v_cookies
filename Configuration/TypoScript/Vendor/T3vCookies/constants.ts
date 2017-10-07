# === T3v Cookies Constants ===

plugin {
  tx_t3vcookies {
    persistence {
      # cat=plugin/tx_t3vcookies/persistence; type=int+; label=The PID of the storage
      # storagePid = 0
    }

    view {
      # cat=plugin/tx_t3vcookies/view; type=string; label=Path to layouts
      layoutRootPath = EXT:t3v_cookies/Resources/Private/Layouts/

      # cat=plugin/tx_t3vcookies/view; type=string; label=Path to templates
      templateRootPath = EXT:t3v_cookies/Resources/Private/Templates/

      # cat=plugin/tx_t3vcookies/view; type=string; label=Path to template partials
      partialRootPath = EXT:t3v_cookies/Resources/Private/Partials/
    }

    settings {
      # ...
    }
  }
}