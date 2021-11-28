import * as React from "react";
import '../Task5/Task5.scss'
import CardCollapseStyled from './CardCollapseStyled'
import Logo1 from '../../Images/1Task/12Storeez.svg'

export default class Task5 extends React.Component {
    componentDidMount() {
        window.addEventListener("scroll", this.resizeHeaderOnScroll);
    }
    resizeHeaderOnScroll() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 200,
            headerEl = document.getElementById("js-header");

        if (distanceY > shrinkOn) {
            headerEl.classList.add("smaller");
        } else {
            headerEl.classList.remove("smaller");
        }
    }
    render() {
        return (
            <div id="wrapper">
                <header id="js-header">
                    <img src={Logo1} id="logo" />
                    <nav>
                        <CardCollapseStyled />
                    </nav>
                </header>
            </div>
        );
    }
}
