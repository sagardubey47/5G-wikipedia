function apiCall(){
    var value = document.getElementById("searchBox").value;

    fetch(`https://en.wikipedia.org/w/api.php?&origin=*&format=json&action=opensearch&search=${value}`)
    .then(response => response.json())
    .then(result => {
       
        let arrayTitle = result[1];
        let arrayLink  = result[3];
        let innerContent = "";
        let count = 0; 
        if(arrayLink != undefined) {
            if(arrayLink.length === 0) {
                innerContent+="<li>so sorry .. no results found</li>";
            }

            arrayLink.forEach(element => {
                //<div class="card"><div class="container"><li></li></div></div>
                innerContent+=`<li><a href=${element} target="_blank">${arrayTitle[count++]}</a></li>`
            
            });
        }

        document.getElementById("result").innerHTML = innerContent;
    })

}

//setInterval(apiCall, 500);


//document.getElementById("searchBox").addEventListener("change", apiCall);
document.getElementById("searchBox").oninput = ()=>{
    apiCall();
}
// input.addEventListener("change", apiCall);

