/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Databases Analytics Tools",
    description:
      "DB Analytics Tools is a open source micro-framework that helps data analysts to work with relational databases (data warehouses).",
    url: "https://pypi.org/project/db-analytics-tools/",
  },
  {
    title: "Algo Jungle",
    description:
      "Algo Jungle is an e-learning platform dedicated to computer science evangelism with a special focus on algorithms.",
    url: "https://joekakone.github.io/algojungle/",
  },
  {
    title: "Covid19 Tracker",
    description:
      "In response to coronavirus crisis which touched the world specially West Africa , I created ECOWAS Covid19 Tracker, a dashboard built with Python and Bokeh to follow in real time the evolution of the crisis through West Africa zone.",
    url: "https://github.com/joekakone/covid19-tracker-for-ecowas",
  },
  {
    title: "Deputes.fr",
    description:
      "You can build dashboard using Bokeh library. This one is an example, it's called Deputes.fr baed on French parliament data. It is an bokeh web application. You can see the dashboard.",
    url: "https://github.com/joekakone/deputes-fr",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
