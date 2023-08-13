import { faker } from "@faker-js/faker";

export function createRandomUser() {
  return {
    id: faker.string.uuid(),
    avatar: faker.image.avatarLegacy(),
    name: faker.person.firstName(),
    age: Math.floor(Math.random() * 80),
    sex: faker.person.sex(),
    billNumber: faker.number.int(),
    address: faker.address.streetAddress() + faker.address.city(),
  };
}
