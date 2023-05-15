// import { styled } from "..";

// export const ProductContainer = styled('main', {
//   display: 'grid',
//   gridTemplateColumns:'1fr 1fr',
//   alignItems: 'stretch',
//   gap: '4rem',

//   maxWidth: 1180,
//   margin: '0 auto',

// })
// export const ImageContainer = styled('div', {

//   width: '100%',
//   maxWidth: 576,
//   height: 653,
//   background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
//   borderRadius: 8,
//   padding: '0.25rem',
//   display: 'flex',
//   alignItems:'center',
//   justifyContent: 'center',
  
//   img: {
//     objectFit: 'cover'
//   }
// })
// export const ProductDetails = styled('div', {
//   display: 'flex',
//   flexDirection: 'column',

//   h1: {
//     fontSize: '2xl',
//     color: '$gray300',
//   },
//   span: {
//     marginTop: '1rem',
//     display: 'block',
//     fontSize: '2xl',
//     color: '$gray300',
//   },
//   P: {
//     marginTop: '2.5rem',
//     fontSize: '$md',
//     lineHeight: 1.6,
//     color: '$gray300',
//   },
//   button: {
//     marginTop: 'auto',
//     background: '$green500',
//     border: 0,
//     color :'White',
//     borderRadius: 8,
//     padding: '1,25rem',
//     cursor: 'pointer',
//     fontWeight: 'bold',
//     fontSize: '$md',

//     '&:hover': {
//       backgroundColor: '$green300',
//     }
//   }
// })
import { styled } from '..';

export const ProductContainer = styled('main', {
    maxWidth: 1180,
    margin: '0 auto',

    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    gap: '4rem',
});

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 576,
    height: 580,
    padding: '0.25rem',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 8,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

    img: {
        objectFit: 'cover',
    },
});

export const ProductDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    h1: {
        fontSize: '$2xl',
        color: '$gray300',
    },

    span: {
        marginTop: '1rem',

        display: 'block',

        fontSize: '$2xl',
        color: '$green300',
    },

    p: {
        marginTop: '2.5rem',

        fontSize: '$md',
        lineHeight: '1.6',
        color: '$gray300',
    },

    button: {
        marginTop: 'auto',
        padding: '1.25rem',

        color: '$white',
        fontWeight: 'bold',
        fontSize: '$md',

        border: 0,
        borderRadius: 8,
        backgroundColor: '$green500',
        cursor: 'pointer',

        '&:not(:disabled):hover': {
            backgroundColor: '$green300',
        },

        '&:disabled': {
            opacity: 0.6,
            cursor: 'not_allowed',
        },
    },
});