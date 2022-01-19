import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDataContext } from "../context/data_context";

const SingleService = () => {
  const { fetchSingleService, singleService } = useDataContext();
  const { name, description, featured_img, treatment } = singleService;
  //   const img = featured_img[{ url: "" }];
  if (featured_img) {
    console.log(featured_img[0].url);
  }
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchSingleService(id);
  }, [id]);

  return (
    <div className="container">
      <h1 className="text-center">{name}</h1>
      <div className="row">
        <div className="col-md-4">
          <p>{description}</p>
        </div>

        <div className="col-md-4">
          {featured_img && <img src={featured_img[0].url} alt={name} />}
        </div>
        <div className="col-md-4">mayur</div>
      </div>
    </div>
  );
};

export default SingleService;