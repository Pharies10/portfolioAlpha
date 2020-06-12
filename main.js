
/*





*/

var directoryButtons = [{ text: "Home", call: "red"},
                        { text: "About", call: "blue"},
                        { text: "Portfolio", call: "green"},
                        { text: "Resume", call: "yellow"},
                        { text: "Resources", call: "white"}]


var main = function()
{
    
    
       d3.select(".button_list")
        .selectAll("li")
        .data(directoryButtons)
        .enter()
        .append("li").attr("class", "nav")
        .append("button").attr("id", "linksToPages").text(function(d){
           
            return d.text
           
        }).on("click", function(d){
           
           
           d3.select("#main").style("background-color", d.call)
           
           
           
       })
    
    
    
    
    d3.select("#Home").on("click", function(){
        
        d3.select("#main").style("background-color", "green");

    });
    
    
    
}



main();






