import styled from 'styled-components'
const WrapMain = styled.div`
/* const {isOpen} = props ; */
background-color: ${(props) => props.isOpen ?  "rgba(0,0,0,.5)": "#F1F5F8"};
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
position: relative;
    .sidenav {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #fff;
        overflow-x: hidden;
        transition: 0.5s;
        display: grid;
        grid-template-rows: 1fr 100px;

    }
    a {
        text-decoration: none;
    }
    .a-style {
        padding: 12px 12px 12px 22px;
        text-decoration: none;
        font-size: 20px;
        line-height: 30px;
        font-weight: 400;
        color: #243a52;
        display: block;
        transition: 0.3s;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        :hover {
            background-color: #F1F5F8;
            color: #243a52;
        }
    }

    .sidenav .closebtn {
        font-size: 36px;
        color: #bb2525;
        margin-right: 7%;
        :hover {
            color: #E66B6B;
        }
    }

    @media screen and (max-height: 450px) {
        .sidenav {padding-top: 15px;}
        .sidenav a {font-size: 18px;}
    }

    .icon-style {
        position: absolute;
        left: 2%;
        top: 1%;
        cursor:pointer;
        width: 100%;
        font-size: 30px;
        fill: #49A6E9;
        animation-duration: 2s;
        animation-name: slidein;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
    }

    .wrap-logo {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo {
            font-size: 30px;
            line-height: 24px;
            font-weight: 400;
            color: #222222;
            text-shadow: 2px 2px 4px gray;
            margin-left: 7%;
            span {
                color: #49A6E9;
                text-shadow: 2px 2px 4px gray;
            }
        }
    }

    .icon {
        fill: #324d67;
        margin-right: 10px;
        
    }

    .social-group {
        display: flex;
        align-items: center;
        justify-content: center;
        a {
        padding: 0;
        text-decoration: none;
        padding: 12px 6px 12px 6px;
    }
        .social-icon {
            fill: #49a6e9;
            :hover {
                fill: #212121;
                background-color: none;
            }
        }
    }

    .btn-style {
        background-color: #000;
        width: 125px;
        height: 30px;
        color: #fff;
        font-size: 14px;
        text-transform: uppercase;
        border-radius: 4px;
        outline: none;
        border: 1px solid #000;
        :hover {
            background-color: transparent;
            color: #222222;
        }
    }
    .modal {
        width: 600px;
        height: 300px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: calc(100% - 300px) / 2;
        left: calc(100% - 600px) / 2;
        :focus {
            background: rgba(0,0,0,.5);
        }
        .title {
            font-size: 28px;
            line-height: 28px;
            font-weight: 700;
            color: #102a42;
        }
        .close-btn {
            position: absolute;
            right: 20px;
            top: 20px;
            font-size: 36px;
            fill: #bb2525;
            :hover {
                color: #E66B6B;
            }
        }
    }

    @keyframes slidein {
    from { transform: scaleX(1) scaleY(1); margin-left: -49%; margin-top: 1%}
    to   { transform: scaleX(1.5) scaleY(1.5); margin-left: -49%; margin-top: 1%}
    }
`;
export {WrapMain}