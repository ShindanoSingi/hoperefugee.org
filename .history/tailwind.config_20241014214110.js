module.exports = {
      content: ["./src/**/*.{js,jsx,ts,tsx}"],
      theme: {
            extend: {
                  colors: {
                        primary: "#184690",
                        bright: "#1D4ED8",
                        secondary: "#7497D8",
                        black: "#101D38",
                        blacktext:"000000",
                        whitetext: "#FFFFFF",
                        mygray: "#9CA3AF",


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