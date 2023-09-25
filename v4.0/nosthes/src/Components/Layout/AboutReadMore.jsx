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
                {isReadMore ? " ... read more" : " ... show less"}
            </span>
        </p>
    );
};

const Content = () => {
    return (
        <div className="text-center container">
            <ReadMore>
                Welcome to NosThés Bistro Montreal, where we serve a great variety of exotic tea beverages and authentique Taiwanese cuisine.
                NosThés is proud to provide you with something new and different from anywhere else in Montreal. Our delicious concoctions of milk and tea based beverages complimented by Taiwanese gourmet style cooking are sure to charm you! Come and taste our signature pearl tea that made us popular. NosThés is committed to continuously provide quality products that add a bit fun and mix a little flavor in your life.
            </ReadMore>
        </div>
    );
};

export default Content;
