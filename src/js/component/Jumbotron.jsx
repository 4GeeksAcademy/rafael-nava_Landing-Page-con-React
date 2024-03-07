import React from "react";
//create your first component
const Jumbotron = () => {
    return (
        <div className="d-flex">
            <div className="card w-100" id="jumbo">
                <div className="card-body">
                    <h1 className="card-title">A Warm Welcome!</h1>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt edit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
                    <a href="#" className="btn btn-primary">Call to action!</a>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;