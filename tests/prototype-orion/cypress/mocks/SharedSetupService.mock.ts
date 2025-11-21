import { ref } from 'vue';

export default abstract class MockedSharedSetupService {
  readonly _el = ref<HTMLElement>();

  get publicInstance(): Record<string, any> {
    return {
      _el: () => this._el.value,
    };
  }

  constructor() {
    console.log('CYPRESS: Using MOCKED SharedSetupService class');
  }

  protected async onBeforeMount() {}
  protected onMounted() {}
  protected onBeforeUpdate() {}
  protected onUpdated() {}
  protected onUnmounted() {}
}