import { createGlobalStyle } from 'styled-components'
import theme from 'theme'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
    ${reset}
    &::-webkit-scrollbar-track {
    background-color: #fff;
    border-radius: 10px;
  }

  &::-webkit-scrollbar {

    width: 3px;
    height: 0px;
    background-color: #fff;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: gray;
  }
    a{
        text-decoration: none;
        color:inherit;
    }
    *{
        box-sizing: border-box;
        padding:0;
        margin:0;
    }
    h1{
        font-weight:${theme.semiBold};
        font-size:1.5rem;
        margin-bottom:1rem;
        color:${theme.color.gray0};
    }
    p{

    }
    body{
        font-size: 1rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background:${theme.color.gray7};
        
    }
`

export default GlobalStyles
