# Burrow-react

## **A folder structure designed to keep everything in one place**

## Index
[About the project](#about)

[Explanation](#explanation)

[How to contribute](#contribution)

[Copyright](#copyright)
 
 <a name="about"/>
 
 ## About the project
 I was searching for a folder structure that I would use for my react projects but couldn't find one that suited my needs, so I decided to create my own where it would be easy for a programmer or team members to work with and maintain.
 
<a name="explanation"/>

## Explanation
We start organizing from pages => layouts => components.

Every page will have its own directory, and every page, such as the Home directory, will have a layout directory containing all its layout. And every layout will contain its components.
```
src/
├── App.jsx
├── main.css
├── main.jsx
└── pages/
    ├── Home/
    │   ├── Home.jsx
    │   ├── index.js
    │   └── layout/
    │       ├── MainLayout/
    │       │   ├── MainLayout.jsx
    │       │   ├── components/
    │       │   │   ├── ComponentOne/
    │       │   │   │   ├── Btn.jsx
    │       │   │   │   ├── ComponentOne.jsx
    │       │   │   │   ├── Title.jsx
    │       │   │   │   └── index.js
    │       │   │   ├── ComponentThree/
    │       │   │   │   ├── Btn.jsx
    │       │   │   │   ├── ComponentThree.jsx
    │       │   │   │   ├── Title.jsx
    │       │   │   │   └── index.js
    │       │   │   ├── ComponentTwo/
    │       │   │   │   ├── Btn.jsx
    │       │   │   │   ├── ComponentTwo.jsx
    │       │   │   │   ├── Title.jsx
    │       │   │   │   └── index.js
    │       │   │   └── index.js
    │       │   └── index.js
    │       └── index.js
    └── index.js
}
```
The index.js file makes importing components, layouts, or whatever we want easier. For example, if we wanted to import a component named ComponentOne from ComponentOne.jsx, inside of MainLayout.jsx we would do so like this:

```javascript
// Without index.js file
import { ComponentOne } from "./components/ComponentOne.jsx"

// With index.js file
import { ComponentOne } from "./components/"
```
<br>

Utility functions, hooks, assets, tests, or anything similar will reside in a directory, depending on who they belong to. For example, each page will have its own assets directory if needed, each layout will have its own assets directory, and each component will have its own assets directory.

And with that, we get this:
```
src/
├── App.jsx
├── main.css
├── main.jsx
└── pages/
    ├── Home/
    │   ├── Home.jsx
    │   ├── __tests__/
    │   ├── index.js
    │   └── layout/
    │       ├── MainLayout/
    │       │   ├── MainLayout.jsx
    │       │   ├── __tests__/
    │       │   ├── components/
    │       │   │   ├── ComponentOne/
    │       │   │   │   ├── Btn.jsx
    │       │   │   │   ├── ComponentOne.jsx
    │       │   │   │   ├── Title.jsx
    │       │   │   │   ├── __tests__/
    │       │   │   │   ├── api/
    │       │   │   │   ├── assets/
    │       │   │   │   ├── context/
    │       │   │   │   ├── data/
    │       │   │   │   ├── hooks/
    │       │   │   │   ├── index.js
    │       │   │   │   ├── lib/
    │       │   │   │   └── utils/
    │       │   │   ├── ComponentThree/
    │       │   │   │   ├── Btn.jsx
    │       │   │   │   ├── ComponentThree.jsx
    │       │   │   │   ├── Title.jsx
    │       │   │   │   ├── __tests__/
    │       │   │   │   ├── api/
    │       │   │   │   ├── assets/
    │       │   │   │   ├── context/
    │       │   │   │   ├── data/
    │       │   │   │   ├── hooks/
    │       │   │   │   ├── index.js
    │       │   │   │   ├── lib/
    │       │   │   │   └── utils/
    │       │   │   ├── ComponentTwo/
    │       │   │   │   ├── Btn.jsx
    │       │   │   │   ├── ComponentTwo.jsx
    │       │   │   │   ├── Title.jsx
    │       │   │   │   ├── __tests__/
    │       │   │   │   ├── api/
    │       │   │   │   ├── assets/
    │       │   │   │   ├── context/
    │       │   │   │   ├── data/
    │       │   │   │   ├── hooks/
    │       │   │   │   ├── index.js
    │       │   │   │   ├── lib/
    │       │   │   │   └── utils/
    │       │   │   └── index.js
    │       │   └── index.js
    │       └── index.js
    └── index.js
```
<br>

So far, so good, but what if we wanted to **share** utility functions between components or components between pages?

For that, we create a "reused-code" directory.
```
src/
├── App.jsx
├── main.css
├── main.jsx
└── pages/
    ├── Home/
    │   ├── Home.jsx
    │   ├── __tests__/
    │   ├── index.js
    │   └── layout/
    │       ├── MainLayout/
    │       │   ├── MainLayout.jsx
    │       │   ├── __tests__/
    │       │   ├── components/
    │       │   │   ├── ComponentOne/
    │       │   │   │   ├── Btn.jsx
    │       │   │   │   ├── ComponentOne.jsx
    │       │   │   │   ├── Title.jsx
    │       │   │   │   ├── __tests__/
    │       │   │   │   ├── api/
    │       │   │   │   ├── assets/
    │       │   │   │   ├── context/
    │       │   │   │   ├── data/
    │       │   │   │   ├── hooks/
    │       │   │   │   ├── index.js
    │       │   │   │   ├── lib/
    │       │   │   │   └── utils/
    │       │   │   ├── ComponentThree/
    │       │   │   │   ├── Btn.jsx
    │       │   │   │   ├── ComponentThree.jsx
    │       │   │   │   ├── Title.jsx
    │       │   │   │   ├── __tests__/
    │       │   │   │   ├── api/
    │       │   │   │   ├── assets/
    │       │   │   │   ├── context/
    │       │   │   │   ├── data/
    │       │   │   │   ├── hooks/
    │       │   │   │   ├── index.js
    │       │   │   │   ├── lib/
    │       │   │   │   └── utils/
    │       │   │   ├── ComponentTwo/
    │       │   │   │   ├── Btn.jsx
    │       │   │   │   ├── ComponentTwo.jsx
    │       │   │   │   ├── Title.jsx
    │       │   │   │   ├── __tests__/
    │       │   │   │   ├── api/
    │       │   │   │   ├── assets/
    │       │   │   │   ├── context/
    │       │   │   │   ├── data/
    │       │   │   │   ├── hooks/
    │       │   │   │   ├── index.js
    │       │   │   │   ├── lib/
    │       │   │   │   └── utils/
    │       │   │   ├── index.js
    │       │   │   └── reused-code-between-components/     <=======
    │       │   │       ├── api/
    │       │   │       ├── assets/
    │       │   │       ├── context/
    │       │   │       ├── data/
    │       │   │       ├── hooks/
    │       │   │       ├── index.js
    │       │   │       ├── lib/
    │       │   │       └── utils/
    │       │   └── index.js
    │       ├── index.js
    │       └── reused-code-between-layouts/                <=======
    ├── index.js
    └── reused-code-between-pages/                          <=======
        ├── index.js
        └── layout/
            ├── Footer/
            │   ├── Footer.jsx
            │   ├── __tests__/
            │   ├── components/
            │   │   ├── __tests/
            │   │   └── index.js
            │   └── index.js
            ├── Navbar/
            │   ├── Navbar.jsx
            │   ├── __tests__/
            │   ├── components/
            │   │   ├── __tests__/
            │   │   └── index.js
            │   └── index.js
            └── index.js
```

The end.

<a name="contribution"/>

## How to contribute
Before submitting a pull request, please start a [new discussion](https://github.com/ahmed-muhamad/burrow-react/discussions/new?category=ideas) to discuss what you want to add, fix, or whatever your heart wishes.

<a name="explanation"/>

## Copyright
For personal use:\
You can do whatever you want with burrow-react if you do not claim you are the original owner.

For commercial use:\
You are not allowed to use burrow-react if:

1. You claim that you are the original owner.
2. You deal with anything against the Islamic law.

If you do not fall under what has been mentioned, you can do whatever you want with burrow-react or profit from it.
