import React from "react";
import "./featured.css";
import FeaturedCard from "./partials/card/FeaturedCard";
import { PiGearSixFill } from "react-icons/pi";
import { BsEgg } from "react-icons/bs";
import { FaComments } from "react-icons/fa";

export default function Featured() {
  return (
    <div className="featured">
      <div className="featured_top">
        <h1>service</h1>
      </div>
      <div className="featured_bottom">
        <div className="featured_bottom_row">
          <FeaturedCard
            icon={<PiGearSixFill />}
            title={"settings"}
            subtitle={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam exercitationem veniam unde culpa excepturi minus. Exercitationem distinctio voluptatem ipsa repellendus tempore odit quo quaerat ab?"
            }
          />
          <FeaturedCard
            icon={<BsEgg />}
            title={"boiled egg"}
            subtitle={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam exercitationem veniam unde culpa excepturi minus. Exercitationem distinctio voluptatem ipsa repellendus tempore odit quo quaerat ab?"
            }
          />
          <FeaturedCard
            icon={<FaComments />}
            title={"comments"}
            subtitle={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam exercitationem veniam unde culpa excepturi minus. Exercitationem distinctio voluptatem ipsa repellendus tempore odit quo quaerat ab?"
            }
          />
        </div>
        <div className="featured_bottom_row">
          <FeaturedCard
            icon={<FaComments />}
            title={"comments"}
            subtitle={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam exercitationem veniam unde culpa excepturi minus. Exercitationem distinctio voluptatem ipsa repellendus tempore odit quo quaerat ab?"
            }
          />
          <FeaturedCard
            icon={<FaComments />}
            title={"comments"}
            subtitle={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam exercitationem veniam unde culpa excepturi minus. Exercitationem distinctio voluptatem ipsa repellendus tempore odit quo quaerat ab?"
            }
          />
          <FeaturedCard
            icon={<FaComments />}
            title={"comments"}
            subtitle={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam exercitationem veniam unde culpa excepturi minus. Exercitationem distinctio voluptatem ipsa repellendus tempore odit quo quaerat ab?"
            }
          />
        </div>
      </div>
    </div>
  );
}
