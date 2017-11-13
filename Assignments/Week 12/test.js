process.env.NODE_ENV = 'test.js';

var users = [0];
var link = "server.js";
let Users = users;
let server = link;

let chai = require('chai');
let chaiHttp = require('chai-http');

let should = chai.should();

chai.use(chaiHttp);

describe('Users', () => {

describe('/GET users', () => {
      it('GET all users', (done) => {
        chai.request(server)
            .get('/users')
            .end((err, res) => {
                res.should.have.status(200);
                should.exist(res.body);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
              done();
            });
      });
  });

  describe('/POST users', () => {
       it('POST new user', (done) => {
         let user = {
             name: "test",
             email: "test@testing.test"
         }
         chai.request(server)
             .post('/users')
             .send(user)
             .end((err, res) => {
                 res.should.have.status(200);
                 should.exist(res.body);
                 res.body.should.be.a('object');
                 res.body.should.have.property('errors');
               done();
             });
       });

   });
});
