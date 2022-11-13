//getting page elements
var time = $("#time-container");
var curTimeContainer = $("#cur-day");

//current date
var curTime = moment().format('MMMM Do YYYY, h:mm:ss a');
var curHour = moment().hour();
curTimeContainer.text(`It is currently ${curTime}`);


//initial hour iteration logic for each row
var h = 9;
var i = 9;
var ampm = "am";
while (h != 0)

    //create the hourly div
    var newInput = document.createElement("div");
    newInput.classList.add("row"); 
    //create the hour element within our new row
    var newHour = document.createElement("span");
    newHour.className.add("hour","center");
    newHour.innerHTML = h + ampm;
    newInput.append(newHour);
    //create hourly content field
     var newInputText = document.createElement("input")
     newInputText.classList.add("content","center", "transparent");
    newInputText.setAttribute("num", i - 9);
    //load values from storage
    var savefile = localStorage.getItem(`item${i - 9}`);
    if (savefile != null)
    {
        newInputText.value = savefile;
    }
    newInput.append(newInputText)
    //create the save button for each row
    var saveButton = document.createElement("button");
    saveButton.classList.add("save-btn","center");
    saveButton.setAttribute("num", i - 9);
    saveButton.innerHTML = "save"
    newRow.append(saveButton)

    //set the row color based on time
    
    
    

    //add elements to the page
    

    //hour logic, h is 12-hour for displaying while i is 24-hour for less/greater-than comparison
    
    
    
    
}

//save listener
$(".save-btn").click(function()
{
    var saveID = this.getAttribute("num");
    var saveContent = $(`input[num="${saveID}"]`)[0].value;
    localStorage.setItem(`item${saveID}`, saveContent);
    console.log(saveContent);
});

//delete data listener
$("#erase-btn").click(function()
{
    localStorage.clear();
    $(".content").each(function()
    {
        this.value = "";
    });
});