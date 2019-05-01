const { expect } = require('chai');
const chaiHttp = require('chai-http');
const chai = require('chai');

const server = require('../index');

chai.use(chaiHttp);

describe('API health endpoints', () => {
    it('should return 200', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                done();
            });
    });
});
