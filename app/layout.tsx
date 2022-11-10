import Navigation from "./component/Navigation"

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
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
