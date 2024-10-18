export const THEME_PRESET = {
  primitive: {
    slate: {
      50: 'hsl(0, 0%, 100%)',
      100: 'hsl(210,100%,98%)',
      200: 'hsl(211,43%,87%)',
      300: 'hsl(210,30%,79%)',
      400: 'hsl(208,25%,71%)',
      500: 'hsl(208,20%,60%)',
      600: 'hsl(208,16%,51%)',
      700: 'hsl(208,17%,44%)',
      800: 'hsl(208,20%,35%)',
      900: 'hsl(207,23%,28%)',
      950: 'hsl(209, 23%, 22%)'
    }
  },
  semantic: {
    primary: {
      50: '{zinc.50}',
      100: '{zinc.100}',
      200: '{zinc.200}',
      300: '{zinc.300}',
      400: '{zinc.400}',
      500: '{zinc.500}',
      600: '{zinc.600}',
      700: '{zinc.700}',
      800: '{zinc.800}',
      900: '{zinc.900}',
      950: '{zinc.950}'
    },
    colorScheme: {
      light: {
        formField: {
          background: '{slate.50}'
        },
        text: {
          color: '#000000'
        },
        surface: {
          0: '#ffffff',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}'
        },
        primary: {
          color: '{slate.50}',
          inverseColor: '#000000',
          contrastColor: '#000000',
          hoverColor: '{slate.100}',
          activeColor: '{slate.200}'
        }
      },
      dark: {
        surface: {
          0: '#ffffff',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}'
        },
        formField: {
          background: '{slate.950}'
        },
        primary: {
          color: '{slate.950}',
          inverseColor: '{slate.50}',
          contrastColor: '#ffffff',
          hoverColor: '{slate.900}',
          activeColor: '{slate.800}'
        }
      }
    }
  }
}
