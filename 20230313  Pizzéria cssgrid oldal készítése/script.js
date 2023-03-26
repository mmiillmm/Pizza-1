function szamolas() {
    // Kiválasztott pizza típusok és mennyiségek elérése
    const nevek = document.querySelectorAll(".nevek");
    const pizza1 = nevek[0].value;
    const pizza2 = nevek[1].value;
    const mennyisegek = document.querySelectorAll("#mennyiseg select");
    const mennyiseg1 = mennyisegek[0].value;
    const mennyiseg2 = mennyisegek[1].value;
  
    // Pizza árak
    const arak = {
      Margherita: 1800,
      Magyaros: 2070,
      Mexikói: 2080,
      "Sokk-sajtos": 2100,
      "Son-kukori": 1930,
      Sonkás: 1880,
    };
  
    // Sorok árának kiszámítása
    const osszeg1 = arak[pizza1] * mennyiseg1;
    const osszeg2 = arak[pizza2] * mennyiseg2;
  
    //Sorok árának megjelenítése
    const osszegInputok = document.querySelectorAll("#Ar #osszeg1");
    osszegInputok.forEach((input) => {
      input.value = osszeg1;
    });

    const osszegInputok2 = document.querySelectorAll("#Ar #osszeg2");
    osszegInputok2.forEach((input) => {
      input.value = osszeg2;
    });


    //Összes kiszámolása
    const vege = arak[pizza1] * mennyiseg1 + arak[pizza2] * mennyiseg2


    //Összes megjelenítése
    document.getElementById("ar").innerHTML = vege + ".-";
}