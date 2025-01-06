# SlutUppgiftJavascript
Kortfattad beskrivning av projektet och hur man kör igång det lokalt:

Välkommen till min arcane-inspirerade filmhemsida! För att köra projektet lokalt, följ dessa steg:

Gå till mitt GitHub-repo.
Klicka på den gröna knappen som säger "Code" och kopiera HTTPS-länken.
Öppna GitHub Desktop, klicka på "File" och välj "Clone".
Klistra in den kopierade länken och döp projektet till valfritt namn.
Öppna projektet i Visual Studio Code.
Starta live-servern för att se det i din webbläsare.
Figma-länk: Figma-skiss (Allt förutom prestanda över 90% enligt Lighthouse, vilket garanterar en snabb och responsiv användarupplevelse.)

Tekniska aspekter:

Jag har uppfyllt kraven för JSON genom att hämta data från API:et och konvertera den till JSON-format. Användning av stringify och parse möjliggör effektiv hantering av data i localStorage.

För säkerhet använder jag HTTPS vid API-förfrågningar för att skydda datakommunikationen. Asynkronitet implementeras med async och await, vilket säkerställer att hemsidan förblir responsiv medan jag väntar på data.

API-användning:

API: The Movie Database (TMDb)
URL/Endpoint: https://api.themoviedb.org/3/discover/movie
API-nyckel: 949cecccxxxxxxxxxxxxef42b2b36 hemlig
Parameter: &with_genres=${genreId} (Exempel på genre-ID:n inkluderar: action: 28, adventure: 12, comedy: 35, osv.)
Jag valde att hämta filmer till min hemsida med hjälp av movie-endpointen. Jag skapade en genremap där jag inkluderade olika genre-ID:n som parametrar för att hämta olika typer av filmer.

När det kommer till UX/UI har jag skapat en design i Figma för att säkerställa en solid plan. Jag inkluderar alt-texter för att göra webbplatsen tillgänglig för fler användare. Färgvalen har hög kontrast för bättre läsbarhet, och jag har placerat menyn till höger för att underlätta användning för högerhänta, vilket är en majoritet av användarna.

Navigering och användning av applikationen:

Min hemsida är användarvänlig. Du kan enkelt klicka på knappar för att upptäcka filmer inom olika teman. Om du är osäker på vad du vill se, finns det en knapp för att visa alla filmer. Har du en specifik film i åtanke, kan du söka direkt efter den.

Du kan även skapa din egen topplista genom att spara och ge betyg till filmer du har sett, vilket gör det enkelt att rekommendera dem till dina vänner. Dessutom kan du spara filmer som du vill se vid ett senare tillfälle. För varje film finns det en knapp för att läsa mer om dess innehåll.

Om du har några frågor finns det ett kontaktformulär där du kan skicka in dina funderingar till oss på Couch Quest.


Mina viktiga commits,
localstorage Done
fetch function done.
Errorhandeling done
redone search function to work on all movies, had to look for them on alt tags and also make sure they dont show up more than one time since they exist in more than 1 catogory
Redid the fetchfunction on buttons to make it easier to maintain

Jag mergade promse.all, localstroage samt errorhandling in i dev men lite strul vart en ny dev och därifrån till main
