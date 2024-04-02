export default {
  content: ['./src/**/*.{html,js,ts}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        green_power_light: {
          "primary": "#9ACA3B",

          "primary-content": "#1F9FD8",
                   
          "secondary": "#4FB446",

          "secondary-content": "#000000",
                   
          "accent": "#00B1FF",

          "accent-content": "#000000",
                   
          "neutral": "#445340",

          "neutral-content": "#9F9F9F",
                   
          "base-100": "#FFFFFF",

          "base-200": "#2F322F",
                   
          "info": "#00FFE0",

          "info-content": "000000",
                   
          "success": "#00FF47",
                   
          "warning": "#FFF500",
                   
          "error": "#FF0000",
        }
      }
    ]
  }
}