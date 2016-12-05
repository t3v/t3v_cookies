# === Content Records Configuration ===

tt_content {
  gridelements_pi1 {
    20 {
      10 {
        setup {
          t3vCookiesCookies < lib.gridelements.defaultGridSetup
          t3vCookiesCookies {
            cObject = FLUIDTEMPLATE
            cObject {
              file = EXT:t3v_cookies/Resources/Private/Templates/GridElements/T3vCookies/Cookies.html

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