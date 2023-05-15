import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY || 'default_key_value';

export const stripe = new Stripe(stripeSecretKey,{
  apiVersion:'2022-11-15',
  appInfo: {
    name:'Shop teste'
  }
});
