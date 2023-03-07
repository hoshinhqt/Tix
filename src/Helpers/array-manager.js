export const flatArray = (array) => {
  return (array = [].concat.apply([], array));
};

export const flatCustom = (arr)=>{
  return arr  = [].concat.apply([], arr)
}
