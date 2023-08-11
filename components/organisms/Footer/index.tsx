import React from 'react'

export default function index() {
  return (
    <>
      <div className="footer">
        <div className="container px-4 sm:px-8">
          <h4 className="mb-8 lg:max-w-3xl lg:mx-auto">
          Anda dapat mengetahui informasi  kami melalui icon dibawah ini, atau dapat menghubungi kami di <span></span>
            <a
              className="text-indigo-600 hover:text-gray-500"
            >
              support@cava.com
            </a>
          </h4>
          <div className="social-container">
            <span className="fa-stack">
              <a href="https://www.facebook.com/">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-facebook-f fa-stack-1x"></i>
              </a>
            </span>
            <span className="fa-stack">
              <a href="https://twitter.com">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-twitter fa-stack-1x"></i>
              </a>
            </span>
            <span className="fa-stack">
              <a href="https://www.instagram.com">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-instagram fa-stack-1x"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
