const http = require('http');
const url = require('url');
const fs = require('fs');
const vergleich = require('./models/persistence');
// Erstelle den Web-Server
const server = http.createServer((req, res) => {
    const queryParams = url.parse(req.url, true).query;
    const suche = queryParams.search;
    res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"} );
    res.end(
        `
<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="utf-8">
    <title>Dadtorials</title>
   <style>
   body {
    font-family: "Helvetica", "Arial", 'Franklin Gothic Medium' !important;
}

h1 {
    display: inline-block;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: #b77104;
    font-size: 3em;
    letter-spacing: 0.05em;
    height: 0.7em;
    margin-top: 0;
    margin-bottom: 0;
}

h1::before {
    content: url(http://127.0.0.1:5500/web-technologien/v0/assets/img/TLogoNew.jpeg/50x50)
}
@media screen and (max-width: 768px) {
    h1{
        font-size: 1.7em;
    }
    header img{
        width: 30px;
        height: 30px;
    }
}

@media screen and (max-width: 580px) {
    h1{
        display: none;
    }
    header img{
        display: none;
    }
}

h2 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 2em;
    color: #b87c1d;
    text-shadow: 1px 1px 3px gray;
    height: 0.6em;
}

h3 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 1.5em;
    color: #c79e5d;
}

h4 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #6d5022;
    font-size: 1.3em;
}


header {
    border: double;
}

footer {
    bottom: 0px;
    position: sticky;
    font-size: 1em;
    height: max-content;
}
    
@media screen and (max-width: 580px) {
    nav.menu ul{
        display: none;
        }

    button.burger-menu {
        display: inline-block;
        cursor: pointer;
        }

    span.burger-icon {
        display: inline-block;
        }
}
    .menu {
        border: 1px solid black;
        border-radius: 5px;
        /*width: 100%;*/
        box-shadow: 4px 4px 4px 0px gray;
        display: flex;
        justify-content: space-between;
        align-items: center;
        }
    
    .menu ul {
        list-style-type: none;
        display: flex;
        }
    
    .menu ul a {
        display: inline;
        }
    .menu ul li {
        margin-right: 10px;
        margin-left: 10px;
        }  

    .menu ul li a.media:hover {
        color: white;
        background-color: blue;
    }
    .burger-menu {
        display: none;
        background: none;
        border: none;
    }
    .burger-icon {
        display: none;
        width: 30px;
        height: 30px;
        background-color: #ffffff00;
        margin-bottom: 4px;
        content: url(http://127.0.0.1:5500/web-technologien/v0/assets/img/speisekarte.png);
    }


.highlight {
    background-color: hsl(192, 59%, 79%);
}

tbody tr:nth-child(odd) {
    background-color: lightgray;
}

thead,
tfoot {
    background-color: lightskyblue;
}

.LogoL {
    float: left;
}

.TLogo {
    display: block;
    position: absolute;
    left: 120px;
}

.clearfix {
    clear: both;
}

figcaption {
    display: none;
}

header img {
    float: left;
}

#maincontainer,
#tutorial {
    display: flex;
}

main {
    border: 1px solid orange;
    flex: 1 70vh;
}

aside {
    flex: 1;
}

main form {
    margin-top: 5px;
}

#tutorial {
    flex-direction: row-reverse;
    justify-content: space-between;
}

#axt {
    flex: 70% 1;
    margin-left: 42px;
}

.TLogo {
    position: static;
    flex: 1;
}


.border {
    border: 1px solid black;
}
@media screen and (max-width: 768px) {
    #maincontainer,
    aside {
        display: block;
    }
}
main section ul li{
    list-style-type: none;
}
   </style>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="http://127.0.0.1:5500/web-technologien/v0/assets/js/script.js"></script>
</head>

<body>
    <header>
        <img src="http://127.0.0.1:5500/web-technologien/v0/assets/img/TLogoNew.jpeg" alt="Logo Dadtorials" height="50em" width="50em">
        <a href="list.html">
            <h1>Dadtorials</h1>
        </a>
        <nav class="highlight menu">
            <button class="burger-menu" onclick="burger()">
                <span class="burger-icon"></span>
            </button>
            <ul>
            <li><a class="media" href="list.html">Liste der Kategorien</a></li>
            <li><a class="media" href="tutorials.html">Tutorials der Kategorie "X"</a></li>
            <li><a class="media" href="tutorial.html">Details zum Tutorial "Y"</a></li>
            <li><a class="media" href="form.html">Neues Tutorial erstellen</a></li>
            </ul>
            <script src="http://127.0.0.1:5500/web-technologien/v0/assets/js/burgermenu.js"></script>
        </nav>
    </header>
    <div id="maincontainer">
        <main>
            <section>
                <ul>
                ${vergleich.tutver.getTutorials(suche)}
                </ul>
            </section>
        </main>
        <aside class="highlight">
            <h3>Neue Tutorials</h3>
            <ul>
                <li>Node.js Der schnelle Einstieg, 28 Sep. 2025 - Dauer: 1 Std 58 Min.</li>
                <li>Angular Grundkurs 1: Das Ökosystem 29.Aug. 2025 - Dauer: 1 Std 5 Min.</li>
            </ul>
        </aside>
    </div>
    <footer>
        <hr>
        &copy; by Daniel & Bennet
    </footer>
</body>

</html>
`);
}).listen(8844, 'localhost', function() {
  console.log(`Server läuft unter http://localhost:8844/`);
});
