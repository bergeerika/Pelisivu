import "./App.css";
import { useRef } from "react";

const AddGame = (props) => {
  const nameRef = useRef("");
  const devRef = useRef("");
  const platRef = useRef("");
  const relRef = useRef("");
  const imgRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    const game = {
      name: nameRef.current.value,
      dev: devRef.current.value,
      plat: platRef.current.value,
      rel: relRef.current.value,
      img: imgRef.current.value,
    };

    props.onAddGame(game);

    nameRef.current.value = "";
    devRef.current.value = "";
    platRef.current.value = "";
    relRef.current.value = "";
    imgRef.current.value = "";
  };

  return (

    <div className="body">
      <h1>Add Games</h1>

    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="text">Game name</label>
        <textarea rows="1" id="name" ref={nameRef}></textarea>
      </div>
      <div>
      <label htmlFor="text">Developer(s)</label>
        <textarea rows="1" id="dev" ref={devRef}></textarea>
      </div>
      <div>
      <label htmlFor="text">Platform(s)</label>
        <textarea rows="1" id="plat" ref={platRef}></textarea>
      </div>
      <div>
      <label htmlFor="text">Release</label>
        <textarea rows="1" id="rel" ref={relRef}></textarea>
      </div>
      <div>
      <label htmlFor="text">Image (link)</label>
        <textarea rows="1" id="img" ref={imgRef}></textarea>
      </div>

      <button>Add Game</button>
    </form>
    </div>
  );
};

export default AddGame;
