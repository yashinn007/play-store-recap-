import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { image, title, downloads, ratingAvg } = app;
  return (
    <Link
      to={`/apps/Details/${app.id}`}
      className="card bg-base-100 shadow-sm hover:shadow-xl"
    >
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
    </Link>
  );
};

export default AppCard;
