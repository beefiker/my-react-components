import { createGlobalStyle } from 'styled-components'
import theme from 'theme'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
    ${reset};
    a,
    /* input,
    button,
    textarea {
      all: unset;
    } */
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    sub,
    sup,
    tt,
    var,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video,
    button,
    input,
    br,
    textarea {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
      color: #444;
      line-height: 1.2;
      letter-spacing: -0.36px;
    }
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
      display: block;
    }
    a {
      display: inline-block;
      text-decoration: none;
      color: inherit;
      cursor: pointer;
    }
    button {
      cursor: pointer;
      @include no-drag;
    }
    img {
      border: none;
      vertical-align: middle;
    }
    ol,
    ul,
    li {
      list-style: none;
    }
    i,
    em {
      font-style: normal;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    fieldset {
      border: none;
    }
    legend {
      width: 1px;
      height: 1px;
      overflow: hidden;
      visibility: hidden;
      line-height: 0;
      font-size: 0;
      position: absolute;
      left: -999px;
    }
    input[type='text']::-ms-clear {
      display: none;
    }
    input[type='password']::-ms-clear {
      display: none;
    }
    .button-wrap {
      width: 100%;
      justify-content: center;
      
      .button {
        width: 120px;
        height: 38px;
        border-radius: 6px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor:pointer;

        &.cancel {
          background-color: ${theme.color.gray5};
          margin-right: 12px;
        }

        &.submit {
          background-color: ${theme.color.gray8};
        }
      }
    }
    .title{
      font-size:1.5rem;
    }
    .apple {
      font-family: 'appleM';
    }
    .appleB {
      font-family: 'appleB';
    }
    .appleEB {
      font-family: 'appleEB';
    }
    .appleL {
      font-family: 'appleL';
    }
    .appleH {
      font-family: 'appleH';
    }
    .appleR {
      font-family: 'appleR';
    }
    .appleSB {
      font-family: 'appleSB';
    }
    .appleT {
      font-family: 'appleT';
    }
    .appleUL {
      font-family: 'appleUL';
    }
    &::-webkit-scrollbar-track {
      background-color: gray;
      border-radius: 10px;
    }

    &::-webkit-scrollbar {

      width: 3px;
      height: 0px;
      background-color: gray;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #fff;
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
        color:${theme.color.gray1};
    }
    p, span{
        color:${theme.color.gray3};
    }
    body{
        font-size: 1rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background:${theme.color.gray7};
        
    }

    /* HOVER TEXT */
    .f-hover-text {
      display: flex;
      position: fixed;
      flex-wrap: wrap;
      word-break: break-all;

      z-index: 9999;
      max-width: 150px;
      max-height: 200px;
      background-color: #fff;
      padding: 10px 12px;
      /* box-shadow: 0 3px 10px 6px rgba($color: $color-navy, $alpha: 0.07); */
      box-shadow: 0 3px 10px 6px rgba(0, 0, 0, 0.07);
      border-radius: 5px;
      white-space: normal;

      span {
        white-space: normal;
        word-break: break-all;
      }
    }

    /* HOVER TIP */
    .hover-wrap {
      display: none;
      top: 0px;
      left: 0px;
      .hover {
        position: relative;
        background: #fff;
        border: 1px solid $color-shortcut;
        box-shadow: 0 3px 20px 2px $color-shortcut;
        z-index: 50;
        border-radius: 4px;
        &:before {
          content: '';
          position: absolute;
          top: -5px;
          left: 22px;
          position: absolute;
          @include square(7px);
          background: #fff;
          border-top: 1px solid $color-shortcut;
          border-right: 1px solid $color-shortcut;
          transform: rotate(-45deg);
          z-index: 100;
        }
      }
    }


    @keyframes slide-left {
      from {
        transform: translateX(30px);
        opacity: 0;
      }

      to {
        transform: translateX(0px);
        opacity: 1;
      }
    }
    @keyframes slide-up {
      from {
        transform: translateY(30px);
        opacity: 0;
      }

      to {
        transform: translateY(0px);
        opacity: 1;
      }
    }
`

export default GlobalStyles
