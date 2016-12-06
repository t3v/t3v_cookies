# === Content Records Configuration ===

tt_content {
  gridelements_pi1 {
    20 {
      10 {
        setup {
          t3vCookiesCookiesGridElement < lib.gridelements.defaultGridSetup
          t3vCookiesCookiesGridElement {
            cObject = FLUIDTEMPLATE
            cObject {
              file = EXT:t3v_cookies/Resources/Private/Templates/GridElements/CookiesGridElement.html

              layoutRootPath = EXT:t3v_cookies/Resources/Private/Layouts/GridElements/

              partialRootPath = EXT:t3v_cookies/Resources/Private/Partials/GridElements/
            }

            outerWrap = |
          }
        }
      }
    }
  }
}