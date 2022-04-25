import supertest from 'supertest';
import app from '../index';
import path from 'path';
import utilities from '../routes/api/utilities/utilities';

const request = supertest(app);

//end point testing
describe('Test endpoint response', ()=>{
  it('Gets the api endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
});

//Test should pass
it('Expects resizeImage function result to be equal to ', async () => {
  const Promise = await utilities.resizeImage('image_one',200,200);
  const result = path.resolve(__dirname, "../.././images/resized_images/image_one_200_200.jpg");
  expect(Promise).toEqual(result);
});

//Test result should route to error invalid parameters
it('Expects resizeImage function result to route us to invalid parameters error page', async () => {
  const Promise = await utilities.resizeImage('image_one',200,0);
  const result = path.resolve(__dirname, "../.././errors/invalid_parameters_error.html");
  expect(Promise).toEqual(result);
});

it('Expects resizeImage function result to route us to invalid filename error page', async () => {
  const Promise = await utilities.resizeImage('jkdflgsj',200,200);
  const result = path.resolve(__dirname, "../.././errors/invalid_filename_error.html");
  expect(Promise).toEqual(result);
});