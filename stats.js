sounds_button = document.getElementById('statePageButton')
list_of_sounds = document.getElementById('list_of_sounds')

// This two function handle listing top sounds from the database
// Request put to list

let xhttp = new XMLHttpRequest({mozSystem: true});

function getSoundsFromDB() {

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            data = JSON.parse(xhttp.responseText);
            console.log(data)
            putSoundsFromDBToList(data)
        }
    };
    xhttp.open("GET", "http://localhost:3000/getSoundData", true);
    xhttp.send();
}

getSoundsFromDB()

// get shit from the list and append li to ul with bootstrap attributes
function putSoundsFromDBToList(data) {

    var sortedArray = []

    // Lets put the JSON DATA to array for ez sort
    for(var i in data){
        sortedArray.push({value: [i, data[i]]})
    }

    // Some tricks for sorting them
    sortedArray.sort(function (a, b) {
        return b.value[1] - a.value[1]
    })
    console.log(sortedArray)

    // Now that the data is sorted nicely we will put it in a list on html
    for(var i in sortedArray){
        var node = document.createElement("LI")
        node.className = "list-group-item"
        text = "Sound_ " + sortedArray[i].value[0] + " has clicks_: " + sortedArray[i].value[1].toString()
        var textNode = document.createTextNode(text)
        node.appendChild(textNode)
        list_of_sounds.appendChild(node)
    }

    var chart = new CanvasJS.Chart("pie-chart", {
        title:{
            text: "Most favoured sound"
        },
        data: [
            {
                // Change type to "doughnut", "line", "splineArea", etc.
                type: "column",
                dataPoints: [
                    { label: sortedArray[0].value[0],  y: sortedArray[0].value[1]  },
                    { label: sortedArray[1].value[0], y: sortedArray[1].value[1]  },
                    { label: sortedArray[2].value[0], y: sortedArray[2].value[1]  },
                    { label: sortedArray[3].value[0],  y: sortedArray[3].value[1]  },
                    { label: sortedArray[4].value[0],  y: sortedArray[4].value[1]  },
                    { label: sortedArray[5].value[0],  y: sortedArray[5].value[1]  },
                    { label: sortedArray[6].value[0],  y: sortedArray[6].value[1]  },
                    { label: sortedArray[7].value[0],  y: sortedArray[7].value[1]  }
                ]
            }
        ]
    });
    chart.render();

}

function sounds_button_over() {
    sounds_button.style.backgroundColor = '#FF7F50'
    sounds_button.style.color = '#e9e9f1'
}

function sounds_button_out() {
    sounds_button.style.backgroundColor = '#e9e9f1'
    sounds_button.style.color = '#FF7F50'
}

function moveToSoundsPage() {
    window.location = 'index.html'
}