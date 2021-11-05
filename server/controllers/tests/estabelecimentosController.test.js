const { mockRequest, mockResponse } = require('util/interceptor')
const controller = require('../estabelecimentosController')

describe("Estabelecimentos Controller", () => {
    it('should get all estabelecimentos', async () => {
        let req = mockRequest();
        const res = mockResponse();
    
        await controller.getAllEstabelecimentos(req, res);
    
        expect(res.send).toHaveBeenCalledTimes(1)
        expect(res.send.mock.calls.length).toBe(1);
        expect(res.send).toHaveBeenCalledWith('Hello i am todo controller');
    });

  test('should 404 and return correct value', async () => {
    let req = mockRequest();
    req.params.id = null;
    const res = mockResponse();

    await controller.todoController(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: 'Not Found' });
  });
});