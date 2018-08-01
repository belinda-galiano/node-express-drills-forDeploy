const express = require("express");
const cors = require("cors");

var meetingRooms;

function findById(data, id){
    for (let i = 0; i < data.length; i++){
        if (data[i].id == id){
            return data[i];
        }
    }
    return null;
}

const app = express();
app.use(cors());

app.get("/", function (request, response) {
    response.json({data: meetingRooms});
});

app.get("/:id", function (request, response) {
    var record = findById(meetingRooms, request.params.id);
    if (!record){
        response.status = 404;
        response.json({
            error: {
                message: "No record found!"
            }
        });
    }

    response.json({data: record});
});

app.listen(9000);
