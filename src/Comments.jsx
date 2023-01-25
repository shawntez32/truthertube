import React from "react";

function Comments() {
    return(
        <>
        <div className="comment__section">
            <hr />
            <div className="comment___box">
                <div className="comment___add">
                <h5 className="comment___addComment">Add Comment</h5>
                <input className="comment___new" type="text" />
                    <button className="comment___button">Comment</button>
                </div>
                <div className="comment___default">
                    <div className="comment___avi">S</div>
                    <div className="comment___comment">
                        Love this video!
                    </div>
                </div>
                <div className="comment___default">
                    <div className="comment___avi">V</div>
                    <div className="comment___comment">
                        Got me again.
                    </div>
                </div>
                <div className="comment___default">
                    <div className="comment___avi">R</div>
                    <div className="comment___comment">
                        This is so old.
                    </div>
                </div>
                <div className="comment___default">
                    <div className="comment___avi">T</div>
                    <div className="comment___comment">
                        Rick rolled again? Thought I was done with this.
                    </div>
                </div>
                <div className="comment___default">
                    <div className="comment___avi">P</div>
                    <div className="comment___comment">
                        Pls stop it
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Comments;