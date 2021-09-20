export default function createItemAsElement(
  mainTitle,
  image,
  description,
  category,
  seria,
  name,
  country,
  city,
) {
  const li = document.createElement("li");

  const h3 = document.createElement("h3");
  h3.textContent = mainTitle;

  const img = document.createElement("img");
  img.setAttribute("src", image);
  img.setAttribute("alt", description);

  const pDesc = document.createElement("p");
  pDesc.textContent = description;
  // ==================
  const pCat = document.createElement("p");

  const spanCat = document.createElement("span");
  spanCat.textContent = category;
  const spanSer = document.createElement("span");
  spanSer.textContent = seria;

  pCat.append(spanCat, spanSer);
  // ==================

  const div = document.createElement("div");

  const h4 = document.createElement("h4");
  h4.textContent = "author:";
  const pAuthorName = document.createElement("p");
  pAuthorName.textContent = name;
  // =================
  const pAuthorCouyntry = document.createElement("p");

  const spanCountry = document.createElement("span");
  spanCountry.textContent = country;

  const spanCity = document.createElement("span");
  spanCity.textContent = city;

  pAuthorCouyntry.append(spanCountry, spanCity);
  // ==============

  div.append(h4, pAuthorName, pAuthorCouyntry);

  //   ==========
  li.append(h3, img, pDesc, pCat, div);

  return li;
}
