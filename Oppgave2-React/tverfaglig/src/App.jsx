import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <>
       <h1>Tverfaglig Projekt</h1>
       <h2> Planlegging </h2>
       <p>
         Navnestandarden vår er 'PC - IP-adressen til PC-en'. Så for eksempel «PC-192.168.1.61» <br />
          Vi har fordelt IP-adressene slik at Svein tar 192.168.1.60, jeg tar 192.168.1.61, og Håkon tar 192.168.1.62. <br /> <br />
          Ved partisjon av diskene må jeg slette alle de allerede eksisterende diskene. <br />
         Jeg vet at Windows trenger omtrent 70 GB, og vi burde ha litt ekstra plass, så 100 GB er en bra mengde. 
       </p>

       <h2> Windows instillasjon </h2>
       <p>
       Det aller første jeg gjorde var å søke å finne ut hvordan man installerer Windows.  <br />
       Deretter gikk jeg inn på Microsoft og prøvde å installere en ISO for Windows 11 på en minnepenn. <br />
       Jeg hadde ikke tilgang til å laste den ned, så jeg fikk en minne-penn av Tobias som allerede hadde ISO. <br /> <br />

       Jeg plugget den inn i den PC-en jeg skulle installere Windows på. <br />
       Så restartet jeg PC, men avbrøt den normale start metoden ved å trykke på Enter. <br />
       Deretter gikk jeg inn på bot menyen, og startet instillasjons prosessen. <br />
       Jeg aksepterte Windows villkårende, valgte språk, Key binds osv. Deretter valgte jeg Custom instillasjon. <br /> <br />

       Jeg slettet de diskene som allerede var på PC-en fra før, Jeg pasjonerte 100GB til Windows. <br />
       Når det var fikset, gikk jeg videre til at den faktisk skulle installere. <br /> <br />

       Når instillasjonen var ferdig plugget jeg ut Minnepennen, og restartet PC-en. <br />
       Når jeg åpnet PC-en valgte jeg språk, tastatur, Navn på PC-en, Passord, og sikkerhets spørsmål. <br />
       Etter det skulle jeg velge nettverk, da gikk jeg videre uten å velge nett. <br />
       PC-en restarta på nytt, og instillasjonen av Windows 10 var ferdig.
       </p>
       <h2> IP og Ping </h2>
       <p>
       Deretter endret jeg IP-adressen min inne på innstillinger, til 192.168.1.61, og koblet sammen min og svein sin PC. <br />
       Jeg gjorde «ping 192.168.1.60» for å se om jeg kunne sende pakker til svein, men det fungerte ikke, på grunn av brannmuren.  <br /> <br />

       For å endre dette søkte jeg på firewall og gikk inn på Windows Defender Firewall with Advanced Security. <br />
       Jeg gikk inn på inbound rule, scrollet ned til File and printer Sharing, og enabla deling med ping. <br />
       Så nå gir brannmuren tillatelse til å sende pakker med ping. <br /> <br />
       Jeg prøvde  ping en gang til, og denne gangen fungerte det.
       </p>
        <h2>Hjelpe Håkon </h2>
        <p>
          Håkon var syk den dagen hvor vi gjorde alt dette. <br />
          Derfor måtte jeg hjelpe han, med å installere Windows og komme i til likt punk alle de andre i klassen er på. <br />
          Jeg hjalp Håkon med det samme, jeg nettopp har dokumentert.
          </p>
          <h2>FTP</h2>
          <p>
          Når jeg hadde hjulpet Håkon, installerte jeg FileZilla. <br />
           Svein satt i gang serveren han installerte, og jeg og Håkon koblet til serveren. <br /> <br />

           Når jeg var koblet opp mot serveren prøvde jeg å overføre et bilde av en ku. <br />
           Først hadde jeg problemer med at serveren ikke kobla seg til, <br />
            men det var fordi Ethernet kabelen var ikke koblet bra nokk inn i adapteren. <br />
           Jeg passet på at den var koblet til, og prøvde på nytt. Denne gangen fungerte det helt fint.
          </p>
          <h2> Hva har du lært gjennom denne oppgaven?</h2>
          <p>
          Jeg har lært hvordan man installerer Windows 10, og hvordan man pasjonerte diskene. <br />
          Jeg har også lært hvordan man endrer IP adresser, og endrer innstillingene til brannmuren.
          </p>
          <h2>Hva har din innsats og fokus vært?</h2>
          <p>
          Jeg ga mye innsats og fokuserte på arbeidet. <br />
          Jeg har aldri gjort dette før, så det var vanskelig og jeg trengte en del hjelp,<br />
          men jeg lærte mye av å prøve og feile. 
          </p>
          <h2>Om du skulle utføre oppgaven en gang til, hva ville du gjort annerledes?</h2>
          <p> Jeg ville ha gjort ting riktig uten hjelp. <br />
            Nå vet jeg hva jeg skal gjøre, og hvordan jeg skal gjøre det. <br />
            Jeg ville tenkt mer på disk oppsettet, og slettet de diskene som allerede eksisterte, <br />
            og pasjonert det riktig, allerede første gangen. <br />
            Når jeg hjalp Håkon den andre gangen hadde vi ingen problemer, og jeg kunne vise han uten noen hjelp fra andre. <br />
          </p>
          <h2>Hva har du fått til, hva må du øve mer på?</h2>
          <p>
          Jeg burde egentlig øve mer på hele innstallerings prosessen, selv om jeg fikk til alt til slutt. <br />
          Neste gang jeg gjør det, vet jeg hvordan jeg skal gjøre det, og det vill bli mye enklere. <br />
          Jeg fikk fint til å endre IP-adresse og endre brannmur regler. <br />
          Jeg fikk til FTP serveren, og å dele filer ved hjelp av FTP.
          </p>

          <h2>Brukerveiledning til FW </h2>
          <p>
          1.	Søk på Firewall i søkefeltet på oppgavelinja. <br /> <br />
          2.	Åpne Windows Defender Firewall with Advanced Security. <br /> <br />
          3.	Her inne kan du endre innstillingene på hva slags aktivitet som kan slippes inn, og sendes ut. <br /> <br />
          4.	For å gjøre det mulig å bruke ping kommandoen, gikk jeg inn på Inbound Rules. <br /> <br />
          5.	Scrollet ned til F. <br /> <br />
          6.	Trykket på den øverste «File and Printer Sharing( Echo Request – ICMPv4-In) <br /> <br />

          </p>

    </>
  )
}

export default App
