
class Parse {

    parse(template, dataSet) {
        let regExp = /\{\{\w+\}\}/g;
        if (template) {
            return template.replace(regExp, function (match, index, template) {
                if (match) {
                    let variable = match.replace(/\{\{/, "").replace(/\}\}/, "");
                    if (dataSet && dataSet.hasOwnProperty(variable)) {
                        return dataSet[variable];
                    } else {
                        return "";
                    }
                }
            });
        } else {
            return "";
        }
    }
}

let pageData = {
    message: "Hello world!"
};
let parse = new Parse();

window.addEventListener('load',function(){
    //1,查找模板
    //2,替换模板值
    let template = document.getElementById("messageTemplate");
    
    let html = parse.parse(template.innerHTML, pageData);
    document.querySelector("#app").innerHTML = html;
});

document.addEventListener("input",function(event){
    let newValue = event.target.value;
    let target = event.target;
    console.error(target.value);
    let moduleTemplate = target.getAttribute("u-module");
    pageData[moduleTemplate] = target.value;


    let template = document.getElementById("messageTemplate");
    let html = parse.parse(template.innerHTML, pageData);
    document.querySelector("#app").innerHTML = html;
    
});

var getValue = function(parent,key){
    if(parent && parent.hasOwnProperty(key)){
        return parent[key];
    }else{
        return "";
    }
}
