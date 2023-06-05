/** @type {import("prettier").Config} */
const config = {
    semi: true,
    singleQuote: false,
    printWidth: 100,
    tabWidth: 4,
    plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

module.exports = config;
