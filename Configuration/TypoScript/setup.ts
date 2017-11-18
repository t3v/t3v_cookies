# -----------------------------
# | T3v Cookies Configuration |
# -----------------------------

# === Plugin Configuration ===

plugin {
  tx_t3vcookies {
    persistence {
      enableAutomaticCacheClearing = {$plugin.tx_t3vcookies.persistence.enableAutomaticCacheClearing}

      storagePid = {$plugin.tx_t3vcookies.persistence.storagePid}

      updateReferenceIndex = {$plugin.tx_t3vcookies.persistence.updateReferenceIndex}
    }

    settings {
      # ...
    }

    view {
      layoutRootPath = {$plugin.tx_t3vcookies.view.layoutRootPath}

      layoutRootPaths {
        0 = {$plugin.tx_t3vcookies.view.layoutRootPath}
      }

      templateRootPath = {$plugin.tx_t3vcookies.view.templateRootPath}

      templateRootPaths {
        0 = {$plugin.tx_t3vcookies.view.templateRootPath}
      }

      partialRootPath = {$plugin.tx_t3vcookies.view.partialRootPath}

      partialRootPaths {
        0 = {$plugin.tx_t3vcookies.view.partialRootPath}
      }
    }
  }
}

# === Includes ===

<INCLUDE_TYPOSCRIPT: source="FILE: ./Library/setup.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: ./GridElements/setup.ts">