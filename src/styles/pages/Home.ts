// import { styled } from "..";

// export const HomeContainer = styled('main', {
//   width: '100%',
//   // maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
//   maxWidth:'90vw',
//   minHeight: 656,
//   // marginLeft: 'auto',
//   margin: '0 auto',
//   display:'flex',
//   overflow: 'hidden',
//   // alignItems:'center',
//   // justifyContent:'center',
// })
// export const Product = styled('a', {
//   background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
//   borderRadius: 8,
//   cursor: 'pointer',
//   position: 'relative',
//   overflow: 'hidden',
//   // width:'100%',

//   display:"flex",
//   alignItems: 'center',
//   justifyContent:'center',

//   img: {
//     objectFit:'cover',
//   },

//   footer:{
//     position:'absolute',
//     bottom: '0.25rem',
//     left: '0.25rem',
//     right: '0.25rem',
//     padding:'2rem',
//     borderRadius: 6,
//     display: 'flex',
//     alignItems:'center',
//     justifyContent: 'space-between',
//     background: 'rgb(0, 0, 0, 0.6)',
//     transform: 'translateY(110%)',
//     opacity: 0,
//     transition: 'all 0.2s ease-in-out',
//     strong: {
//       fontSize: '$lg',
//       color:'$gray100',
//     },

//     span: {
//       fontSize: '$xl',
//       fontWeight: 'bold',
//       color: '$green300',
//     },

//   },
//   '&:hover': {
//     footer: {
//       transform: 'translateY(0%)',
//       opacity: 1
//     }
//   }
// })
import { styled } from '..';

export const HomeContainer = styled('main', {
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    minHeight: 580,
    marginLeft: 'auto',
    overflow: 'hidden',

    display: 'flex',
});

export const Product = styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    img: {
        objectFit: 'cover',
    },

    footer: {
        padding: '2rem',
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 6,

        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',

        strong: {
            fontSize: '$lg',
            color: '$gray100',
        },

        span: {
            fontSize: '$xl',
            fontWeight: 'bold',
            color: '$green300',
        },
    },

    '&:hover': {
        footer: {
            transform: 'translateY(0%)',
            opacity: 1,
        },
    },
});