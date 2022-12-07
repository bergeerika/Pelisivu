import "../components/App.css";
import { useRef } from "react";

const Forum = (props) => {

  const gameRef = useRef("");
  const postRef = useRef("");
  const posterRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    const comment = {
      game: gameRef.current.value,
      post: postRef.current.value,
      poster: posterRef.current.value,
    };

    props.onAddComment(comment);

    gameRef.current.value = "";
    postRef.current.value = "";
    posterRef.current.value = "";
  };

  return (
    <div className="body">
      <main className="layout ">
        <h1>Forum</h1>

        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="text">Game name:</label>
            <textarea rows="1" name="game" id="texta1" ref={gameRef}></textarea>
          </div>
          <div>
            <div>
              <label htmlFor="text">Posters nickname:</label>
              <textarea
                rows="1"
                name="poster"
                id="texta1"
                ref={posterRef}
              ></textarea>
            </div>
            <label htmlFor="text">Comment about game:</label>
            <textarea rows="1" name="post" id="texta2" ref={postRef}></textarea>
          </div>

          <button>Add Comment</button>
        </form>
        <hr />
      </main>

      <ul>
        {props.comments.map((comment) => (
          <div className="comments " key={comment.id}>
            <h3>Game: {comment.game}</h3>
            <h5>Posters Nickname: {comment.poster}</h5>
            <h3>Comment: {comment.post}</h3>
            <br></br>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Forum;
