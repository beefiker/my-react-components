import { createGlobalStyle } from 'styled-components'
import theme from 'theme'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
    ${reset}
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
      background-color: #fff;
      padding: 10px 12px;
      box-shadow: 0 3px 10px 6px rgba($color: $color-navy, $alpha: 0.07);
      border-radius: 5px;
      white-space: normal;

      span {
        white-space: normal;
        word-break: break-all;
        &.blue {
          color: $color-blue;
        }

        &.desc {
          display: flex;
          flex-wrap: wrap;
          max-width: 150px;
          white-space: normal;
          word-break: break-all;
        }
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

/* FormLabel */
.form-label {
  z-index: 99;
  > span {
    font-size: 14px;
    margin-right: 2px;

    &.title {
      color: ${theme.color.gray1}
    }

    &.required {
      color: ${theme.color.blue}
    }
    &.left_required {
      color: ${theme.color.blue}
    }
  }

  .img-holder-tip {
    align-items: center;
    justify-content: center;
    position: relative;
    transform: translateY(2px);

    width: 14px;
    height: 14px;

    background: url('../../../static/img/icons/tip-hover.svg') no-repeat;
    background-size: 14px 14px;
    background-position: 50%;

    img {
      display: none;
    }

    .tooltip-container {
      display: none;
      background-color: #fff;
      padding: 10px;

      .tooltip-title {
        display: block;
        color: ${theme.color.gray3};
        font-size: 13px;
        margin-bottom: 11px;
      }
      .tooltip {
        display: block;
        color: ${theme.color.gray4};
        font-size: 12px;
        line-height: 18px;
      }
    }

    &:hover {
      .tooltip-container {
        display: block;
        position: absolute;
        z-index: 99;
        top: 25px;
        left: -10px;
        box-shadow: 0 0px 10px 3px;
        border-radius: 5px;
        background-color: #fff;

        &::before {
          content: '\00a0';
          display: block;
          height: 10px;
          width: 10px;
          top: -5px;
          z-index: -111;
          background-color: #fff;
          position: absolute;
          transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          -o-transform: rotate(45deg);
          -webkit-transform: rotate(45deg);
          box-shadow: -2000000px -3.5px 3px 0.13px rgba(178, 178, 178, 0.4);
        }
      }
    }
  }
}

`

export default GlobalStyles
