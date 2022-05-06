# PG6301 eksamen Fyrstikkposten

* [x] [Heroku](https://pg6301-exam-2022.herokuapp.com)
* [x] [GitHub repository](https://github.com/kristiania-pg6301-2022/pgr6301-exam-jessicafuung) 
* Ingen link til test rapport pga Github Actions gikk tom for minutter natten før innlevering. 

## Egenutfylling av funksjonelle krav

* [x] *Anonyme brukere skal se nyhetsaker når de kommer til nettsiden. Legg inn noen nyhetssaker for å demonstrere*
* [x] *Brukere kan logge seg inn. Det anbefales at du implementerer at brukerne logger seg inn med Google, men andre mekanismer er også akseptabelt*
* [x] *En bruker som er logget inn kan se på sin profilside (userinfo fra Google)*
* [x] *Brukere skal forbli logget inn når de refresher websiden*
* [x] *En bruker som er logget inn kan klikke på en nyhetssak for å se detaljene om nyhetssaken. Detaljene skal inkludere en nyhetskategori, overskrift, tekst og navn på den som publiserte den*
    * *Har utført en forenkling på dette punktet når brukeren er innlogget. Fikk dessverre litt lite tid til å flytte knappene (med titlene) til sidebaren etter innlogging. Det var tiltenkt at dersom brukeren ikke er innlogget, får de kun se nyhetstitlene, og etter innlogging vil sidebaren ha klikkbare titler. *
* [x] *"Redaksjonelle brukere" kan logge seg inn med Active Directory. Det må fungere å logge seg inn med en Active Directory på skolens AD ( domain_hint=egms.no )*
* [x] *Redaksjonelle brukere kan publisere nye nyhetsartikler*
* [x] *Nyhetsartikkel skal inneholde en kategori valgt fra en nedtrekksliste "select", tittel "input" og tekst "textarea"*
* [x] *Dersom noen allerede har publisert en nyhetsartikkel med samme tittel skal serveren sende HTTP status kode 400 og en*
* [x] *En bruker som er logget inn kan klikke på en nyhetssak for å se detaljene om nyhetssaken. Detaljene skal inkludere en nyhetskategori, overskrift, tekst og navn på den som publiserte den*
* [x] *Brukeren skal forhindres fra å sende inn en nyhetsartikkel som mangler kategori, tittel eller tekst*
* [x] *En redaksjonell bruker skal kunne redigere en artikkel de selv har publisert*
* [ ] *Når en ny sak publiseres, skal alle brukerne få se den nye saken umiddelbart. Bruk websockets for å sende oppdateringer*

## Egenutfylling av tekniske krav

* [x] Besvarelsen skal inneholde en README-fil med link til Heroku og test coverage
* [x] npm start skal starte server og klient. Concurrently og parcel anbefales
* [x] npm test skal kjøre tester. Testene skal ikke feile
* [x] Koden skal ha konsistent formattering. Prettier og Husky anbefales
* [x] Nettsidene skal ha god layout med CSS Grid (Holy Grail layout) og horisontal navigasjonsmeny. Brukeren må kunne navigere overalt uten å bruke "back" eller redigere URL
* [x] Serveren validerer at brukeren er logget inn
* [x] Innleveringen skal være i form av en ZIP-fil. Maks størrelse på fila er 1MB
* [x] Artikler skal lagres i MongoDB
* [x] Applikasjonen skal deployes til Heroku
* [x] Oppsett av package.json, parcel, express, prettier
* [x] React Router
* [x] Express app
* [x] Kommunikasjon mellom frontend (React) og backend (Express)
* [x] Deployment til Heroku
* [x] Bruk av MongoDB
* [x] OpenID Connect
* [x] Jest med dokumentert testdekning

## Bør-krav

* [x] Brukeren ser kun menyvalg som de har tilgang til
* [x] Brukere som går til en side de ikke har tilgang til blir bedt om å logge inn
* [x] Brukere bør alltid se listen over artikler når de navigerer seg rundt på sidene

## Bilder av test:coverage
Finner dem i .zip mappen
