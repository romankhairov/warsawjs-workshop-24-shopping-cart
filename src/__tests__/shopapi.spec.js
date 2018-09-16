import shopApi from "../shopApi";

describe('shopApi', () => {

    it('return shop products', async () => {
        const result = await shopApi.getProducts();

        expect(result.data.products).toBeDefined();
        expect(result.data.products).toBeInstanceOf(Array);
        expect(result.data.products[0]).toEqual(
            expect.objectContaining({
                id: expect.anything(),
                title: expect.anything(),
                price: expect.anything(),
                image: expect.anything()
              })
        );
        
    });

    it('should create an order', async () => {

        const products = {
            productIds: [4],
            quantityById: {
                4: 2
            }
        }

   

    const response = await shopApi.createOrder(products);

    expect(response.data).toMatchObject({
        status: 'NEW',
        orderNumber: expect.anything(),
        products
      });
    });

    it('updates delivery adress', () => {

        const order = await shopApi.createOrder(products);
        
        expect(response.data).toMatchObject({
            status: "OK"
        })
    });
});