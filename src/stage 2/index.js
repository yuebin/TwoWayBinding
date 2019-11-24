window.addEventListener('load',function(){
    let div = document.createElement("div");
    let span = document.createElement("span");
    let input = document.createElement("input");

    span.setAttribute("u-bind","inputValue")
    div.appendChild(span);
    div.appendChild(input);
    
    document.querySelector("#app").appendChild(div);

    input.addEventListener("input", function (event) {
        let newValue = event.target.value;
        span.innerText = newValue;
    });
});