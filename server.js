const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;


const createCompany = () => {
  const newFake = {
    _id: faker.database.mongodbObjectId(),
    name: faker.company.name(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      postcode: faker.address.zipCode(),
      country: faker.address.country()
    }
  };
  return newFake;
};

const createUser = () => {
  const newFake = {
    _id: faker.database.mongodbObjectId(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phoneNumber: faker.phone.number()

  };
  return newFake;
};
  
const newFakeCompany = createCompany();
const newFakeUser = createUser();

app.get('/api/companies/new', (req, res) => {
  res.json(newFakeCompany)});
app.get('/api/users/new', (req, res) => {
  res.json(newFakeUser)});
app.get('/api/user/company', (req, res) => {
  res.json({
    user: newFakeUser,
    company: newFakeCompany
  })});

const server = app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
