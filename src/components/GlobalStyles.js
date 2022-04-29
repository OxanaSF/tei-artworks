import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Raleway&family=Ramaraja&display=swap');




* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}


html {
  scroll-behavior: smooth;
}


body {
    font-family: 'Poppins', sans-serif;
    color: #161616;
}


h1 {
    font-size: 6rem;
    font-family: 'Ramaraja', serif;
    font-weight: 400;
}

h2 {
  font-size: 4rem;
  font-family: 'Ramaraja', serif;
  font-weight: 400;

}

li {
  list-style-type: none;
}

.li, .listItem,
li a {
  color: #161616;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  letter-spacing: 0.063rem;
  text-decoration: none;
}

p{
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
}
`

export default GlobalStyles
