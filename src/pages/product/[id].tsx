import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/products"
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";

interface ProductProps {
  product:{
    id: string,
    name: string,
    imageUrl: string,
    price: string,
    description: string,
    defaultPriceId: string,
  };
}

export default function Product({product}: ProductProps ) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);
  const handleBayProduct=  async () => {
    try{
      setIsCreatingCheckoutSession(true);
      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      });
      const {checkoutUrl } = response.data;
      window.location.href = checkoutUrl
    }catch(err){
      setIsCreatingCheckoutSession(false);
     alert('falha ao redirecionar ao checkout')
    }
  }
  const {isFallback} = useRouter()
  if (isFallback) {
    return <p>Loading....</p>
  }
  <Head>
        <title>{product.name} | Shop</title>
  </Head>
  return(
 <ProductContainer>
  <ImageContainer>
    <Image src={product.imageUrl} width={520} height={480} alt=""/>
  </ImageContainer>
  <ProductDetails>
    <h1>{product.name}</h1>
    <span>{product.price}</span>
    <p>{product.description}</p>
    <button disabled={isCreatingCheckoutSession} onClick={handleBayProduct}>Comprar agora</button>
  </ProductDetails>
 </ProductContainer>
  )
}
export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: {id: 'prod_NtrIvmmWFV30dR'}}
    ],
    fallback: true,

  }
}
export const getStaticProps: GetStaticProps<any,{id: string}> = async( {params}) => {
  const productId = params?.id?? '';
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  });
  const price = product.default_price as Stripe.Price | null;
  return {
    props: {
     product: {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price && price.unit_amount
        ? new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(price.unit_amount / 100)
        : null,
        description:product.description,
        defaultPriceId: price ? price.id:'',
     }
    },
    revalidate: 60 * 60 * 1
  };
}