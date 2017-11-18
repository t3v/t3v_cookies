# -------------------------
# | T3v Cookies Constants |
# -------------------------

t3v {
  cookies {
    config {
      gridElements {
        noteGridElement {
          # cat=t3v/cookies/config/gridElements/noteGridElement; type=string; label=The Grid Element's container
          container = default
        }
      }
    }
  }
}

# === Plugin Constants ===

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