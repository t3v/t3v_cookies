# === Grid Elements Configuration ===

tx_gridelements {
  setup {
    t3vCookiesNoteGridElement {
      title = LLL:EXT:t3v_cookies/Resources/Private/Language/locallang_be.xlf:gridElements.noteGridElement.title

      description = LLL:EXT:t3v_cookies/Resources/Private/Language/locallang_be.xlf:gridElements.noteGridElement.description

      # flexformDS = FILE:EXT:t3v_cookies/Configuration/FlexForms/GridElements/NoteGridElement.xml

      icon = EXT:t3v_cookies/Resources/Public/Icons/GridElements/NoteGridElement.svg

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
                name = LLL:EXT:t3v_cookies/Resources/Private/Language/locallang_be.xlf:gridElements.noteGridElement.rows.1.columns.1.name

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