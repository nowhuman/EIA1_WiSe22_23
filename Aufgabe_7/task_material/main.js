var Aufgabe_7;
(function (Aufgabe_7) {
    function auswahl(id) {
        let elements = Array.from(document.getElementsByClassName('wrapper'));
        elements.forEach(element => {
            element.classList.remove('active');
        });
        var height = 0;
        switch (id) {
            case 'de':
                document.getElementById('gesamtzahl_land').innerText = 'Deutschland';
                document.getElementById('gesamtzahl').innerText = (Deutschland2022 / 1000000.0).toLocaleString() + " Mio";
                document.getElementById('relativ_in_prozent').innerText = DeutschlandEinwohnerInProzent2022.toLocaleString() + "%";
                document.getElementById('wachstumsrate_in_prozent').innerText = DeutschlandWachstumsrate.toLocaleString() + "%";
                document.getElementById('wachstumsrate_gesamt').innerText = (DeutschlandWachstumsrateWert / 1000000.0).toLocaleString() + " Mio";
                document.getElementsByClassName('germany')[0].parentElement.parentElement.classList.toggle('active');
                height = DeutschlandEinwohnerInProzent2022;
                break;
            case 'fr':
                document.getElementById('gesamtzahl_land').innerText = 'Frankreich';
                document.getElementById('gesamtzahl').innerText = (Frankreich2022 / 1000000.0).toLocaleString() + " Mio";
                document.getElementById('relativ_in_prozent').innerText = FrankreichEinwohnerInProzent2022.toLocaleString() + "%";
                document.getElementById('wachstumsrate_in_prozent').innerText = FrankreichWachstumsrate.toLocaleString() + "%";
                document.getElementById('wachstumsrate_gesamt').innerText = (FrankreichWachstumsrateWert / 1000000.0).toLocaleString() + " Mio";
                document.getElementsByClassName('france')[0].parentElement.parentElement.classList.toggle('active');
                height = FrankreichEinwohnerInProzent2022;
                break;
            case 'it':
                document.getElementById('gesamtzahl_land').innerText = 'Italien';
                document.getElementById('gesamtzahl').innerText = (Italien2022 / 1000000.0).toLocaleString() + " Mio";
                document.getElementById('relativ_in_prozent').innerText = ItalienEinwohnerInProzent2022.toLocaleString() + "%";
                document.getElementById('wachstumsrate_in_prozent').innerText = ItalienWachstumsrate.toLocaleString() + "%";
                document.getElementById('wachstumsrate_gesamt').innerText = (ItalienWachstumsrateWert / 1000000.0).toLocaleString() + " Mio";
                document.getElementsByClassName('italy')[0].parentElement.parentElement.classList.toggle('active');
                height = ItalienEinwohnerInProzent2022;
                break;
            case 'es':
                document.getElementById('gesamtzahl_land').innerText = 'Spanien';
                document.getElementById('gesamtzahl').innerText = (Spanien2022 / 1000000.0).toLocaleString() + " Mio";
                document.getElementById('relativ_in_prozent').innerText = SpanienEinwohnerInProzent2022.toLocaleString() + "%";
                document.getElementById('wachstumsrate_in_prozent').innerText = SpanienWachstumsrate.toLocaleString() + "%";
                document.getElementById('wachstumsrate_gesamt').innerText = (SpanienWachstumsrateWert / 1000000.0).toLocaleString() + " Mio";
                document.getElementsByClassName('spain')[0].parentElement.parentElement.classList.toggle('active');
                height = SpanienEinwohnerInProzent2022;
                break;
            case 'eu':
                document.getElementById('gesamtzahl_land').innerText = 'Europa';
                document.getElementById('gesamtzahl').innerText = (Eu2022 / 1000000.0).toLocaleString() + " Mio";
                document.getElementById('relativ_in_prozent').innerText = "100 %";
                document.getElementById('wachstumsrate_in_prozent').innerText = EUWachstumsrate.toLocaleString() + "%";
                document.getElementById('wachstumsrate_gesamt').innerText = (EUWachstumsrateWert / 1000000.0).toLocaleString() + " Mio";
                height = 100;
        }
        document.getElementsByClassName('chart')[0].style['height'] = height + '%';
        return false;
    }
    Aufgabe_7.auswahl = auswahl;
    //2008 Einwohnerzahl
    let Deutschland2008 = 82110000;
    let Frankreich2008 = 64370000;
    let Italien2008 = 58830000;
    let Spanien2008 = 45950000;
    let Eu2008 = 500000000;
    //2022 Einwohnerzahl
    let Deutschland2022 = 84000000;
    let Frankreich2022 = 64600000;
    let Italien2022 = 59000000;
    let Spanien2022 = 47600000;
    let Eu2022 = 446800000;
    //Prozente berechnen 2008
    let DeutschlandEinwohnerInProzent2008 = (Deutschland2008 / Eu2008) * 100;
    let FrankreichEinwohnerInProzent2008 = (Frankreich2008 / Eu2008) * 100;
    let ItalienEinwohnerInProzent2008 = (Italien2008 / Eu2008) * 100;
    let SpanienEinwohnerInProzent2008 = (Spanien2008 / Eu2008) * 100;
    //Prozente berechnen 2022
    let DeutschlandEinwohnerInProzent2022 = (Deutschland2022 / Eu2022) * 100;
    let FrankreichEinwohnerInProzent2022 = (Frankreich2022 / Eu2022) * 100;
    let ItalienEinwohnerInProzent2022 = (Italien2022 / Eu2022) * 100;
    let SpanienEinwohnerInProzent2022 = (Spanien2022 / Eu2022) * 100;
    //Wachstumsrate als Wert 2008-2022 berechnen
    let DeutschlandWachstumsrateWert = Deutschland2022 - Deutschland2008;
    let FrankreichWachstumsrateWert = Frankreich2022 - Frankreich2008;
    let ItalienWachstumsrateWert = Italien2022 - Italien2008;
    let SpanienWachstumsrateWert = Spanien2022 - Spanien2008;
    let EUWachstumsrateWert = Eu2022 - Eu2008;
    //Wachstumsrate 2008-2022 berechnen
    let DeutschlandWachstumsrate = (100 / Deutschland2008) * DeutschlandWachstumsrateWert;
    let FrankreichWachstumsrate = (100 / Frankreich2008) * FrankreichWachstumsrateWert;
    let ItalienWachstumsrate = (100 / Italien2008) * ItalienWachstumsrateWert;
    let SpanienWachstumsrate = (100 / Spanien2008) * SpanienWachstumsrateWert;
    let EUWachstumsrate = (100 / Eu2008) * EUWachstumsrateWert;
})(Aufgabe_7 || (Aufgabe_7 = {}));
//# sourceMappingURL=main.js.map