console.log('CYPRESS: MOCKED services module is being used.');

export function useLang() {
  return {
    get: (key: string) => `mocked_translation_for_${key}`,
    has: (key: string) => true,
  };
}

export function useMonkey() {
  return {
    format: (value: any) => value,
    toDate: (value: any) => new Date(),
  };
}


function useUi() {
  return {};
}

function useOverlay() {
  return {};
}

function usePopableQueueService() {
  return {};
}

export {
  useUi,
  useOverlay,
  usePopableQueueService
};

export default {
  useLang,
  useMonkey,
  useUi,
  useOverlay,
  usePopableQueueService,
};