# SlutUppgiftJavascript
Så här drar du igång koden:
Gå till mitt GitHub-repo:
Klicka på den gröna knappen som säger Code.
Kopiera HTTPS-länken:
Kopiera länken som visas.
Öppna GitHub Desktop:
Klicka på File och välj Clone.
Klistra in länken:
Klistra in den kopierade länken i fältet och döp projektet till valfritt namn.
Öppna projektet:
Använd Visual Studio Code för att öppna den klonade mappen.
Starta live-servern:
Kör projektet med hjälp av live-servern för att se det i din webbläsare.

Figma länk här under
https://www.figma.com/design/Fa1idwcp9Q6Phyjl6kK17p/Filmsida?node-id=0-1&p=f&t=SMfYf5Jjsriv4oH4-0

Jag har uppfyllt kraven för JSON genom att hämta data från API:et och konvertera den till JSON-format. Jag använder stringify och parse för att hantera data i localStorage.

För säkerhetens skull använder jag HTTPS när jag gör API-förfrågningar, vilket skyddar datakommunikationen. Jag implementerar också asynkronitet med async och await, vilket gör att hemsidan förblir responsiv medan jag väntar på data.

När det kommer till UX/UI har jag skapat en design i Figma för att säkerställa en solid plan. Jag inkluderar alt-texter för att göra webbplatsen tillgänglig för fler användare. Färgvalen har hög kontrast för bättre läsbarhet, och jag har placerat menyn till höger för att underlätta användning för högerhänta, vilket är en majoritet av användarna.

detta är mitt api https://api.themoviedb.org/3/
detta är min endpoint discover/movie
detta är min api 949ceccc803d4d64aa682d6ef42b2b36
detta är min parameter &with_genres=${genreId}
    action: 28,
    adventure: 12,
    animation: 16,
    comedy: 35,
    crime: 80,
    documentary: 99,
    drama: 18,
    horror: 27,
    music: 10402,
    mystery: 9648,
    romance: 10749,
    sciFi: 878,
    tvMovie: 10770,
    thriller: 53,
    war: 10752,
    western: 37
Jag valde att hämta filmer till min hemsida med hjälp av movie-endpointen. För att göra detta skapade jag en genremap där jag inkluderade olika genre-ID:n som parametrar för att hämta olika typer av filmer.  



