// endpoint.js

export const BASE_API = import.meta.env.VITE_API_URL
export const API_KEY = import.meta.env.VITE_AUTH_TOKEN

const ENDPOINT = {
  SERVICES: `${BASE_API}/api/services?populate=*`,
  CATEGORY: `${BASE_API}/api/categories`,
  WORKS: `${BASE_API}/api/works?populate=*`,
  PRODUCTS: `${BASE_API}/api/products?populate=*`,
  USECASE: `${BASE_API}/api/use-cases?populate=*`,
  STEP: `${BASE_API}/api/steps?populate=*`,
};

export default ENDPOINT;
