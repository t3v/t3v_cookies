# === T3v Cookies Configuration ===

plugin {
  tx_t3vcookies {
    persistence {
      enableAutomaticCacheClearing = 1

      updateReferenceIndex = 1

      # storagePid = {$plugin.tx_t3vcookies.persistence.storagePid}
    }

    view {
      layoutRootPath = {$plugin.tx_t3vcookies.view.layoutRootPath}

      templateRootPath = {$plugin.tx_t3vcookies.view.templateRootPath}

      partialRootPath = {$plugin.tx_t3vcookies.view.partialRootPath}
    }

    settings {
      # ...
    }
  }
}