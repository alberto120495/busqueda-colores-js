const colorContainer = document.getElementById("colors");
const search = document.getElementById("search");

const colors = [
  "red",
  "green",
  "red",
  "blue",
  "purple",
  "yellow",
  "brown",
  "purple",
  "cyan",
];

const createSearchFilter = () => {
  const divColors = document.querySelectorAll(".color");
  search.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();
    divColors.forEach((color) => {
      if (color.id.toLocaleLowerCase().includes(value)) {
        color.style.display = "block";
      } else {
        color.style.display = "none";
      }
    });
  });
};

const createColors = (colors) => {
  for (let index = 0; index < colors.length; index++) {
    const colorElement = document.createElement("div");
    colorElement.style.backgroundColor = colors[index];
    colorElement.setAttribute("class", "color");
    colorElement.setAttribute("id", colors[index]);
    colorContainer.appendChild(colorElement);
  }
  createSearchFilter();
};

createColors(colors);
