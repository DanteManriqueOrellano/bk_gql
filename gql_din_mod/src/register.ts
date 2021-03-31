interface IControlPanel {
    // add some methods or something to distinguish from {}
    doAThing(): void;
  }
  
  // add a registry of the type you expect
  namespace IControlPanel {
    type Constructor<T> = {
      new (...args: any[]): T;
      readonly prototype: T;
    };
    const implementations: Constructor<IControlPanel>[] = [];
    export function GetImplementations(): Constructor<IControlPanel>[] {
      return implementations;
    }
    export function register<T extends Constructor<IControlPanel>>(ctor: T) {
      implementations.push(ctor);
      return ctor;
    }
  }