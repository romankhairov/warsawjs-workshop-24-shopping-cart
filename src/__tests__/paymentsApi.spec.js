import nock from "nock";
import paymentsApi from "../paymentsApi";

describe.skip("paymentsApi", () => {
  it("authorizes the client", async () => {

    nock('http://payments.local')
                .post('/auth/token')
                .reply(200, {
                    "token": "123TOKEN"
                 });
              
    const token = await paymentsApi.authorizeClient('test', 'test');
    expect(token).toBe("123TOKEN");

  });

  it("throws an error when credentials are wrong", () => {

    nock('http://payments.local')
                .post('/auth/token', { username: "test", password: ""})
                .reply(401);

    return paymentsApi
      .authorizeClient("test", "")
      .catch(e => expect(e.message).toMatch("Unauthorized"));
  });

  it("processes card payment", async () => {
      let token = "123ABC";
      let amount = 950;
      let card = {
        "number": "4111111111111111",
        "securityCode": "950",
        "expMonth": "07",
        "expYear": "21",
        "owner": "John Doe"
      };

      const reqBody = {token, amount: amount * 100, card};

      const payAuthBackend = nock('http://payments.local')
      .post("/payments/payment", reqBody)
      .reply(200, { "transactionId": "TX123" });

      let transactionId = await paymentsApi.processPayment(token, card, amount);
      expect(typeof transactionId).toEqual("string")
  });

  it("checks if transaction is completed", async () => {
    const payAuthBackend = nock('http://payments.local')
      .get("/payments/payment/1XDD?token=XP")
      .reply(200, { "status": "COMPLETED" });
    
    let transactionId = "1XDD"
    let token = "XP"    
    let status = await paymentsApi.isPaymentCompleted(token, transactionId)
    expect(status).toBeTruthy();
  });
});
