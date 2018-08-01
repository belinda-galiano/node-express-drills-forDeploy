## Instructions

Included are some partially complete apps that return hard-coded data from servers. Each one has a critical piece missing, which you need to fix. Each finished solution should contain:

* The data from the `rooms.csv` file represented as a JavaScript object
* A light web server
* The entire collection (as JSON) should return when you `GET` the index (`/`) of the server
* An individual item (as JSON) should return when you `GET` the id of that item (eg., `/4`) 
* An error message (as JSON) should return when you `GET` the id of an item that doesn't exist (eg., `/100`, `/forty-five`, etc.) 
* CORS headers on the response
* You should be able to deploy your solution to the public internet
* You should test your API with a headless browser like Postman

## Notes

* A complete example is availabe in the `example-app` folder
* You may use a separate module for the data or not

## Examples

Your returned data list should look like this:

```
{
    data: [{
        "id": 1,
        "firstAttribute": "firstValue",
        "secondAttribute": "secondValue"
    },{
        "id": 2,
        "firstAttribute": "firstValue",
        "secondAttribute": "secondValue"
    }]
}
```

Your returned data item should look like this:

```
{
    data: {
        "id": 1,
        "firstAttribute": "firstValue",
        "secondAttribute": "secondValue"
    }
}
```

Your returned error should look like this:

```
{
    error: {
        "message": "No record found!"
    }
}
```

## Rubric

* [ ] Returns list of rooms
* [ ] Returns single room
* [ ] Uses a top-level `data` attribute
* [ ] Attributes are camelCased
* [ ] Data values are correct
* [ ] Returns CORS headers
* [ ] Returns 200 status codes for data
* [ ] Returns 404 status codes for invalid IDs
* [ ] Deployed
* [ ] Correct indentation
* [ ] Consistent semi-colon usage
* [ ] Descriptive names
* [ ] No `console.log` statements
