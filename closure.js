const x = () => {
  let a = 7;
  const y = () => {
    console.log(a);
  };
  y();
};
x();
