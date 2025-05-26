import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
            <footer className=" text-white text-center py-4">
              <p>&copy; {new Date().getFullYear()} Gagotias University. All rights reserved.</p>
              <div className="mt-2">
                <a
                  href="https://www.instagram.com/your_username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 hover:text-gray-400"
                >
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
                </a>
                <a
                  href="https://twitter.com/your_username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 hover:text-gray-400"
                >
                  <FontAwesomeIcon icon={faTwitter} /> Twitter
                </a>
                <a
                  href="https://www.linkedin.com/in/your_username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 hover:text-gray-400"
                >
                  <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
              </div>
            </footer>
    </div>
  )
}

export default Footer
