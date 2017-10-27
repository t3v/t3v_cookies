# === Grid Elements Configuration ===

tx_gridelements {
  setup {
    t3vCookiesNoteGridElement {
      title = LLL:EXT:t3v_cookies/Resources/Private/Language/locallang_be.xlf:gridElements.noteGridElement.title

      description = LLL:EXT:t3v_cookies/Resources/Private/Language/locallang_be.xlf:gridElements.noteGridElement.description

      # flexformDS = FILE:EXT:t3v_cookies/Configuration/FlexForms/GridElements/NoteGridElement.xml

      icon = EXT:t3v_cookies/Resources/Public/Icons/GridElements/NoteGridElement.svg

      # Use a colored frame as in the record form:
      # `0` = no color
      # `1` = red
      # `2` = green
      # `3` = blue
      # frame = 0

      # If this option is set the Grid Element can be set as top level only.
      # topLevelLayout = 1

      # A list of IDs of layouts that should not be available in this branch of the page tree.
      # excludeLayoutIds = 1,2,3

      # Set this value to `1`, when you want TSconfig settings to have precendence over layout records with the same ID.
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