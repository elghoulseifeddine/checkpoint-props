import React, { useState } from "react";
import Modal from "react-modal";
import { Form, Button, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const MovieAdd = ({ addMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [affiche, setAffiche] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const submitMovie = (e) => {
    e.preventDefault();
    let newMovie = {
      id: uuidv4(),
      title,
      affiche,
      description,
    };

    addMovie(newMovie);
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Add Movie</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Form>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Title : </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the title ..."
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Affiche :</Form.Label>
            <Form.Control
              placeholder="Enter Affiche ..."
              onChange={(e) => setAffiche(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label> Description : </Form.Label>
            <Form.Control
              placeholder="Enter description ..."
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={(e) => submitMovie(e)}
          >
            Add
          </Button>
        </Form>
        {/* <h1> Add Student </h1>
        <form>
          <input placeholder="Enter image adress..." />
          <input placeholder="Enter your first name ..." />
          <input placeholder="Enter your secondName ..." />

          <button>Submit</button>
        </form> */}
      </Modal>
    </div>
  );
};

export default MovieAdd;