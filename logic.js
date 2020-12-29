//Current Day Variable
var currentDay = $("#currentDay");
//Container Variable
var containerBlock = $(".container")

//Setting date and time on page open
setInterval(function() {
    currentDay.empty(); 
    currentDay.append(dayjs().format('dddd MMMM DD' + " - " +'h:mm:ss:a'));    
},1000);

//Time of day object
var timeOfDay = [
    {time: "9AM"},
    {time: "10AM"},
    {time: "11AM"},
    {time: "12AM"},
    {time: "1AM"},
    {time: "2AM"},
    {time: "3AM"},
    {time: "4AM"},
    {time: "5AM"},
];
//Block Function
function newBlocks(cube) {
    for (i=0; i < cube.length; i++) {
        //Rows displayed
        let row = $("<div>")
        row.attr("id", cube[i].time)
        row.attr("class", "row hour")
        
        //Hours of day displayed to rows
         let hours = $("<div>").text(cube[i].time)
         row.append(hours)
        
        //Text input area
         let todos = $("<textarea>")
         todos.attr("id", "input"+ cube[i].time) 
         row.append(todos)
        
        //Save button displayed
        let button = $("<button>")
        button.attr("class", "saveBtn")
        button.attr("type", "button")
        row.append(button)
        containerBlock.append(row)
    }  
     
    
}
newBlocks(timeOfDay)
