define(["jquery", "qlik"], function($, qlik) {
	'use strict';
	return {
		initialProperties : {
			version: 1.0,
			qHyperCubeDef : {
				qDimensions : [],
				qMeasures : [],
				qInitialDataFetch : [{
					qWidth : 3,
					qHeight : 3333
				}]
			}
		},
		definition: {
			type: "items",
			component: "accordion",
			items: {
				dimensions: {
					uses: "dimensions",
					min: 0,
				},
				measures: {
					uses: "measures",
					min: 0,
				},
				sorting: {
					uses: "sorting"
				},
				addons: {
					uses: "addons",
					items: {
						dataHandling: {
							uses: "dataHandling"
						}
				  }
				},
				settings: {
					uses: "settings",
					items : {
						initFetchRows : {
							ref : "qHyperCubeDef.qInitialDataFetch.0.qHeight",
							label : "Initial fetch rows",
							type : "number",
							defaultValue : 3333
						},
						initFetchCols : {
							ref : "qHyperCubeDef.qInitialDataFetch.0.qWidth",
							label : "Initial fetch cols",
							type : "number",
							defaultValue : 3
						}
					}
				},
				customProperties : {
					component: "expandable-items",
					label: "JavaScript Properties",
				  type : "items",
					items: {
						HtmlBody : {
							ref: "HtmlBody",
							label: "HtmlBody",
							type: "string",
							expression: "optional",
							defaultValue: "='<button style=\"width:100%\" id=\"abcdefg\">&lt;Action&gt;</button>'"
						},
						JSBody: {
							ref: "JavaScriptBody",
							label: "JavaScriptBody",
							desc:"JavaScriptBody",
							type: "string",
							expression: "optional",
							defaultValue: "='\nfunction myEcho(str) {\n\treturn str+\"!!\";\n}\n'"
						},
						JSAction: {
							ref: "JavaScriptAction",
							label: "JavaScriptAction",
							desc:"JavaScriptAction",
							type: "string",
							expression: "optional",
							defaultValue: "='\nvar self = arguments[0];\nvar qlik = arguments[1];\nvar $element = arguments[2];\nvar layout = arguments[3];\nvar $ = arguments[4];\n//var app = qlik.currApp();\n//var rows = self.backendApi.getRowCount();\n$element.find(\"#abcdefg\").on(\"qv-activate\", function() {\n\tvar x = \"Qlik\";\n\talert(myEcho(x));\n});\nreturn new qlik.Promise(function (resolve, reject) {\n\tresolve();\n});\n'"
						}
					}
				}
			}
		},
		support: {
			snapshot: true,
			export: true,
			exportData: true
		},
		paint: function($element, layout) {
			var self = this;
			var html = layout.HtmlBody;
			html += '<script>'+layout.JavaScriptBody+'</script>';
			$element.html(html);
			var func = new Function(layout.JavaScriptAction);
			return func.call(null, self, qlik, $element, layout, $);
		}
	};
});
