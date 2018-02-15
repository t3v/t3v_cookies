# -------------------------
# | T3v Cookies Constants |
# -------------------------

# === Plugin Constants ===

plugin {
  tx_t3vcookies {
    defaults {
      gridElements {
        noteGridElement {
          # cat=plugin/tx_t3vcookies/defaults/gridElements/noteGridElement; type=string; label=The grid element's container
          container = default

          # cat=plugin/tx_t3vcookies/defaults/gridElements/noteGridElement; type=boolean; label=Show the close control
          # closeControl = 1
        }
      }
    }

    persistence {
      # cat=plugin/tx_t3vcookies/persistence; type=boolean; label=Enables the automatic cache clearing when changing data sets
      enableAutomaticCacheClearing = 1

      # cat=plugin/tx_t3vcookies/persistence; type=int+; label=The PID of the default storage
      storagePid = 0

      # cat=plugin/tx_t3vcookies/persistence; type=boolean; label=Updates the reference index to ensure data integrity
      updateReferenceIndex = 1
    }

    settings {
      extbase {
        # cat=plugin/tx_t3vcookies/settings/extbase; type=string; label=The controller extension name
        controllerExtensionName = T3vCookies
      }
    }

    view {
      # cat=plugin/tx_t3vcookies/view; type=string; label=The path where the layouts are stored
      layoutRootPath = EXT:t3v_cookies/Resources/Private/Layouts/

      # cat=plugin/tx_t3vcookies/view; type=string; label=The path where the templates are stored
      templateRootPath = EXT:t3v_cookies/Resources/Private/Templates/

      # cat=plugin/tx_t3vcookies/view; type=string; label=The path where the partials are stored
      partialRootPath = EXT:t3v_cookies/Resources/Private/Partials/
    }
  }
}

# === Includes ===

<INCLUDE_TYPOSCRIPT: source="FILE: ./Library/constants.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: ./GridElements/constants.ts">