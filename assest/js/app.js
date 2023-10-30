function opentab(Tabid) {
    const tabs = document.querySelectorAll(".card1");
    tabs.forEach((Tabsapce) => {
        Tabsapce.classList.add("d-none");
        Tabsapce.classList.remove("d-block");
    });
    const opentabs = document.getElementById(Tabid);
    opentabs.classList.add("d-block");
    opentabs.classList.remove("d-none");
}
