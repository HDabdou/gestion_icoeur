var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';
var PinCheck = /** @class */ (function (_super) {
    __extends(PinCheck, _super);
    function PinCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PinCheck.prototype.isPinSetup = function () { return cordova(this, "isPinSetup", {}, arguments); };
    PinCheck.pluginName = "PinCheck";
    PinCheck.plugin = "cordova-plugin-pincheck";
    PinCheck.pluginRef = "cordova.plugins.PinCheck";
    PinCheck.repo = "https://github.com/shangyilim/cordova-plugin-pincheck";
    PinCheck.platforms = ["Android", "iOS"];
    PinCheck = __decorate([
        Injectable()
    ], PinCheck);
    return PinCheck;
}(IonicNativePlugin));
export { PinCheck };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Bpbi1jaGVjay9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFpQ2IsNEJBQWlCOzs7O0lBTTdDLDZCQUFVOzs7Ozs7SUFOQyxRQUFRO1FBRHBCLFVBQVUsRUFBRTtPQUNBLFFBQVE7bUJBbENyQjtFQWtDOEIsaUJBQWlCO1NBQWxDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBQaW4gQ2hlY2tcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gaXMgZm9yIHVzZSB3aXRoIEFwYWNoZSBDb3Jkb3ZhIGFuZCBhbGxvd3MgeW91ciBhcHBsaWNhdGlvbiB0byBjaGVjayB3aGV0aGVyIHBpbi9rZXlndWFyZCBvciBwYXNzY29kZSBpcyBzZXR1cCBvbiBpT1MgYW5kIEFuZHJvaWQgcGhvbmVzLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBjb3Jkb3ZhLXBsdWdpbi1waW5jaGVjay4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW1BpbkNoZWNrIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vb2hoMmFoaC9BcHBBdmFpbGFiaWxpdHkpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgUGluQ2hlY2sgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3Bpbi1jaGVjay9uZ3gnO1xuICogaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHBpbkNoZWNrOiBQaW5DaGVjaywgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMucGluQ2hlY2suaXNQaW5TZXR1cCgpXG4gKiAgIC50aGVuKFxuICogICAgIChzdWNjZXNzOiBzdHJpbmcpID0+ICBjb25zb2xlLmxvZyhcInBpbiBpcyBzZXR1cC5cIik7LFxuICogICAgIChlcnJvcjogc3RyaW5nKSA9PiBjb25zb2xlLmxvZyhcInBpbiBub3Qgc2V0dXAuXCIpO1xuICogICApO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnUGluQ2hlY2snLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1waW5jaGVjaycsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5QaW5DaGVjaycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vc2hhbmd5aWxpbS9jb3Jkb3ZhLXBsdWdpbi1waW5jaGVjaycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBpbkNoZWNrIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogIGNoZWNrIHdoZXRoZXIgcGluL2tleWd1YXJkIG9yIHBhc3Njb2RlIGlzIHNldHVwXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc1BpblNldHVwKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19