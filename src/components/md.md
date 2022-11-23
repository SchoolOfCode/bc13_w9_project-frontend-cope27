The ability to input a post (send it to the project board)

How do we get the users input in the form from CreatePost to go to the ProjectPost

What we know
- Users create data in the Create Post function (via HTML inputs)
- Data is entered via
    - inputs x 2
    - select boxes x 2
- useStates for inputs and select boxes will be in CreatePost
- Submit Button triggers the data of the current inputs to flow
- Data entered in CreatePost will be sent to the database (for now sending to the App level)

What we don't know
- how a checkbox data is changed in a useState(useReducer)
- do we use useState or useReducer for the checkbox states