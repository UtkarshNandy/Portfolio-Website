import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Utkarsh's Portfolio</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500&display=swap" rel="stylesheet"/>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
      <link rel="stylesheet" href="css/globals.css" />
      
      </Head> 
      <body>
        <div className ="container">
        <Main />
        </div>
        <NextScript />
      </body>
      <footer>
        Made by Utkarsh
      </footer>
    </Html>
  )
}
