import './globals.css'
import Header from './_components/Header/page'
export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className=""><Header/>{children}
      </body>
    </html>
  )
}