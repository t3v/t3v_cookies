# === Grid Elements Configuration ===

tx_gridelements {
  setup {
    t3vCookiesAccordion {
      title = LLL:EXT:t3v_cookies/Resources/Private/Language/locallang_be.xlf:gridElements.t3vCookies.cookies.title

      description = LLL:EXT:t3v_cookies/Resources/Private/Language/locallang_be.xlf:gridElements.t3vCookies.cookies.description

      # flexformDS = FILE:EXT:t3v_cookies/Configuration/FlexForms/GridElements/T3vCookies/Cookies.xml

      icon = EXT:t3v_cookies/Resources/Public/Icons/GridElements/T3vCookies/Cookies.svg

      # Frame settings
      # frame = 1

      # Top Level Layout
      # topLevelLayout = 1

      # Denied elements
      # excludeLayoutIds = 1,2,3

      # TSConfig winning
      # overruleRecords = 1

      config {
        colCount = 1
        rowCount = 1

        rows {
          1 {
            columns {
              1 {
                name = LLL:EXT:t3v_cookies/Resources/Private/Language/locallang_be.xlf:gridElements.t3vCookies.cookies.rows.1.columns.1.name

                colPos = 10

                # allowed          =
                # allowedGridTypes =
              }
            }
          }
        }
      }
    }
  }
}