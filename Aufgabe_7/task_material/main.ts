namespace Aufgabe_7{

  export function auswahl(event: Event,
                           land: string,
                     gesamtzahl: number,
             relativ_in_prozent: number,
       wachstumsrate_in_prozent: number,
           wachstumsrate_gesamt: number){
  
            let elements = Array.from(document.getElementsByClassName('wrapper'))
            elements.forEach(element => {
                element.classList.remove('active')
            });
            if(land != "Europa"){
              let target = (event.target as HTMLElement).parentElement.parentElement  //zurück zu wrapper
              target.classList.toggle('active')
              }
  
            document.getElementById('gesamtzahl_land').innerText = land
            document.getElementById('gesamtzahl').innerText = (gesamtzahl / 1000000.0).toLocaleString() + " Mio"
            document.getElementById('relativ_in_prozent').innerText = relativ_in_prozent.toLocaleString() + "%"
            document.getElementById('wachstumsrate_in_prozent').innerText = wachstumsrate_in_prozent.toLocaleString() + "%"
            document.getElementById('wachstumsrate_gesamt').innerText = (wachstumsrate_gesamt / 1000000.0).toLocaleString() + " Mio";
            
            (document.getElementsByClassName('chart')[0] as HTMLElement).style['height'] = relativ_in_prozent + '%'
  
            event.preventDefault()
            }
  
  
  //2008 Einwohnerzahl
  let Deutschland2008 = 82110000
  let Frankreich2008 = 64370000
  let Italien2008 = 58830000
  let Spanien2008 = 45950000
  let Eu2008 = 500000000
  
  
  //2022 Einwohnerzahl
  let Deutschland2022 = 84000000
  let Frankreich2022 = 64600000
  let Italien2022 = 59000000
  let Spanien2022 = 47600000
  let Eu2022 = 446800000
  
  
  //Prozente berechnen 2008
  let DeutschlandEinwohnerInProzent2008 = (Deutschland2008 / Eu2008)  * 100
  let FrankreichEinwohnerInProzent2008 = (Frankreich2008 / Eu2008)  * 100
  let ItalienEinwohnerInProzent2008 = (Italien2008 / Eu2008)  * 100
  let SpanienEinwohnerInProzent2008 = (Spanien2008 / Eu2008)  * 100
  
  
  //Prozente berechnen 2022
  let DeutschlandEinwohnerInProzent2022 = (Deutschland2022 / Eu2022)  * 100
  let FrankreichEinwohnerInProzent2022 = (Frankreich2022 / Eu2022)  * 100
  let ItalienEinwohnerInProzent2022 = (Italien2022 / Eu2022)  * 100
  let SpanienEinwohnerInProzent2022 = (Spanien2022 / Eu2022)  * 100
  
  
  //Wachstumsrate als Wert 2008-2022 berechnen
  let DeutschlandWachstumsrateWert = Deutschland2022 -  Deutschland2008
  let FrankreichWachstumsrateWert = Frankreich2022 -  Frankreich2008
  let ItalienWachstumsrateWert = Italien2022 -  Italien2008
  let SpanienWachstumsrateWert = Spanien2022 -  Spanien2008
  let EUWachstumsrateWert = Eu2022 -  Eu2008
  
  
  //Wachstumsrate 2008-2022 berechnen
  let DeutschlandWachstumsrate = (100 / Deutschland2008) * DeutschlandWachstumsrateWert
  let FrankreichWachstumsrate = (100 / Frankreich2008) * FrankreichWachstumsrateWert
  let ItalienWachstumsrate = (100 / Italien2008) * ItalienWachstumsrateWert
  let SpanienWachstumsrate = (100 / Spanien2008) * SpanienWachstumsrateWert
  let EUWachstumsrate = (100 / Eu2008) * EUWachstumsrateWert
  
  
  document.getElementById('de').addEventListener('click', (event) => {
    auswahl(event,
            "Deutschland",
            Deutschland2022,
            DeutschlandEinwohnerInProzent2022,
            DeutschlandWachstumsrate,
            DeutschlandWachstumsrateWert)
    event.preventDefault()
  })
  
  
  document.getElementById('fr').addEventListener('click', (event) => {
    auswahl(event,
            "Frankreich",
            Frankreich2022,
            FrankreichEinwohnerInProzent2022,
            FrankreichWachstumsrate,
            FrankreichWachstumsrateWert)
    event.preventDefault()
  })
  
  
  document.getElementById('es').addEventListener('click', (event) => {
    auswahl(event,
            "Spanien",
            Spanien2022,
            SpanienEinwohnerInProzent2022,
            SpanienWachstumsrate,
            SpanienWachstumsrateWert)
  })
  
  
  document.getElementById('it').addEventListener('click', (event) => {
    auswahl(event,
            "Italien",
            Italien2022,
            ItalienEinwohnerInProzent2022,
            ItalienWachstumsrate,
            ItalienWachstumsrateWert)
    event.preventDefault()
  })
  
  
  document.getElementById('eu').addEventListener('click', (event) => {
    auswahl(event,
            "Europa",
            Eu2022,
            100,
            EUWachstumsrate,
            EUWachstumsrateWert)
    event.preventDefault()
  })
  document.getElementById('eu').click()
  
  }