import Basket from "../../utils/basket";

describe("basket", () => {
    it("add product to basket", () => {
        const b = new Basket();

        expect(b.products()).toHaveLength(0);

        b.add({ name: "Produkt 1" });

        expect(b.products()).toHaveLength(1);
        
    });
    it("remove product from basket", () => {
        const b = new Basket();

        expect(b.products()).toHaveLength(0);

        b.add({ name: "Produkt 1" });

        expect(b.products()).toHaveLength(1);

        b.remove({ name: "Produkt 1" });

        expect(b.products()).toHaveLength(0);
        
    });
    it("check products in basket", () => {
        const b = new Basket();

        expect(b.products()).toHaveLength(0);

        b.add({ name: "Produkt 1" });

        expect(b.products()).toHaveLength(1);

        b.remove({ name: "Produkt 1" });

        expect(b.products()).toHaveLength(0);
        
        b.hasProduct({ name: "Produkt 1" });

        expect(b.products()).toBeTruthy();
    });
});