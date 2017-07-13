
//?single='https://www.reddit.com/r/leagueoflegends/.json'

//data
console.log(location.search)
var search = location.search.substring(1)
var query=JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
console.log(query)

//query=query.split('#')[0]

$(document).ready(function(){
    $.ajax({
        method:"GET",
        url:'https://www.reddit.com'+query.url+'.json'
        
    })
    .then(function(success){  
        console.log(success)
     //   console.log(myData)
     //   var myData=success.data.children    
        var header=document.createElement('h2')
        var div=document.createElement('div')
        document.body.append(header)
        document.body.append(div)
        div.innerText=success[0].data.children[0].data.selftext
        header.innerText=success[0].data.children[0].data.title
     //   var a=document.createElement('a')
      //  a.text=myData[i].data.title
      //  a.setAttribute('href',single.html?url=+myData.data.permalink)
     //  a.href="single.html?url=" + myData[i].data.permalink
   //     appendLink.append(a)
    

      
    
    
})
})


     //   var myData=success.data.children
        
    
    /*   var header=document.createElement('h2')
        var div=document.createElement('div')
       document.body.append(header)
        header.append(div)
        div.innerHTML='https://www.reddit.com'+query.url+'.json'*/
      //  div.innerText=myData[i].data.selftext
      //  header.innerText=myData[i].data.title