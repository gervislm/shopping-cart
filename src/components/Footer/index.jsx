import { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer bg-neutral text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://github.com/gervislm" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.24 1.84 1.24 1.07 1.836 2.807 1.306 3.492.998.107-.775.418-1.306.762-1.606-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.124-.304-.535-1.527.117-3.18 0 0 1.007-.323 3.3 1.23a11.51 11.51 0 013.005-.404c1.02.005 2.045.137 3.005.404 2.29-1.554 3.297-1.23 3.297-1.23.654 1.653.243 2.876.12 3.18.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.623-5.475 5.92.43.372.814 1.104.814 2.228 0 1.61-.015 2.91-.015 3.307 0 .32.218.694.825.577C20.565 21.797 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          <a href="https://www.instagram.com/gervislm/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.96.24 2.41.403a4.92 4.92 0 011.728 1.013 4.92 4.92 0 011.013 1.728c.163.45.35 1.24.403 2.41.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.96-.403 2.41a4.92 4.92 0 01-1.013 1.728 4.92 4.92 0 01-1.728 1.013c-.45.163-1.24.35-2.41.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.96-.24-2.41-.403a4.92 4.92 0 01-1.728-1.013 4.92 4.92 0 01-1.013-1.728c-.163-.45-.35-1.24-.403-2.41-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.96.403-2.41a4.92 4.92 0 011.013-1.728 4.92 4.92 0 011.728-1.013c.45-.163 1.24-.35 2.41-.403 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.013-4.947.072-1.273.058-2.144.267-2.905.573a7.38 7.38 0 00-2.664 1.751 7.38 7.38 0 00-1.751 2.664c-.306.761-.515 1.632-.573 2.905-.059 1.28-.072 1.688-.072 4.947s.013 3.667.072 4.947c.058 1.273.267 2.144.573 2.905a7.38 7.38 0 001.751 2.664 7.38 7.38 0 002.664 1.751c.761.306 1.632.515 2.905.573 1.28.059 1.688.072 4.947.072s3.667-.013 4.947-.072c1.273-.058 2.144-.267 2.905-.573a7.38 7.38 0 002.664-1.751 7.38 7.38 0 001.751-2.664c.306-.761.515-1.632.573-2.905.059-1.28.072-1.688.072-4.947s-.013-3.667-.072-4.947c-.058-1.273-.267-2.144-.573-2.905a7.38 7.38 0 00-1.751-2.664 7.38 7.38 0 00-2.664-1.751c-.761-.306-1.632-.515-2.905-.573-1.28-.059-1.688-.072-4.947-.072z" />
              <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998z" />
              <circle cx="18.406" cy="5.594" r="1.44" />
            </svg>
          </a>

          <a href="https://www.facebook.com/gervislm" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </nav>
      </footer>
    );
  }
}
