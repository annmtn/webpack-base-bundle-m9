export default function createItemByString(
  mainTitle,
  image,
  description,
  category,
  seria = "-",
  name,
  country,
  city,
) {
  return `
    <li>
    <h3>${mainTitle}</h3>
    <img src="${image}" alt="${description}" />
    <p>${description}</p>
    <p><span>${category}</span>:<span>${seria}</span></p>
    <div>
      <h4>author:</h4>
      <p>${name}</p>
      <p>country: <span>${country}</span>- city: <span>${city}</span></p>
    </div>
    </li>
    `;
}
