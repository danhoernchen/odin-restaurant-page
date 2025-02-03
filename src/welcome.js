function createContent() {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.textContent = "Welcome to La Bella Cucina!";
  div.append(h1);
  const welcomeText = (document.createElement("p").innerText =
    "At La Bella Cucina, we believe in the art of good food and great company. Our chefs craft delicious, authentic Italian dishes with love and passion, using only the freshest ingredients. Whether you're here for a quick bite or a leisurely meal, we invite you to savor the flavors of Italy in a warm and inviting atmosphere.");
  div.append(welcomeText);
  return div;
}

export default createContent;
