import React from "react";
import VideoRow from "./VideoRow";
import "./Video.css";

function Comments() {
    return(
        <>
        <div className="comment___section">
            <hr />
            <div className="comment___box">
            <h3>Comments</h3>
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
                <hr />
                <div className="comment___default">
                    <div className="comment___avi">V</div>
                    <div className="comment___comment">
                        Got me again.
                    </div>
                </div>
                <hr />
                <div className="comment___default">
                    <div className="comment___avi">R</div>
                    <div className="comment___comment">
                        This is so old.
                    </div>
                </div>
                <hr />
                <div className="comment___default">
                    <div className="comment___avi">T</div>
                    <div className="comment___comment">
                        Rick rolled again? Thought I was done with this.
                    </div>
                </div>
                <hr />
                <div className="comment___default">
                    <div className="comment___avi">P</div>
                    <div className="comment___comment">
                        Pls stop it
                    </div>
                </div>
                <hr />
            </div>
            <h3 className="comment___related">Related Videos</h3>
            <VideoRow
                 image={"https://tse4.mm.bing.net/th?id=OIP.QdUYczu6fvdOQ94jXf8hEQHaEK&pid=Api&P=0"}
                 title={"Nothing but politics"}
                 channel={"Mr.Krank"}
                 views={"657"}
                 timestamp={"3 weeks ago"}
                 />
                <VideoRow
                 image={"https://tse4.mm.bing.net/th?id=OIP.GQqEKlPCowzJXcVqVzpcrQHaEK&pid=Api&P=0"}
                 title={"2 sides of the same coin."}
                 channel={"Veloc"}
                 views={"2k"}
                 timestamp={"3 months ago"}
                 />
                <VideoRow
                 image={"https://tse4.mm.bing.net/th?id=OIP.KQEdqZRwQyIpSY16dr9uoQHaE8&pid=Api&P=0"}
                 title={"Showtime?!"}
                 channel={"Mr.Krank"}
                 views={"13k"}
                 timestamp={"2 weeks ago"}
                 />
            
        </div>
        </>
    )
}

export default Comments;