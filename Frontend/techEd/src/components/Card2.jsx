const Card2 = ({ item }) => {
  return (
    <>
      <div className="card bg-base-100 w-96  mx-8 dark:bg-slate-900 dark:text-white">
        <div className="card-body">
          <div className="avatar flex justify-center">
            <div className="w-24 rounded-full ">
              <img src={item.image} alt="" />
            </div>
          </div>

          <h2 className="card-title flex justify-center mt-4">{item.title}</h2>
          <p className="flex justify-center text-center">{item.about}</p>
        </div>
      </div>
    </>
  );
};

export default Card2;
