import { Global, css } from "@emotion/react"
/** @jsxImportSource theme-ui */
import { ThemeProvider } from "theme-ui"
import { theme } from "./theme"

function Layout({ children, responsive }) {
  return (
    <ThemeProvider theme={theme}>
      <div
        sx={{
          display: "flex",
          width: ["100vw", "auto"],
          minWidth: ["auto", "1020px"],
          background: "",
        }}
      >
        <Global
          styles={css`
            body {
              margin: 0;
            }
            @media (max-width: 1020px) {
              body {
                overflow-x: ${false ? "hidden" : "visible"};
              }
            }
          `}
        />
        <aside
          sx={{
            bg: "accent",
            color: "muted",
            width: [0, "50%"],
            minHeight: "100vh",
          }}
        />
        <div sx={{ background: "#F9F8F3", color: "text", width: ["100%", "50%"] }}>
          <main
            sx={{
              py: [5, "topMargin"],
              pl: [5, "innerMargin"],
              width: "content",
              maxWidth: "80%",
              mx: ["auto", 0],
            }}
          >
            {children}
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Layout
