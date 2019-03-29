import React from "react";
import FilterLink from "../contianners/FilterLink";
import { visibilityFilters } from "../actions";

const Footer = () => (
    <div>
        <span>Show:</span>
        <FilterLink filter={visibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={visibilityFilters.SHOW_ACTIVE}>aCTIVE</FilterLink>
        <FilterLink filter={visibilityFilters.SHOW_COMPLETED}>
            Completed
        </FilterLink>
    </div>
);

export default Footer;
