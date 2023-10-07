import { makeObservable, observable, action } from 'mobx';

class TabBarState {
  isShown = true;

  constructor() {
    makeObservable(
      this,
      {
        isShown: observable,
        hide: action.bound,
        show: action.bound,
      },
      { autoBind: true },
    );
  }

  hide() {
    this.isShown = false; // 'this' will always be correct
  }

  show() {
    this.isShown = true; // 'this' will always be correct
  }
}

export const TabBarStoreInstance = new TabBarState();