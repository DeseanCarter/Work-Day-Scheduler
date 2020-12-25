//Current Day Variable
var currentDay = $("#currentDay");
//Container Variable
var containerBlock = $(".container")

//Setting date and time on page open
setInterval(function() {
    currentDay.empty(); 
    currentDay.append(dayjs().format('dddd MMMM DD' + " - " +'h:mm:ss:a'));    
},1000);