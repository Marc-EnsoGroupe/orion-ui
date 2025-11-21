// Ce fichier contient la logique de TOUS nos mocks
// pour ne pas se répéter.

export const useDocument = () => {
  console.log('CYPRESS: Using MOCKED useDocument');
  return {
    // Simulez les propriétés/méthodes nécessaires
  };
};

export const useLang = () => {
  console.log('CYPRESS: Using MOCKED useLang');
  return {
    get: (key: string) => `mock_${key}`,
  };
};

export const useResponsive = () => {
  console.log('CYPRESS: Using MOCKED useResponsive');
  return {};
};

export const useWindow = () => {
  console.log('CYPRESS: Using MOCKED useWindow');
  return {};
};

export const useUi = () => {
  console.log('CYPRESS: Using MOCKED useUi');
  return {};
};