import { useState } from "react"
import { useEffect } from "react"
import './img/sor-korea_flag.png'


export default function TuristSteder() {
    //sør-korea, 1 won = 0.0080 kr
    //Zanzibar, 1 TZS = 0.00394 kr
    //Mexico, 1 peso = 0.55 kr
    //Storbritania, 1 pund = 14.05 kr
    const [won, setWon] = useState('');
    const [tzk, setTzk] = useState('');
    const [peso, setPeso] = useState('');
    const [kr, setKr] = useState('');
    const [pund, setPund] = useState('');
    

    const handleWonChange = (e) => {
        const value = e.target.value;
        setWon(value);
        setKr((value !== '' ? (value /125 ).toFixed(2) : ''));
        
      };

      const handleTzkChange = (e) => {
        const value = e.target.value;
        setTzk(value);
        setKr((value !== '' ? (value /255 ).toFixed(2) : ''));
      };

      const handlePesoChange = (e) => {
        const value = e.target.value;
        setPeso(value);
        setKr((value !== '' ? (value /1.80 ).toFixed(2) : ''));
      };

      const handlePundChange = (e) => {
        const value = e.target.value;
        setPund(value);
        setKr((value !== '' ? (value * 14 ).toFixed(2) : ''));
      };

      

    return(
        <>
        <h1>Ferie Steder</h1>
        <div className="sørkorea">
            <h2> Sør-korea</h2>
            <p>
                Sør-korea er en republikk i Øst-Asia, som ligger på den sørlige delen av den koreanske halvøy. <br />
                Sør-korea grenser mot Nord-korea i nord, Korestrede i sør, Østhavet i øst, og Gulehavet i vest. <br />
                Dette landet har en rik kultur og historie. Det er mange ting du kan gjøre på ferie i sør-korea. <br />
                For eksempel kan du dra til toppen av den 6. høyeste skyskraperen i verden, Lotte Tower. <br />
                Den er 555 meter høy, med 123 etasjer. Du kan også besøke sør-koreas største fornøyelses park Lotte World! <br />
                Det er en fornøyelsespark som er både innendørs og utendørs, med mange gøyale karuseller og aktiviteter. <br />
                Du kan lære mye interesant og bland annet kulturen dems, og ha gode opplevelser i sør-korea. <br />
            </p>
            <h3>Valuta Converter</h3>
            <label>Won: </label>
            <input 
              type="number" 
              value={won} 
              onChange={handleWonChange} 
              placeholder="Enter TZK"
            />
            <p>Kr: {kr} </p>
        </div>

        <div className="zanzibar">
            <h2> Zanzibar</h2>
            <p> 
                Zanzibar er en autonom del av Tanzania, og består av hovedøyene Unguja og Pemba, og mange mindre øyer. <br />
                Zanzibar har en rik historie vi kan lære mye av i dag. Zanzibar var et av landene som ble mest rammet av slaveri. <br />
                Det har vert slave handel i Zanzibar i minst tusen år, før det endelig sluttet i 1909. <br />
                I en periode var  to tredjedeler av befolkningen i Zanzibar slaver. Denne slavehanden hadde stor påvirkning <br />
                over landets kultur og økonomi. Hvis du har lyst til å lære mer om slavehandelen og Zanzibars historie <br />
                er Slave Museumet i Stone Town det beste stedet. Slev om landet har vert stort påvirket av slaveri, <br />
                så har Zanzibar i dag en interesang kultur, mange fantastisk natur og strenner, og mange turistatraksjoner. <br />
        </p>
        <h3>Valuta Converter</h3>
            <label>TZK: </label>
            <input 
              type="number" 
              value={tzk} 
              onChange={handleTzkChange} 
              placeholder="Enter Won"
            />
            <p>Kr: {kr} </p>
        </div>

        <div className="storbritania">
            <h2> Storbritania</h2>
            <p>
                Storbritania er et europeisk land og en stat i Vest-Europa. Storbritania er et konstituelt monarki, <br />
                som består av de tre riksdelene England, Wales, Skottland og Nord-Irland. Storbritania <br />
                har mange turistatraksjoner, hvis du liker Harry Potter er Warner Bros studio  i London for deg. <br />
                Dette er et sted med mange utstillinger i Harry Potter verdenen. Her får du sett <br />
                mange av stedene som ble brukt under selve Filmingen a Harry Potter. Dette er bare ett av de flere <br />
                turist stedene du kan besøke. De har mange pene og lærerike steder du kan besøke. <br />
            </p>
            <h3>Valuta Converter</h3>
            <label>Pund: </label>
            <input 
              type="number" 
              value={pund} 
              onChange={handlePundChange} 
              placeholder="Enter Pund"
            />
            <p>Kr: {kr} </p>
        </div>

        <div className="Mexico">
            <h2> Mexico</h2>
            <p>
                Mexico er en forbundsrepublikk i sør i Nord-Amerika. Mexico grenser til USA i nord, <br />
                Mexicogolfen i øst, Det Karibiske Hav i sør-øst, Belize og Gautemale i sør, og stillehavet i vest. <br />
                Mexico er det tredje største landet i Latin- Amerika etter Brazil og Argentina. Mexico har en pen natur <br />
                og flere turistatraksjoner. Du kan for eksempel dra til Mexico City, som er hovedstaten i Mexico.  <br />
                Her lærer du hvordan by livet i Mexico er. Du kan også dra å se på Tulum Mayanruinene. <br />
                Her kan du se og lære hvordan de levde i Mexico for flere hundre år siden, og lære om historien. <br />
                Mexico har også en rik natur, og mange pene strender du kan besøke. 
            </p>
            <h3>Valuta Converter</h3>
            <label>Peso: </label>
            <input 
              type="number" 
              value={peso} 
              onChange={handlePesoChange} 
              placeholder="Enter Peso"
            />
            <p>Kr: {kr} </p>
        </div>
        
        
        
        
        </>
    )
}