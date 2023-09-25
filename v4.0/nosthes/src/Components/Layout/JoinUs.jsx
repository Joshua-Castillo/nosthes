import React, { Fragment } from 'react';
import FrontStore from '../photos/front_store_3(2).png'

const JoinUs = (props) => {
    return (
        <Fragment  >
            <style type="text/css">
                {`
                    @media (min-width: 600px) {
                        .maxWidth {
                            width: 50rem;
                            margin-left: auto;
                            margin-right: auto;
                        }
                    }
                `}
            </style>
            <div id="joinus" className="row mx-auto mt-5 pb-5 container px-0 maxWidth">
                <h6 className="fw-bold text-center" >JOIN US</h6>
                <a href="https://www.google.com/maps/dir//nosthes+google+maps/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4cc91a6b172a7bf7:0x1d20aba3b04b6f1c?sa=X&ved=2ahUKEwjbuL-6ie7yAhWwSt8KHcE2Cd8Q9Rd6BAhUEAQ" className="text-dark">
                    <p className="description m-0 text-dark">
                        1609 Rue Sainte-Catherine Ouest,
                    </p>
                    <p className="description m-0 text-dark">
                        Montreal, Quebec H3H 1L8
                    </p>
                    <p className="description m-0 text-dark">
                        Metro Guy-Concordia (Guy exit)
                    </p>
                </a>
                <div className="maxWidth">
                    <h6 className="text-center mt-5">OPEN HOURS</h6>
                    <div className="border-top"></div>
                    <p className="description m-0">          Mon – Thu &emsp;12:00 PM – 9:00 PM</p>
                    <p className="description m-0">          Fri – Sat &emsp;&emsp;12:00 PM – 9:00 PM</p>
                    <p className="description ">          Sun &emsp;&emsp;&emsp;&emsp;12:00 PM – 9:00 PM</p>
                    <a className="description text-dark " href="tel:PHONE_NUM">          Tel. (514) 904-0246</a>
                </div>
                <img className="p-0 m-0" src={FrontStore} alt="" />
            </div>
        </Fragment >
    );
};

export default JoinUs;