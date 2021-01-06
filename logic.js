//Current Day Variable
var currentDay = $("#currentDay");
//Container Variable
var containerBlock = $(".container")

//Set colors
function currentColors() {
    for (let i=0; i<9; i++) {
        let newTime = $(".hour")[i].attributes[2].value
        if(parseInt(newTime) === parseInt(dayjs().format('H'))) {
            $(".hour")[i].className = "row hour present"
        }else if (parseInt(newTime) < parseInt(dayjs().format('H'))) {
            $(".hour")[i].className = "row hour past"
        }else {
        $(".hour")[i].className = "row hour future"
            }
    } 
}

//Time of day object
var timeOfDay = [
    {time: "9AM", key: 9},
    {time: "10AM", key: 10},
    {time: "11AM", key: 11},
    {time: "12PM", key: 12},
    {time: "1PM", key: 13},
    {time: "2PM", key: 14},
    {time: "3PM", key: 15},
    {time: "4PM", key: 16},
    {time: "5PM", key: 17},
    

];
//Block Function
function newBlocks(cube) {
    for (i=0; i < cube.length; i++) {
        //Rows displayed
        let row = $("<div>")
        row.attr("id", cube[i].time)
        row.attr("class", "row hour")
        row.attr("key", timeOfDay[i].key)
        
        //Hours of day displayed to rows
         let hours = $("<div>").text(cube[i].time)
         hours.attr("class", "col-2")
         row.append(hours)
        
        //Text input area
         let todos = $("<textarea>")
         todos.attr("id", "text-area")
         todos.attr("class", "col-8") 


        //get item frmom localStorage
         todos.val(localStorage.getItem(cube[i].key))
         row.append(todos)

        //Save button displayed
        let button = $("<button>")
        
        button.attr("class", "saveBtn col-2")
        button.attr("type", "button")
        
        row.append(button)
        containerBlock.append(row)
    }  
}
newBlocks(timeOfDay)


//Setting date and time on page open
setInterval(function() {
    currentDay.empty(); 
    currentDay.append(dayjs().format('dddd MMMM DD' + " - " +'h:mm:ss:a')); 
    currentColors();   
},1000);

currentColors()

$(".saveBtn").on("click", function(){
 
    var value = $(this).siblings("#text-area").val();
    var key =  $(this).parent().attr("key")
    console.log(key, value);

    localStorage.setItem(key, value)

})