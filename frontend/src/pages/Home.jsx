import React, { useEffect, useState } from "react";
import {
  Carousel,
  ServiceHome,
  Counter,
  Loading,
  Client,
  Reviews,
  ProductsCarousal,
} from "../components";
import { useDataContext } from "../context/data_context";
import { clientsRTL, clientsLTR } from "../context/data";

export const Home = () => {
  const { services, loading } = useDataContext();
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const filtered = services.filter((service) => service.featured === true);
    setFeatured(filtered);
  }, [services]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Carousel />
          <h1 className="text-center mt-4">Our Services</h1>
          <div className="heading-underline" />
          {featured &&
            featured.map((service, index) => {
              const { id, name, img, description } = service;
              return (
                <div key={id}>
                  <ServiceHome
                    id={id}
                    index={index}
                    name={name}
                    image={img}
                    description={description}
                  />
                </div>
              );
            })}
          <ProductsCarousal />
          <Counter />
          <div className="bg-secondary">
            <Client data={clientsRTL} rtl={false} />
            <Client data={clientsLTR} rtl={true} />
          </div>
          <Reviews />
        </div>
      )}
    </>
  );
};
