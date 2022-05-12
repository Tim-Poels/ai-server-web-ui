export default function ColorNav(tabClass) {
  resetAll();
  let tabs = document.getElementsByClassName(tabClass)
  tabs[0].style.backgroundColor = "#319b3f"
  tabs[0].style.color = "white";
  tabs[0].style.fontWeight = "600";
  tabs[1].style.border = "5.5px solid #319b3f";
  tabs[1].style.backgroundColor = "#319b3f"

  return;
}

const resetAll = () => {
  let tab1 = document.getElementsByClassName("tab1");
  let tab2 = document.getElementsByClassName("tab2");
  let tab3 = document.getElementsByClassName("tab3");
  let array = [tab1, tab2, tab3]
  array.forEach(el => {
    el[0].style.backgroundColor = "#F5F5F5";
    el[0].style.color = "#B0B0B0";
    el[0].style.fontWeight = "normal";
    el[1].style.border = "4px solid black";
    el[1].style.backgroundColor = "black";
  })
}