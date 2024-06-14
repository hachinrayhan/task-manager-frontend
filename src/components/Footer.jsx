const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 mt-8">
      <div className="container mx-auto text-center text-white">
        <p className="mb-4">© 2024 Task Manager. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 2.24A2.24 2.24 0 0019.76 0H4.24A2.24 2.24 0 002 2.24V19.76A2.24 2.24 0 004.24 22h8.74v-7.29H10.7v-3h2.28v-2.1c0-2.24 1.33-3.47 3.37-3.47.96 0 1.96.17 1.96.17v2.17h-1.1c-1.09 0-1.42.68-1.42 1.37v1.53h2.7l-.43 3H14.8V22h4.96A2.24 2.24 0 0022 19.76V2.24z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.95 4.57a10 10 0 01-2.83.78 4.92 4.92 0 002.17-2.71 9.91 9.91 0 01-3.12 1.19 4.92 4.92 0 00-8.38 4.48A13.94 13.94 0 011.67 3.15a4.93 4.93 0 001.52 6.57 4.93 4.93 0 01-2.23-.61v.06a4.92 4.92 0 003.95 4.82 4.93 4.93 0 01-2.22.08 4.93 4.93 0 004.6 3.42A9.87 9.87 0 010 21.54a13.91 13.91 0 007.56 2.21c9.05 0 14-7.5 14-14 0-.21 0-.43-.02-.64a10.03 10.03 0 002.46-2.57z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.34v-11.5h3.41v1.57h.05c.48-.91 1.65-1.86 3.39-1.86 3.62 0 4.28 2.38 4.28 5.47v6.32h-.02zM5.34 7.97c-1.14 0-2.06-.93-2.06-2.07 0-1.13.92-2.06 2.06-2.06 1.14 0 2.06.93 2.06 2.06 0 1.14-.92 2.07-2.06 2.07zm-1.77 12.48h3.55v-11.5H3.57v11.5zM22.23 0H1.77C.79 0 0 .8 0 1.77v20.46C0 23.2.79 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.77V1.77C24 .8 23.21 0 22.23 0z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
