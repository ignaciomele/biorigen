import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3>Seguinos en</h3>
      <a href="https://www.facebook.com/BIOrigensma-107655211192697"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a> 
      <a href="https://www.instagram.com/biorigensma/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}