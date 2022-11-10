import Navigation from "./component/Navigation"
import { AnimatePresence } from 'framer-motion';
import "../styles/globals.css"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>My first app Next js</title>
      </head>
      <body>
          <Navigation a={'vamo'}/>
          {children}

      </body>
    </html>
  )
}
