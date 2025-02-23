const Card = ({ language }) => {
  return (
    <>
      <div className="card bg-base-100 w-80 shadow-xl m-4 md:mx-10 md:my-8 hover:cursor-pointer hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark:shadow-slate-700">
        {" "}
        <div className={`${language.color} h-14 rounded-t-md`}>
          <img className="mt-6 ml-6" src={language.image} alt="" />
        </div>
        <div className="card-body">
          <h2 className="card-title mt-2">{language.title}</h2>
          <p>{language.about}</p>

          <div className="mt-4">
            <div className="rating">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-orange-400"
              />

              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-orange-400"
              />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
