// mailer.js
export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


const EMAILJS_CONFIG = {
  SERVICE_ID: EMAILJS_SERVICE_ID,
  TEMPLATE_ID: EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: EMAILJS_PUBLIC_KEY,
  RECIPIENT_EMAIL: 'code@jayaintegrasi.id'
};

export default EMAILJS_CONFIG;