const Card1 = ({ cardItem }) => {
  return (
    <>
      <div className="card w-48 ">
        <div className="card-body">
          <a href={cardItem.link}>
            <img
              src={cardItem.image}
              alt=""
              className="h-10 hover:scale-105 duration-300 hover:shadow-2xl dark:shadow-md dark:shadow-slate-200"
            />
          </a>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </>
  );
};

export default Card1;
