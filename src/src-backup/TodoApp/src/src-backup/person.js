const isAdult = age => {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
};

const canDrink = age => {
  if (age < 21) {
    return false;
  } else {
    return true;
  }
};

export { isAdult, canDrink as default };
