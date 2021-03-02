const getIDs = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([532, 543, 753, 1, 5, 'a']);
    }, 1500);
  });
const getRecipe = (recipeID) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (ID) => {
        const recipe = {
          title: 'Fresh tomato pasta',
          publisher: 'Pinchas Hodadad',
        };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      recipeID
    );
    if (typeof recipeID === 'string') reject('not a num');
  });
};
function errorHandle() {
  console.log('you have a error');
}
async function go() {
  const ids = await getIDs();
  console.log(ids);
  let recipe = await getRecipe(ids[5]);
  console.log(recipe);
}
function safeGo(func, error) {
  func().catch(error);
}
safeGo(go, errorHandle);
