

$(document).ready(function(){
    $.ajax({
        method:"GET",
        url:'https://www.reddit.com/r/leagueoflegends/.json'
    })
    .then(function(success){  
        console.log(success)
        console.log((success.data.children))
    //    var posts=JSON.parse((success.data.children))
    //    console.log(posts)
    for(var i=0;i<10;i++){
        var div=document.createElement('div')
        var header=document.createElement('h1')
        document.body.append(header)
        header.append(div)
        div.innerHTML=success.data.children[i]
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