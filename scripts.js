$.ajax({
    method:"GET",
    url:'https://www.reddit.com/r/leagueoflegends/.json'
})
.then(function(success){
    console.log(success)
})