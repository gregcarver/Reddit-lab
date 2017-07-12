
//?single='https://www.reddit.com/r/leagueoflegends/.json'

//data
console.log(location.search)
var search = location.search.substring(1)

var query=JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
console.log(query)

query=query.split('#')[0]

$(document).ready(function(){
    $.ajax({
        method:"GET",
        url:'https://www.reddit.com/r/leagueoflegends/.json'
        
    })
    .then(function(success){  
        console.log(success)
        
        var myData=success.data.children
        
    
        var header=document.createElement('h2')
        var div=document.createElement('div')
        document.body.append(header)
        document.body.append(div)
      //  div.innerText=query
      //  div.innerText=myData[i].data.selftext
      //  header.innerText=myData[i].data.title
        
    
    
})
})