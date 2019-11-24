window.addEventListener('load',function(){
    //1,查找模板
    //2,替换模板值
    let template = document.getElementById("messageTemplate");
    let pageData = {
        message:"Hello world!"
    };
    let parse = new Parse();
    let html = parse.parse(template.innerHTML, pageData);
    document.querySelector("#app").innerHTML = html;
});

class Parse{
    
    parse(template,dataSet){
        let regExp = /\{\{\w+\}\}/g;
        if(template){
            return template.replace(regExp,function(match,index,template){
                if(match){
                    let variable = match.replace(/\{\{/,"").replace(/\}\}/,"");
                    if (dataSet && dataSet.hasOwnProperty(variable)){
                        return dataSet[variable];
                    }else{
                        return "";
                    }
                }
            });
        }else{
            return "";
        }
    }
}