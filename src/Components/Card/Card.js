import React, { useState } from 'react';
import './Card.css'



const Card = (props) => {
    const [comment, setComment] = useState("");
    return (
        <>
            <div className="card">
                <div className="image" onClick={() => props.onImageClick(props.url)}>
                    <img src={props.url} alt="Avatar" style={{ width: "100%", height: "150px" }} ></img>
                </div>
                <div className="container">
                    <div className="picture-subInfo">
                        <div className="like-styles">
                            {props.likes}
                            <div onClick={() => props.any(props.id)}>
                                {props.liked ? "Unlike" : "Like"}
                            </div>
                        </div>
                        <div className="categoryTypeStyles">{props.category}</div>
                    </div>
                    <div className="CommentBox">
                        <input placeholder={"Type your comment here..."} className="CommentText" type="text" value={comment} onChange={(event) => setComment(event.target.value)} />
                        <div className="CommentButton" onClick={() => { props.onPostClicked(props.id, comment) }} >Post </div>
                    </div>
                    <div className="comments">{props.comments
                        .map((item, key) => <div style={{ backgroundColor: "wheat", borderBottom: "1px solid black" }}>
                            <div className="comment">{item}</div>
                        </div>)}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;