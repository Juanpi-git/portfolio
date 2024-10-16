// COMPONENTE CARD QUE MUESTRA CADA UNO DE LOS TRABAJOS
// VOY A TRABAJAR EN BASE A LAS PROPS
// CUANDO YA TENGA LOS TRABAJOS QUE VOY A SUBIR, REEMPLAZO TODO POR LAS PROPS
function Card(work) {
  return (
    <div className="h-full w-72 lg:w-80">
      <div className="card h-full w-full shadow-lg dark:shadow-[#232323] dark:hover:shadow-[#00adb5] hover:shadow-[#00adb5] hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-3">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body p-6 gap-3">
          <h2 className="card-title font-poppins font-bold text-black dark:text-white text-start">
            Shoes!
          </h2>
          <p className="font-poppins text-start">
            If a dog chews shoes whose shoes does he choose?
          </p>
          <div className="card-actions justify-end p-2 gap-3">
            <a href={"https://github.com/Juanpi-git"} target="_blanck">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github css-svt5ra"
                className="size-4 transition-all duration-200  dark:text-[#808080] hover:text-black dark:hover:text-white"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a href="" target="_blanck">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-4 transition-all duration-200 dark:text-[#808080] hover:text-black dark:hover:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
