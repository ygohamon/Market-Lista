// Polyfill: react-native-reanimated v4 acessa APIs do browser (document)
// que não existem no React Native. Mockamos o mínimo necessário.
if (typeof document === 'undefined') {
  const noopElement = {
    style: {},
    setAttribute: () => {},
    getAttribute: () => null,
    appendChild: () => {},
    removeChild: () => {},
    contains: () => false,
  };

  global.document = {
    createElement: () => ({ ...noopElement }),
    getElementById: () => null,
    querySelectorAll: () => [],
    querySelector: () => null,
    head: { ...noopElement, append: () => {} },
    body: { ...noopElement },
  };
}

const { registerRootComponent } = require('expo');
const App = require('./App').default;

registerRootComponent(App);
