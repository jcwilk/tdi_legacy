(()=>{var __webpack_exports__={};self.XMLHttpRequest=function(){throw new Error("XMLHttpRequest is not allowed")},self.fetch=function(){throw new Error("Fetch API is not allowed")},self.WebSocket=function(){throw new Error("WebSocket is not allowed")},self.EventSource=function(){throw new Error("EventSource is not allowed")};const originalImportScripts=self.importScripts;self.importScripts=function(...e){for(const t of e)if(!t.startsWith("/tdi/jasmine/"))throw new Error(`importScripts is not allowed for URL: ${t}`);originalImportScripts(...e)},importScripts("/tdi/jasmine/jasmine.js");const jasmineCore=self.jasmineRequire.core(self.jasmineRequire),jasmineEnv=jasmineCore.getEnv();jasmineEnv.configure({random:!1,oneFailurePerSpec:!1,hideDisabled:!1}),self.jasmine=jasmineCore,jasmine.getEnv=()=>jasmineEnv;const jasmineInterface={describe:jasmineEnv.describe,xdescribe:jasmineEnv.xdescribe,fdescribe:jasmineEnv.fdescribe,it:jasmineEnv.it,xit:jasmineEnv.xit,fit:jasmineEnv.fit,beforeEach:jasmineEnv.beforeEach,afterEach:jasmineEnv.afterEach,beforeAll:jasmineEnv.beforeAll,afterAll:jasmineEnv.afterAll,expect:jasmineEnv.expect,pending:jasmineEnv.pending,fail:jasmineEnv.fail,spyOn:jasmineEnv.spyOn};self.onmessage=function(event){const{functionString,jasmineTestsString}=event.data;eval(functionString);const{describe,it,expect,beforeEach,afterEach}=jasmineInterface;self.describe=describe,self.it=it,self.expect=expect,self.beforeEach=beforeEach,self.afterEach=afterEach;const testResults={passedCount:0,failedCount:0,totalCount:0},customReporter={specDone:function(e){testResults.totalCount++,"passed"===e.status?testResults.passedCount++:testResults.failedCount++}};jasmine.getEnv().addReporter(customReporter),eval(jasmineTestsString),jasmine.getEnv().execute().then((()=>{self.postMessage(testResults),self.close()}))}})();