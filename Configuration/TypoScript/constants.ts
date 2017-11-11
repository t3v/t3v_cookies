# -------------------------
# | T3v Cookies Constants |
# -------------------------

t3v {
  cookies {
    gridElements {
      noteGridElement {
        # cat=t3v/cookies/gridElements/noteGridElement; type=string; label=The Grid Element's container
        container = default
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
      # cat=plugin/tx_t3vcookies/view; type=string; label=The default path to the layouts
      layoutRootPath = EXT:t3v_cookies/Resources/Private/Layouts/

      # cat=plugin/tx_t3vcookies/view; type=string; label=The default path to the templates
      templateRootPath = EXT:t3v_cookies/Resources/Private/Templates/

      # cat=plugin/tx_t3vcookies/view; type=string; label=The default path to the partials
      partialRootPath = EXT:t3v_cookies/Resources/Private/Partials/
    }
  }
}

# === Includes ===

<INCLUDE_TYPOSCRIPT: source="FILE: ./Library/constants.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: ./GridElements/constants.ts">