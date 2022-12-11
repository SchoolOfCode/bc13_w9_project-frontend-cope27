
function Comments() {
  return (<>
    
    <div className="post">
        <h1>Post Goes here</h1>
    </div>

    <div className="comments-container">
       
       <div className="comment">
           <h1>Username</h1>
           <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It wa</p>
       </div>
   </div>

    <div className="newComment">
        
        <label >Username</label>
        <input name="username" type="text"/>
        <label >Your comment:</label>
        <textarea id="commentText" name="commentText" rows="4" cols="80">
        </textarea>
        <button onClick={console.log("Submit pressed")}>Submit</button>
    </div>
</>
  )
}

export default Comments;