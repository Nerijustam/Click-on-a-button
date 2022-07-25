const URL = "https://randomuser.me/api/";

const getUser = async () => {
  // fetch return the data
  const response = await fetch(URL);
  const data = await response.json();
  // destructure. From API select first line and get the object
  const person = data.results[0];
  // if we finding some properties of people
  // const {phone}= data.results[0];
  const { phone, email } = person;
  const { large: image } = person.picture;
  const { password } = person.login;
  const { first, last } = person.name;
  const {
    dob: { age },
  } = person;
  const {
    street: { number, name },
  } = person.location;
  return {
    // email:email can write only email
    image,
    phone,
    email,
    password,
    age,
    street: `${number} ${name}`,
    name: `${first}${last}`,
    // value must be the same with HTML icons name
  };
};

export default getUser;
