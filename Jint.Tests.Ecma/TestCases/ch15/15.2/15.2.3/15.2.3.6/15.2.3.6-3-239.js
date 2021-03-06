/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-3-239.js
 * @description Object.defineProperty - 'set' property in 'Attributes' is own data property that overrides an inherited data property (8.10.5 step 8.a)
 */


function testcase() {
        var obj = {};
        var data1 = "data";
        var data2 = "data";
        var proto = {
            set: function (value) {
                data1 = value;
            }
        };

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;

        var child = new ConstructFun();
        child.set = function (value) {
            data2 = value;
        };

        Object.defineProperty(obj, "property", child);

        obj.property = "overrideData";

        return obj.hasOwnProperty("property") && data1 === "data" && data2 === "overrideData";
    }
runTestCase(testcase);
