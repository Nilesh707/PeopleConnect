import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Container  fluid style={{marginTop:"100px",background:"#2B2D2F"}} class="footer">
        <footer class="footer-one">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h4 class="text-white">Contact Us</h4>
                <p class="text-white">+9100000009</p>
              </div>
              <div class="col l6 s12">
                <h4 class="text-white">Social Media</h4>
                <ul>
                  <li>
                    <a href="#" class="text-white">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-white">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-white">
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row footer-two">
            <div class="col l6 s12">
              <p class="text-white">&copy; PeopleConnect</p>
            </div>
            <div class="col l6 s12">
              <p class="text-white">&copy; Designed By PeopleConnect</p>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
