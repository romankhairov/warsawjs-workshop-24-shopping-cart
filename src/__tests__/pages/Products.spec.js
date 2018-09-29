import React from "react";
import {shallow, mount, render} from "enzyme";
import Products from "../../pages/Products/Products";
import { MemoryRouter } from "react-router-dom";

describe("products page", () => {
    it("renders", () => {
        const costSummary = { count: 5, priceSum: 50 };
        
        const wrapper = mount (
            <MemoryRouter initialEntries={["/"]}>
                <Products cartSummary={cartSummary} />
            <MemoryRouter>
        );
    });
});
