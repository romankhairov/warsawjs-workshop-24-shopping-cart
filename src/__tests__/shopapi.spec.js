import shopApi from "../shopApi";


describe('shopApi', () => {

    const products = {
        productIds: [4],
        quantityById: {
            4: 2
        }
    }

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
  

    const response = await shopApi.createOrder(products);

    expect(response.data).toMatchObject({
        status: 'NEW',
        orderNumber: expect.anything(),
        products
      });
    });

    it('updates delivery adress', async () => {

        const order = await shopApi.createOrder(products);
        
        const address =  {
            "fullname": "John Doe",
            "street": "Al. Wilanowska 5",
            "city": "Warszawa",
            "country": "PL"
          }

        const changeAdress = await shopApi.changeDeliveryAddress(order.data.orderNumber, address);

        expect(changeAdress.data.status).toBe("OK");
    });

    it('updates delivery method', async () => {

        const order = await shopApi.createOrder(products);
        
        const deliveryMethod =  {
            "deliveryMethod": "post"
          }

        const changeMethod = await shopApi.changeDeliveryMethod(order.data.orderNumber, deliveryMethod);

        expect(changeMethod.data.status).toBe("OK");

    });

    it('submit order', async () => {

        const order = await shopApi.createOrder(products);
        
        const orderNum = await shopApi.submitOrder(order.data.orderNumber);

        expect(orderNum.data.status).toBe("OK");

    });
    
    it('submit order', async () => {

        const order = await shopApi.createOrder(products);
        
        const orderNum = await shopApi.submitOrder(order.data.orderNumber);

        expect(orderNum.data.status).toBe("OK");

    });
    
    // it('get order', async () => {

    //     const getOrder =

    // });
    

});