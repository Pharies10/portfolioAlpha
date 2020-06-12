
/*





*/

var directoryButtons = [{ text: "Home", call: "red"},
                        { text: "About", call: "blue"},
                        { text: "Portfolio", call: "green"},
                        { text: "Resume", call: "yellow"},
                        { text: "Resources", call: "white"}]


var currentWindow = directoryButtons[0].text

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
           
           d3.select("#"+currentWindow).style("visibility", "hidden")
           d3.select("#"+d.text).style("visibility", "visible")
           currentWindow = d.text;
           
           
           
       })
    
    
    
    
    

    
    
    
}

var about_button = function() {
    d3.select("#"+currentWindow).style("visibility", "hidden")
    d3.select("#About").style("visibility", "visible")
    currentWindow = "About";
}

main();






