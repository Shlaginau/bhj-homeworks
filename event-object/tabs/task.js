const tabs = document.querySelectorAll(".tab");
const tabsArray = Array.from(tabs);
const tabsContent = document.querySelectorAll(".tab__content");
const tabsContentArray = Array.from(tabsContent);


tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove("tab_active"));
    tab.classList.add("tab_active");

    tabsContent.forEach(c => c.classList.remove("tab__content_active"));
    let tabindex = tabsArray.indexOf(tab);
    tabsContentArray[tabindex].classList.add("tab__content_active");
  })
})