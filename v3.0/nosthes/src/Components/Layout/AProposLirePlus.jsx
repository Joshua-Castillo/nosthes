import React, { useState } from "react";

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text">
            {isReadMore ? text.slice(0, 150) : text}
            <span onClick={toggleReadMore} className="read-or-hide text-decoration-underline">
                {isReadMore ? " ... lire plus" : " ... voir moins"}
            </span>
        </p>
    );
};

const Content = () => {
    return (
        <p className="text-center container">
            <ReadMore>
                Bienvenue chez NosThés Bistro Montréal, où nous servons une grande variété de boissons aux thés exotiques et une cuisine Taïwanaise authentique. NosThés est fier de vous offrir quelque chose de nouveau et différent à Montréal. Nos délicieux breuvages à base de lait et de thés savoureux, ainsi que notre menu étonnant sauront vous charmer! Venez goûter à notre thé signature aux perles qui nous a rendus populaires. NosThés s'est engagé à fournir en permanence des produits de qualité qui ajoutent du plaisir et de la saveur à votre vie.
            </ReadMore>
        </p>
    );
};

export default Content;
