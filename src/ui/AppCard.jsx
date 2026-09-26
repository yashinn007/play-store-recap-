const AppCard = ({ app }) => {
  console.log(app);
  const { image, title, downloads, ratingAvg } = app;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={image} alt={title} className="p-4 w-[200px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions justify-between">
          <span className="px-2 py-1 bg-green-200 text-green-500 rounded-sm">
            {downloads}
          </span>
          <span className="px-2 py-1 bg-orange-200 text-orange-500 rounded-sm">
            {ratingAvg}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
