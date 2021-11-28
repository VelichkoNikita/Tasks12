import React, { useState } from "react";
import '../Task5/Task5.scss'

const CardCollapseStyled = (props, index) => {
    return (
        <ul className="topmenu">
            <li><a >About<i className="fa"></i></a>
                <ul className="submenu">
                    <li><a href="#top">Якорь 1</a></li>
                    <li><a href="#middle">Якорь 2</a></li>
                </ul>
            </li>
            <li><a>Blog</a></li>
        </ul>
    )
}

export default CardCollapseStyled
