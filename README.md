Contelizer — React + TypeScript + Redux Toolkit
Demo: https://pawelnowicki87.github.io/contelizer/

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

Konfiguracja środowiska (.env)

Aby uruchomić zadanie 3 — Users API, aplikacja wymaga tokena autoryzacyjnego do API GoREST.

W projekcie został dołączony bezpieczny token testowy, umieszczony w pliku .env,
który umożliwia pełne działanie aplikacji (pobieranie oraz edycję użytkowników) na potrzeby oceny projektu.


Token ten został utworzony wyłącznie do celów rekrutacyjnych i zostanie dezaktywowany po zakończeniu procesu rekrutacji.
Można go bezpiecznie używać do przeglądania, testowania i edycji danych użytkowników w aplikacji.
