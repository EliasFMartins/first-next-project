import {styled} from "../styles"

const Button = styled('button', {
  backgroundColor:'$green300',
  borderRadius:20,
  padding:20
})

export default function Pao () {
  return(
    <Button>
      Pão
    </Button>
  )
}