module.exports = {
      content: ["./src/**/*.{js,jsx,ts,tsx}"],
      theme: {
            extend: {
                  colors: {
                        primary: "#184690",
                        my_black: "#101D38",
                        my_white: "#FFFFFF",
                        warning: "#AA5E46",
                        my_green: "#237263",
                        my_red: "#C83349",
                        lightblue: "#4B7FBF",
                        gray: "#3D3D3D",

                  },
                  boxShadow: {
                    'yellow': '0 4px 6px rgba(230, 192, 104, 0.5), 0 10px 15px rgba(230, 192, 104, 0.5)',
                  },
                  textShadow: {
                    custom: '2px 2px #3D3D3D',
                  },
                  fontFamily: {
                    oxygen: ['Oxygen', 'sans-serif'],
                  },
                //   backgroundImage: {
                //     'background-image': "url('/images/Huging.png')",
                //   },
            }
      },
      plugins: [
        function ({ addUtilities }) {
          const newUtilities = {
            '.text-shadow-custom': {
              textShadow: '2px 2px #3D3D3D',
            },
          };

          addUtilities(newUtilities);
        },
      ],
};
