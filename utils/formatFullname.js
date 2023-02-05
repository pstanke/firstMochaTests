module.exports = (fullName) => {
  if (typeof fullName !== 'string' || !fullName) {
    return 'Error';
  }

  const parts = fullName.split(' ');
  if (parts.length !== 2) {
    return 'Error';
  }
  const [firstName, lastName] = parts;

  const firstNameCapitalized =
    firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();

  const lastNameCapitalized =
    lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

  return `${firstNameCapitalized} ${lastNameCapitalized}`;
};
