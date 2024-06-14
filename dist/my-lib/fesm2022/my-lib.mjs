import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';

class MyLibService {
    constructor() { }
    static { this.ɵfac = function MyLibService_Factory(t) { return new (t || MyLibService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MyLibService, factory: MyLibService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MyLibService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();

class MyLibComponent {
    static { this.ɵfac = function MyLibComponent_Factory(t) { return new (t || MyLibComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MyLibComponent, selectors: [["lib-my-lib"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, template: function MyLibComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, " See on see, mida RIA tahab.... ");
            i0.ɵɵelementEnd();
        } } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MyLibComponent, [{
        type: Component,
        args: [{ selector: 'lib-my-lib', standalone: true, imports: [], template: `
    <p>
      See on see, mida RIA tahab....
    </p>
  ` }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MyLibComponent, { className: "MyLibComponent", filePath: "lib/my-lib.component.ts", lineNumber: 14 }); })();

/*
 * Public API Surface of my-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyLibComponent, MyLibService };
//# sourceMappingURL=my-lib.mjs.map
