## Demo
This project is deployed on Github Pages: [https://zhukmj.github.io/svitla-test/](https://zhukmj.github.io/svitla-test/)

## Technologies used
* create-react-app
* React with hooks
* Redux
* Material-UI
* Typescript

## Search

### Default behavior
When you do normal search `foo bar`, the program will look for rows where at least one column has `foo bar` substring in it.

### Keywords
There are two keywords available `AND` and `OR`.

> Please note that keywords should always be upper-cased

When you search `foo AND bar`, the program will look for all rows which have a column with `foo` and a column with `bar` substrings at the same time.

When you search `foo OR bar`, the program will look for all rows with `bar` _plus_ all rows with `bar`.

It may look confusing, but the idea behind is that `AND` means all criteria must be in the same row, and `OR` means that criteria can be in different rows.

## Running this project locally
After clonning this repo, inside the project directory run:

```
npm install
npm start
```
