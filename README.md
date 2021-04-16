# QS_JavaScriptButton_Extension
Introduction of an Extension for Qlik Sense
Something you think that Qlik would have. But, it does not exist…
For example, generic extension you can put any HTML/JavaScript contents into
The simplest and most generic/programmable Extension I made.
You can fully take advantage of Qlik APIs and JavaScript tech on the fly
Reduce the work/process burden when developing/testing/updating Extensions
You just need to write(paste) some HTML/JavaScript as Qlik’s Expression string 
Suitable for Qlik Sense SaaS. No need to use DevHub of Qlik Sense Desktop
Extremely programmer friendly!!

Implementation of this Extension – Extremely Simple
Just 100 lines of code with sample HTML/JavaScript contents
Core part of this extension, paint method, is less than 10 lines 

Use cases & Tips
Default properties, and Expression with Variable/Function, and launch Debugger
Use of Qlik API to access HyperCube(Dim&Measure)
Ajax call with jQuery(built-in) to invoke external REST endpoint
Simple visualization with D3.js(built-in)
Use of RequireJS(built-in) to load external JavaScript libs & draw chart
In SaaS, for loading external resources, and accessing external endpoints from Web browser, Admin needs to set Contents Security Policy at console
