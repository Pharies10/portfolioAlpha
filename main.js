
/*





*/

var directoryButtons = [{ text: "Home", call: 0},
                        { text: "About", call: 1},
                        { text: "Portfolio", call: 2},
                        { text: "Resume", call: 3},
                        { text: "Resources", call: 4}]


var currentWindow = directoryButtons[0].text
window.history.pushState({ 'page_id': 5, 'user_id': 5 }, "Start")

var gate = true

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
           var state = { 'page_id': d.call, 'user_id': 5 }
           window.history.pushState(state, d.text)
           gate = false
           
           
           
       })
    
    
      window.addEventListener("popstate", function(d) {
                                
                               
                                if (gate == true){
                                    window.history.back()
                                    
                                    
                                }
                                if (d.state.page_id == 5) {
                                    
                                    callWindow(0)
                                    gate = true
                                    
                                    
                                    
                                }
                                else {
                                    callWindow(d.state.page_id)
                                }
          
          
                                })
    
    

    
    
    
}

var callWindow = function(page) {
    d3.select("#"+currentWindow).style("visibility", "hidden")
    d3.select("#"+directoryButtons[page].text).style("visibility", "visible")
    currentWindow = directoryButtons[page].text;
    
    
    
    
    
}


var about_button = function() {
    d3.select("#"+currentWindow).style("visibility", "hidden")
    d3.select("#About").style("visibility", "visible")
    currentWindow = "About";
}

main();






