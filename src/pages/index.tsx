import { HomeContainer, Product } from "@/styles/pages/Home";
import Image from "next/image";

import { useKeenSlider } from 'keen-slider/react'
import foto1 from '../img/imag1.jpg'
import foto2 from '../img/imag2.jpg'

import 'keen-slider/keen-slider.min.css'
export default function Home () {
  const [sliderRef] = useKeenSlider({
  
 slides: {
  perView: 2,
  spacing:38,



}
  })
  return(
    <HomeContainer ref={sliderRef} className="keen-slider" >
      <Product className="keen-slider__slide">
        <Image src={foto1} width={520} height={480} alt=''/>

        <footer>
          <strong> angels photo </strong>
          <span>inpagavel</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={foto1} width={520} height={480} alt=''/>

        <footer>
          <strong> angels photo </strong>
          <span>inpagavel</span>
        </footer>
      </Product>
      
      <Product className="keen-slider__slide">
        <Image src={foto2} width={520} height={480} alt='img'/>
        
        <footer>
          <strong>
            world or part 
          </strong>
          <span>inpagavel</span>
        </footer>
      </Product>
      
      <Product className="keen-slider__slide">
        <Image src={foto2} width={520} height={480} alt='img'/>
        
        <footer>
          <strong>
            world or part 
          </strong>
          <span>inpagavel</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}