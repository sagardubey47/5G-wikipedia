function apiCall(){
    var value = document.getElementById("searchBox").value;

    fetch(`https://en.wikipedia.org/w/api.php?&origin=*&format=json&action=opensearch&search=${value}`)
    .then(response => response.json())
    .then(result => {

        let arrayLink = result[3];
        let innerContent = "";
        arrayLink.forEach(element => {
            //<div class="card"><div class="container"><li></li></div></div>
            innerContent+=`<li><a href=${element} target="_blank">${element}</a></li>`
        
        });

        document.getElementById("result").innerHTML = innerContent;
    })

}