
import { env } from '$env/dynamic/private';
import type { PageServerLoad, Actions } from './$types';

export async function load({ fetch }) {
    const productsData = await fetch(`${env.SHEET}`);
    const products = await productsData.json();
 
    return { products };
}

export const actions = {
    checkout: async ({ request }) => {
      const data = await request.formData();
      const email = data.get('email');
      const phone = data.get('phone');
      const address = data.get('address');
      const name = data.get('name');
      const state = data.get('state');
      const street = data.get('street');
      const requestBody = {
        email: email,
        phone: phone,
        address: address,
        name: name,
        street:street,
        state:state
      };
  
      const url = (`${env.ORDERS}`);
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      };
  
      try {
        const response = await fetch(url, options);
        if (response.ok) {
          // Request successful, handle the response if needed
          console.log('POST request successful');
        } else {
          // Request failed, handle the error
          console.error('POST request failed');
        }
      } catch (error) {
        // Request failed, handle the error
        console.error('Error:', error);
      }
    },
  };
  