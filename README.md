Contelizer — React + TypeScript + Redux Toolkit

Projekt Contelizer to aplikacja React składająca się z trzech zadań rekrutacyjnych dostępnych z poziomu jednej aplikacji (hubu).
Każde zadanie zostało zrealizowane jako osobna podstrona w obrębie jednego projektu React.

Struktura projektu
```
contelizer/
├── public/
├── src/
│   ├── pages/
│   │   ├── Hub/
│   │   ├── Task1Scrambler/
│   │   ├── Task2Pesel/
│   │   └── Task3Users/
│   ├── components/
│   ├── features/
│   ├── hooks/
│   ├── shared/
│   └── index.tsx
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

Technologie

React 19 + TypeScript
Redux Toolkit + RTK Query
React Router DOM v7
Sass (SCSS Modules)
Jest + React Testing Library
GitHub Pages (deploy)

Wymagania
Node.js 18 lub nowszy
npm 9 lub nowszy

Instalacja zależności:
npm install

Konfiguracja środowiska (.env)
Aby uruchomić zadanie 3 — Users API, należy skonfigurować token API GoREST.
W katalogu głównym utwórz plik .env i dodaj:

REACT_APP_GOREST_TOKEN=TWÓJ_TOKEN_GOREST

Uruchamianie projektu
Lokalny serwer deweloperski:
```
npm start
```


Aplikacja zostanie uruchomiona pod adresem:
```
http://localhost:3000
```

Testy jednostkowe

Testy zaimplementowane są dla zadania nr 2 (PESEL Validator)
Do uruchomienia testów:
```
npm run test:pesel
```

Budowanie aplikacji
Tworzenie produkcyjnej wersji projektu:
npm run build
