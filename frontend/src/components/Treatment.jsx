import { useState } from "react";

const Treatment = ({ id }) => {
  const [read, setRead] = useState(false);

  if (id === "recrxTqzKUdMTXtP7") {
    return (
      <p style={{ color: "#242a31" }}>
        <b>
          GREENSHIELD services a branded approach towards cockroach management
          adopting chemical and non chemical process.
        </b>
        <br />
        <b>Chemical Spray</b> ensures better efficacy and more widespread area
        is covered specially to locations which are not ideal for GEL
        application but most preferred by roaches.
        <br />
        <b>Gel</b> is the most potent, long lasting and works with 2X factor as
        it affects roaches wide touch and intake as gel is a food based matrix
        specially formulated for India conditions.
        <br />
        <b>Trapping</b> is a new format introduced for key customers who
        understand and give more importance to innovative means of management,
        it promotes zero pesticides and is promoted for use as a combination
        tool.
      </p>
    );
  } else if (id === "recV1wm4QA5uQqv1r") {
    return (
      <p style={{ color: "#242a31" }}>
        <b>1. LARVICIDING</b> <br />
        <b>Tab or Granular Application</b>:- The most ECO Friendly &amp;
        Environmentally responsible means of modern day mosquito management is
        use of TABLETS &amp; GRANUALS which are odorless and has good tolerance
        on account to mammalian toxicity.
        <br />
        <b>Liquid Based Spray</b>:- This process has been in active use by
        almost all municipal and health bodies globally, using EC based liquid
        sprays in stagnant waters to target the larval stage where its most
        susceptible...
        {!read ? (
          <button
            className="btn"
            style={{ color: "blue", paddingLeft: 1 }}
            onClick={() => setRead(!read)}
          >
            <b>Read More</b>
          </button>
        ) : (
          <>
            <br /> <b> Oil Spill</b>:- “MLO” Malarial Larval Oil is used in a
            direct spill over stagnant water in a bid to disrupt the life cycle
            of mosquitoes, the oil forms a film over the water not allowing the
            larvae to breath, suffocating the larvae from breathing as it
            emerges from the bottom of the water at regular intervals.
            <br /> <br />
            <b>2. RESIDUAL SPRAY</b>:- Residual Spray has over the recent years
            extended from just not being internal, extending to external areas
            too, as its understandable that mosquitoes are largely contributed
            from external settings, and if we have an ideal external and
            internal location such areas need to be under RESIDUAL SPRAY
            management. Residual Sprays comprises of layered spraying of HUMAN
            &amp; PET SAFE being odorless &amp; colourless on the walls surface
            targeting resting mosquitoes. Efficacy of such sprays is sustainable
            also largely depending on environmental conditions.
            <br /> <br />
            <b>3. KNOCKDOWN SPRAY</b>:- Knockdown spray have become safer and
            have the needed approvals from competent authorities in INDIA for
            internal use where humans inhabit. Its application immediately
            brings down adult mosquito infestation in the given areas, these
            sprays are sustainable when applied at the specified label claims,
            mild odor, but high efficacy makes this a choice for all external
            &amp; lawn / garden area applications.
            <br /> <br />
            <b>4. MICRONING</b>:- Use of aqua based formulations dispensed in
            microns to open air using a power tool, resulting in floating
            airborne particles targeting flying mosquitoes while creating a film
            of sorts when the formulation settles on surfaces. This approach has
            a more efficient and larger reach providing a knockdown and residual
            dual effect. Our affiliation with BAYER gives our services a
            technically backed advantage. In microning applications,
            AQUAKOTHRINE is our preferred formulation.
            <br /> <br />
            <b>5. FOGGING</b>
            <br /> <b>Thermal-Fogging</b>:- Most preferred mode of mosquito
            management, it provides a quick solution and a equally satisfying
            visual proof, but over the recent years it is loosing it’s
            preference over environmental concerns as diesel is the main carrier
            of chemicals in this application process. Adult mosquitoes are
            direly affected, as they would be exposed to the pesticide in the
            thermal-fog-cloud. <br />
            <b>Landscape Fogging</b>:- India’s 1st vehicle mounted fogging
            machine in the private sector having dual capacity for cold &amp;
            thermal fogging. Having a dual capacity tank with more than 3 hours
            of continuous fogging under all weather conditions, versatile and
            highly maneuverable in city and remote locations making the
            application ideal for entire city and gated community applications.
            Our landscape fogger has been successfully operational from 2000 and
            has been used as a common platform for city disinfecting services
            during covid-19. <br /> <b>SIMPLY GREEN</b>:- Is a concept of using
            natural-extract oils or ready to use products in spray, vapour or
            diffusers forms, bringing about additions to given space by adding
            natural repellant for a given pest.
          </>
        )}
      </p>
    );
  } else if (id === "rectJD7Q0AmyDjtoS") {
    return (
      <p style={{ color: "#242a31" }}>
        Ratrid Service is an integrated approach consisting of primarily
        Identifying the rodent entry point, baiting external areas, using catch
        traps and smart traps internally to address infestation which has
        already made entry. Use of repellents brings in a new dimension to the
        program offering as it’s a non poison based and humane approach,
        promoting an innovative way of rodent management. EPCORN is the first
        company in INDIA to dissuade the use of <b>GUM TRAPS</b> and actively
        promotes use of RIM and Repelling services in addition to use of baits
        to contain rodent infestation in a given space.
      </p>
    );
  } else if (id === "recrxbVfcpnJVxihy") {
    return (
      <p style={{ color: "#242a31" }}>
        <b>1. Spot Treatment</b> is where only the affected given areas is
        treated by spray or foam application, this treatment is a one time spot
        on application and doesn’t involve drilling injecting process.
        <br />
        <br />
        <b>2. Annual Check Up treatment</b> is where the given space is treated
        by one major service by drilling injecting sealing process followed by
        check up services as charted...
        {!read ? (
          <button
            className="btn"
            style={{ color: "blue", paddingLeft: 1 }}
            onClick={() => setRead(!read)}
          >
            <b>Read More</b>
          </button>
        ) : (
          <>
            <br />
            <br />
            <b>3. Five Year Service Warranty Application</b> is a scheduled
            services provided for the entire structure post its construction and
            when inhabited. It includes all internal and external areas of the
            structure covering its various access points and many other elements
            that associate to the structure.
            <br />
            <br />
            <b>4. Ten Year Service Warranty Application</b> is a service
            implemented for under construction projects, the application of
            termiproof chemicals is implemented at various stages of the
            construction to ensure the termite infestation is restricted at the
            base of the construction.
            <br />
            <br />
            <b>5. Interior Stage Termite Management </b> is a service
            implemented categorically for spaces like homes/offices/structures
            where project works / interior refurbishment works are underway, the
            aim of implementing these services is to ensure the untreated
            walls/wood/gypsum boards/plywood/pop layout/brick works are all
            effectively treated to dissuade termite presence during the project
            stage works. <br /> <br />
            <b>6. Continued Injecting Process</b> is a new innovative process in
            termite management specifically designed after years of tracking the
            need to work around structures where there have been termite
            resurgence, where competitors failed to deliver results following
            regular charted attempts. It involves a technical study of the
            property, detailed inspections of its existing and past infestation,
            prolonged intra angular probing and movement of termites exploits
            finally deciding where it calls for an intra semantical injecting of
            termiproof chemicals.
            <br />
            <br />
            <b>7. Systematic Injecting Process </b> is the introduction of a new
            service segment in termite management, which removes the need for
            drilling expensive flooring OR incurring cost of paint touch up when
            holes are drilled in the walls. Our Research and Development team
            adopted a well documented innovative means of application
            prevailing, allowed dispensing of termiproof chemicals at intervals
            and where we developed an improved version of delivery system
            bringing about assurance on delivery, aesthetics and improving means
            of application.
          </>
        )}
      </p>
    );
  }
  return <div>Treatment</div>;
};
export default Treatment;
