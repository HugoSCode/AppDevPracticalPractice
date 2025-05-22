// ==============================================
// ======= ⚠️ DO NOT MODIFY THIS FILE ⚠️ =======
// ==============================================

import * as chaiModule from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';

import app from '../app.js';

const chai = chaiModule.use(chaiHttp);

describe('Users', () => {
  it('should reject missing firstName', async () => {
    const res = await chai.request(app).post('/api/users').send({
      lastName: 'Doe',
      email: 'john.doe@gmail.com',
    });

    chai.expect(res.body.message).to.be.equal('firstName is required');
  });

  it('should reject missing lastName', async () => {
    const res = await chai.request(app).post('/api/users').send({
      firstName: 'John',
      email: 'john.doe@outlook.com',
    });

    chai.expect(res.body.message).to.be.equal('lastName is required');
  });

  it('should reject invalid email format', async () => {
    const res = await chai.request(app).post('/api/users').send({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@gmail.com',
    });

    chai.expect(res.body.message).to.be.equal('email must end with @outlook.com');
  });
});
