webpackJsonp([104],{1049:function(t,e){t.exports={content:["section",["p","Choose from a set of data, e.g. Country choice."],["h3","Rules"],["ul",["li",["p","Try to use Picker to help users complete the input, to avoid the user through the keyboard directly input."]],["li",["p","DatePicker is Picker's specific pattern."]]]],meta:{category:"Components",type:"Data Entry",title:"Picker",filename:"components/picker/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","Support WEB, React-Native."],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","data"],["td","data source"],["td",["code","Array<{value, label, children: Array}>"]],["td","-"]],["tr",["td","value"],["td","the value, the format is ",["code","[value1, value2, value3]"],", corresponds to the level value of the data source"],["td","Array"],["td","-"]],["tr",["td","format"],["td","a function that formats the selected value"],["td","(val): void"],["td",["code","(values) => { return values.join(','); }"]]],["tr",["td","cols"],["td","col numbers"],["td","Number"],["td",["code","3"]]],["tr",["td","onChange"],["td","selected callback function, can use ",["a",{title:null,href:"https://github.com/react-component/form"},"rc-form"]],["td","(val): void"],["td","-"]],["tr",["td","onPickerChange"],["td","trigger on each column of selected data is changed"],["td","(val): void"],["td","-"]],["tr",["td","itemStyle"],["td","style to apply to each of the item labels"],["td","Object"],["td","-"]],["tr",["td","indicatorStyle"],["td","style of indicator"],["td","Object"],["td","-"]],["tr",["td","children"],["td","usually ",["code","List.Item"]],["td","Object"],["td",["code","List.Item"]]],["tr",["td","okText"],["td","ok text"],["td","String"],["td",["code","\u786e\u5b9a"]]],["tr",["td","dismissText"],["td","dismiss text"],["td","String"],["td",["code","\u53d6\u6d88"]]],["tr",["td","onOk"],["td","handler called when click ok"],["td","(val): void"],["td","-"]],["tr",["td","onDismiss"],["td","handler called when click cancel"],["td","(): void"],["td","-"]],["tr",["td","title"],["td","title"],["td","String"],["td","-"]],["tr",["td","extra"],["td","Picker's children is best to ",["code","List.Item"],", if not, need to be a custom component (the ",["code","onClick"],"/",["code","extra"]," props need to be handled in the component)"],["td","String"],["td",["code","\u8bf7\u9009\u62e9"]]],["tr",["td","disabled"],["td","set disabled"],["td","Boolean"],["td","false"]],["tr",["td","cascade"],["td","whether is cascade mode"],["td","Boolean"],["td","true"]]]]]}}});