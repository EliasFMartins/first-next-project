import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/products"
import { useRouter } from "next/router"

export default function Product() {
  const { query} = useRouter()
  return(
 <ProductContainer>
  <ImageContainer>

  </ImageContainer>
  <ProductDetails>
    <h1>Camiseta X</h1>
    <span>R$ +8000,00</span>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed illo reiciendis quo dolorem cupiditate aperiam vel? In ut laboriosam, vitae, aliquam iusto quaerat omnis ab nihil sint eius ullam rerum!</p>
    <button>Comprar agora</button>
  </ProductDetails>
 </ProductContainer>
  )
}