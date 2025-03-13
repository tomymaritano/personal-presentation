// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        keyframes: {
          neonBorderRotate: {
            '0%, 100%': { boxShadow: '0 0 5px #08f, 0 0 15px #08f, 0 0 30px #08f, 0 0 60px #08f' },
            '50%': { boxShadow: '0 0 10px #08f, 0 0 20px #08f, 0 0 40px #08f, 0 0 80px #08f' },
          },
        },
        animation: {
          'neon-border-rotate': 'neonBorderRotate 3s infinite alternate',
        },
      },
    },
    plugins: [],
  }