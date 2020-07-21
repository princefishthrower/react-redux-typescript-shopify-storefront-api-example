import React from "react";
import "../styles/Nav.css";
import { setCartOpen } from "../store/cartUI/actions";

export default function Nav() {
    return (
        <div className="nav">
            <ul>
                <li className="home">
                    <button>This</button>
                </li>
                <li className="tutorials">
                    <button>Is An</button>
                </li>
                <li className="about">
                    <button>Awesome</button>
                </li>
                <li className="news">
                    <button>Shop</button>
                </li>
                <li className="contact">
                    <button>Nav</button>
                </li>
                <li className="contact">
                    <button onClick={() => setCartOpen(true)}>
                        Shopify Cart (I work! CLICK ME!)
                    </button>
                </li>
            </ul>
        </div>
    );
}
