module.exports = (fullName) => {
  if (typeof fullName !== 'string') {
    return 'Error';
  }
  if (!fullName) {
    return 'Error';
  }
  const parts = fullName.split(' ');
  if (parts.length !== 2) {
    return 'Error';
  }
  const [firstName, lastName] = parts;
  return (
    firstName[0].toUpperCase() +
    firstName.slice(1).toLowerCase() +
    ' ' +
    lastName[0].toUpperCase() +
    lastName.slice(1).toLowerCase()
  );
};
