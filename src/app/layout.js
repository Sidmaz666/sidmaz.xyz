import localFont from 'next/font/local'
import './globals.css'

const SpaceFont = localFont({
  src : [{
    path: "../../public/fonts/spacegr.ttf"
    }
  ],
  variable: "--font-space"
})

const Devanagari = localFont({
  src : [{
    path: "../../public/fonts/hindi.ttf"
   }
  ],
  variable: "--font-hindi"
})

export const metadata = {
  title: 'SIDMAZ ~ HOME',
  description: 'HOMEPAGE OF SIDHARTHA MAZUMDER PERSONAL PORTFOLIO',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${SpaceFont.variable} ${Devanagari.variable}`}>
    <head>
      <link rel="icon" href="./img/favicon.ico" />
    </head>
      	<body>
    		{children}
    	</body>
    </html>
  )
}
