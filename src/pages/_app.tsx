import { globalStyles } from "@/styles/global";
import { Container, Header } from "@/styles/pages/app";
import { AppProps } from "next/app";
globalStyles();

export default function App({Component, pageProps}: AppProps){
  return (
  <Container>
    <Header>
      <h2>Logo</h2>
    </Header>
  <Component {...pageProps}/>
  </Container>
  )
}