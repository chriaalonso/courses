/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
  extend: {
    colors: {
      brand: {
        100: "#bbd3fa",
        200: "#8093b0",
        300: "#475366",
      },
    },
  },
};
export const plugins = [];
export const safelist = [{ pattern: /^.*$/ }];
