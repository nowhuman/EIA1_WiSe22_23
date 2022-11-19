console.log("Einwohneranzahl");
//2008 Einwohnerzahl
let Deutschland2008 = 82110000;
let Frankreich2008 = 64370000;
let Italien2008 = 58830000;
let Spanien2008 = 45950000;
let Eu2008 = 500000000;
//Prozente berechnen
let DeutschlandEinwohnerInProzent = (Deutschland2008 / Eu2008) * 100;
let FrankreichEinwohnerInProzent = (Frankreich2008 / Eu2008) * 100;
let ItalienEinwohnerInProzent = (Italien2008 / Eu2008) * 100;
let SpanienEinwohnerInProzent = (Spanien2008 / Eu2008) * 100;
//2022 Einwohnerzahl
let Deutschland2022 = 84000000;
let Frankreich2022 = 64600000;
let Italien2022 = 59000000;
let Spanien2022 = 47600000;
let Eu2022 = 446800000;
//Wachstumsrate 2008-2022 berechnen
let DeutschlandWachstumsrate = (Deutschland2008 / Deutschland2022) * 100;
let FrankreichWachstumsrate = (Frankreich2008 / Frankreich2022) * 100;
let ItalienWachstumsrate = (Italien2008 / Italien2022) * 100;
let SpanienWachstumsrate = Math.round((Spanien2008 / Spanien2022) * 100);
let EUWachstumsrate = (Eu2008 / Eu2022) * 100;
//Wachstumsrate als Wert 2008-2022 berechnen
let DeutschlandWachstumsrateWert = Deutschland2022 - Deutschland2008;
let FrankreichWachstumsrateWert = Frankreich2022 - Frankreich2008;
let ItalienWachstumsrateWert = Italien2022 - Italien2008;
let SpanienWachstumsrateWert = Math.round((Spanien2022 / Spanien2008));
let EUWachstumsrateWert = Eu2022 - Eu2008;
console.log("Die Einwohnerzahl in Deutschland beträgt im Jahr 2022: " + Deutschland2022 + "%");
console.log("Die Einwohnerzahl in Frankreich beträgt im Jahr 2022: " + Frankreich2022 + "%");
console.log("Die Einwohnerzahl in Italien beträgt im Jahr 2022: " + Italien2022 + "%");
console.log("Die Einwohnerzahl in Spanien beträgt im Jahr 2022: " + Spanien2022 + "%");
console.log("Deutschland Relativ zur Gesamtzahl in der EU  " + Eu2022 + "%");
console.log("Frankreich Relativ zur Gesamtzahl in der EU" + FrankreichEinwohnerInProzent + "%");
console.log("Italien Relativ zur Gesamtzahl in der EU" + ItalienEinwohnerInProzent + "%");
console.log("Spanien Relativ zur Gesamtzahl in der EU " + SpanienEinwohnerInProzent + "%");
console.log("Wachstumsrate Deutschland  " + DeutschlandWachstumsrate + "%");
console.log("Wachstumsrate Frankreich  " + FrankreichWachstumsrate + "%");
console.log("Wachstumsrate Italien  " + ItalienWachstumsrate + "%");
console.log("Wachstumsrate Spanien   " + SpanienWachstumsrate + "%");
console.log("Wachstumsrate EU   " + EUWachstumsrate + "%");
console.log("Wachstumsrate Deutschland als Wert " + DeutschlandWachstumsrateWert + " Mio");
console.log("Wachstumsrate Frankreich als Wert " + FrankreichWachstumsrateWert + " Mio");
console.log("Wachstumsrate Italien als Wert " + ItalienWachstumsrateWert + " Mio");
console.log("Wachstumsrate Spanien als Wert " + SpanienWachstumsrateWert + " Mio");
console.log("Wachstumsrate EU als Wert  " + EUWachstumsrateWert + " Mio");
//# sourceMappingURL=main.js.map