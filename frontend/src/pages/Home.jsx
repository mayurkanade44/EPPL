import React from "react";
import { Carousel, ServiceHome, Counter, Loading, Client } from "../components";
import { useDataContext } from "../context/data_context";
import { clientsRTL, clientsLTR } from "../context/data";

export const Home = () => {
  const { services, loading } = useDataContext();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Carousel />
          <h1 className="text-center mt-4">Services</h1>
          {services &&
            services.map((service) => {
              const { id, name, img, description } = service;
              return (
                <div key={id}>
                  <ServiceHome
                    id={id}
                    name={name}
                    image={img}
                    description={description}
                  />
                </div>
              );
            })}
          <Counter />
          <div className="bg-secondary">
          <h2 className="text-center pt-2">Happy Clients</h2>
          <div className="heading-underline"></div>
            <Client data={clientsRTL} rtl={false} />
            <Client data={clientsLTR} rtl={true} />
          </div>
        </div>
      )}
    </>
  );
};
