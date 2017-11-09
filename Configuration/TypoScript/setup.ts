# -----------------------------
# | T3v Cookies Configuration |
# -----------------------------

t3v {
  cookies {
    defaults {
      gridElements {
        noteGridElement {
          container = {$t3v.cookies.defaults.gridElements.noteGridElement.container}
        }
      }
    }
  }
}

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
      layoutRootPaths {
        0 = {$plugin.tx_t3vcookies.view.layoutRootPath}
      }

      templateRootPaths {
        0 = {$plugin.tx_t3vcookies.view.templateRootPath}
      }

      partialRootPaths {
        0 = {$plugin.tx_t3vcookies.view.partialRootPath}
      }
    }
  }
}

# === Includes ===

<INCLUDE_TYPOSCRIPT: source="FILE: ./Library/setup.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: ./GridElements/setup.ts">