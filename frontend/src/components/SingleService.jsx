import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDataContext } from "../context/data_context";
import {Loading} from '../components'

const SingleService = () => {
  const { fetchSingleService, singleService, loading } = useDataContext();
  const { name, description, featured_img, treatment } = singleService;
  const { id } = useParams();

  useEffect(() => {
    fetchSingleService(id);
    // eslint-disable-next-line
  }, [id]);

  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className="text-center">{name}</h1>
          <div className="row">
            <div className="col-md-4">
              <h5>Description:</h5>
              <p>{description}</p>
            </div>

            <div className="col-md-4">
              {featured_img && <img src={featured_img[0].url} alt={name} />}
            </div>
            <div className="col-md-4">mayur</div>
          </div>
          <div>
            <h5>Treatment:</h5>
            <p>{treatment}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleService;
