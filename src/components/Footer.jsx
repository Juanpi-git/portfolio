import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="h-full w-full border p-2 flex justify-around items-center">
      <Link to={"/"} className="w-1/4 h-1/2">
        <img src="" alt="mi-logo" className="w-full h-full border" />
      </Link>
      <div className="h-full flex flex-col justify-center gap-3 ">
        <Link to={""}>
          <img src="" alt="gmail" className="" />
          {/*  <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            class="size-6  hover:blue"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg> */}
        </Link>
        <Link to={""}>
          <img src="" alt="linkedin" className="" />
        </Link>
        <Link to={""}>
          <img src="" alt="github" className="" />
        </Link>
        <Link to={""}>
          <img src="" alt="cv" className="" />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg> */}
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
