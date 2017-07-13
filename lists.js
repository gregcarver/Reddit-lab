

$(document).ready(function(){
    $.ajax({
        method:"GET",
        url:'https://www.reddit.com/r/leagueoflegends/.json'
    })
    .then(function(success){  
        console.log(success)
        var myData=success.data.children
    for(var i=0;i<10;i++){
        var header=document.createElement('h2')
        var div=document.createElement('div')
        document.body.append(header)
        document.body.append(div)
        div.innerText=myData[i].data.selftext
        var appendLink=$(header)
        var a=document.createElement('a')
        a.text=myData[i].data.title
      //  a.setAttribute('href',single.html?url=+myData.data.permalink)
       a.href="single.html?url=" + myData[i].data.permalink
        appendLink.append(a)
    }
    
})
})



/*   var Post=function(){
    var p=posts;
    console.log(posts)
    this.value=p;
    this.div.document.createElement('div')
    this.div.id='post'
    document.body.append(this.div)
    this.div.innerHTML=p
}
Post.prototype.appear=function(){
    this.document.body.innerHTML=this.value;
}
posts.forEach(function(element) {
    element.appear()
});*/
    
      //  header.innerText=myData[i].data.title

       
            //   var image=document.createElement('IMG')
            //    image.src=myData[i].data.url
    //    image.id="myIMG"
     //   div.appendChild(image)