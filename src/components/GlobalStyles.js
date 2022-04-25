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
  font-size: 62.5%;
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

}

li {
  font-family: 'Raleway', sans-serif; 
}
`

export default GlobalStyles
