import React, { useState } from "react";
import Menu from "../common/Menu";
import {
  Container,
  Form,
  Button,
  Col,
  Badge,
  ProgressBar,
  Alert,
} from "react-bootstrap";
import firebase from "firebase/app";
import { isAuthenticated } from "../auth/helper";
const UploadDetails = () => {
  const [show, setShow] = useState(true);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    description: "",
    category: "",
    state: "",
    location: "",
    contactnumber: "",
    error: false,
    success: false,
  });
  let multi = [];
  let isEnabled = false;
  const [pro, setPro] = useState(0);
  const {
    firstname,
    lastname,
    description,
    category,
    state,
    location,
    contactnumber,
    error,
    success,
  } = data;

  const [multiImage, setMultiImage] = useState(null);
  const onImageUpload = (e) => {
    multi = Array.from(e.target.files);
    console.log(multi);

    setMultiImage(multi);
  };
  if (
    firstname &&
    lastname &&
    description &&
    category &&
    state &&
    location &&
    contactnumber &&
    multiImage
  ) {
    isEnabled = true;
  } else {
    isEnabled = false;
  }
  const { user } = isAuthenticated();
  const welComeUser = () => {
    return (
      <h2>
        <p>
          Hi, <Badge variant="success">{user.firstname + "!"}</Badge> Please
          Enter All the Details Carefully
        </p>
      </h2>
    );
  };
  const inputChange = (name) => (event) => {
    const value = event.target.value;
    setData({ ...data, [name]: value });
  };
  const handleUpload = (e) => {
    e.preventDefault();
    console.log(multiImage);
    for (let i = 0; i < multiImage.length; i++) {
      uploadImageAsPromise(multiImage[i]);
    }
    var postData = {
      firstname,
      lastname,
      category,
      description,
      contactnumber,
      location,
      state,
    };
    var newPostKey = firebase.database().ref().child(`details`).push().key;
    var updates = {};
    updates[`${trimName}/` + newPostKey] = postData;
    return firebase.database().ref().update(updates);
  };

  var str = user.email;
  var nameMatch = str.match(/^([^@]*)@/);
  var trimName = nameMatch ? nameMatch[1] : null;
  const uploadImageAsPromise = (imageFile) => {
    return new Promise(function (resolve, reject) {
      var storageRef = firebase.storage().ref(trimName + "/" + imageFile.name);

      //Upload file
      var task = storageRef.put(imageFile);

      //Update progress bar
      task.on(
        "state_changed",
        function progress(snapshot) {
          var percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPro(percentage);
        },
        function error(err) {
          setData({ ...data, error: true });
          console.log(err);
        },
        function complete() {
          setData({ ...data, error: false });
          setData({ ...data, success: true });
        }
      );
    });
  };

  const ShowAlertBox = () => {
    if (error === true) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
      );
    } else {
      if (success === true) {
        return (
          <Alert variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Congratulation!! You Successfully Submit Your Form</Alert.Heading>
            <p>
              Your form will be soon review By Our Team. We will send response to your registered mail
              address. Thanks for all the contributions and have a nice day.
            </p>
          </Alert>
        );
      } else {
        return null;
      }
    }
  };
  return (
    <div>
      <Menu />

      <Container style={{ marginTop: "100px" }}>
        {isAuthenticated() && welComeUser()}
        <p>
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat."
        </p>
        <hr />
        <ShowAlertBox />
        <ProgressBar now={pro} />
        <Form style={{ marginTop: "20px" }}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>first name</Form.Label>
              <Form.Control
                type="text"
                value={firstname}
                onChange={inputChange("firstname")}
                placeholder="Enter first name"
                required="true"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>last name</Form.Label>
              <Form.Control
                type="text"
                value={lastname}
                onChange={inputChange("lastname")}
                placeholder="Enter last name"
                required="true"
              />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              row="3"
              value={description}
              onChange={inputChange("description")}
              placeholder="Enter Description"
              required="true"
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Category</Form.Label>
              <Form.Control
                value={category}
                onChange={inputChange("category")}
                type="text"
                required="true"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control
                value={state}
                onChange={inputChange("state")}
                type="text"
                required="true"
              ></Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                value={location}
                onChange={inputChange("location")}
                required="true"
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                value={contactnumber}
                onChange={inputChange("contactnumber")}
                type="number"
                required="true"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Upload File</Form.Label>
              <Form.Control
                type="file"
                name="photos"
                min="1"
                max="5"
                onChange={onImageUpload}
                multiple
                required="true"
              ></Form.Control>
            </Form.Group>
          </Form.Row>
          <Button
            disabled={!isEnabled}
            variant="primary"
            onClick={(e) => handleUpload(e)}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default UploadDetails;
