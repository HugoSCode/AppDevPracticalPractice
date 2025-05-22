// ==============================================
// ======= ⚠️ DO NOT MODIFY THIS FILE ⚠️ =======
// ==============================================

import * as chaiModule from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';

import app from '../app.js';

const chai = chaiModule.use(chaiHttp);

describe('Posts', () => {
  it('should reject missing title', async () => {
    const res = await chai.request(app).post('/api/posts').send({
      content: 'This is a test post',
      authorId: 1, 
    });

    chai.expect(res.body.message).to.be.equal('title is required');
  });

  it('should reject short title', async () => {
    const res = await chai.request(app).post('/api/posts').send({
      title: 'Hi',
      content: 'Valid content',
      authorId: 1,
    });

    chai
      .expect(res.body.message)
      .to.be.equal('title must be at least 3 characters long');
  });

  it('should reject missing authorId', async () => {
    const res = await chai.request(app).post('/api/posts').send({
      title: 'Valid Title',
      content: 'Some content here',
    });

    chai.expect(res.body.message).to.be.equal('authorId is required');
  });

  it('should retrieve all posts', async () => {
    const res = await chai.request(app).get('/api/posts');

    chai.expect(res.body.data).to.be.an('array');
  });
});
