import React from "react";
//create your first component
const Card = () => {
    return (
        <div className="d-flex">
            <div className="card" id="cards2">
                <img src="https://www.shutterstock.com/shutterstock/photos/2195309495/display_1500/stock-photo-funny-dark-skinned-woman-with-crazy-facial-expression-looks-at-laptop-screen-on-light-blue-2195309495.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://www.shutterstock.com/es/image-photo/funny-darkskinned-woman-crazy-facial-expression-2195309495" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card" id="cards2">
                <img src="https://www.shutterstock.com/shutterstock/photos/1932550823/display_1500/stock-photo-young-businessman-using-laptop-in-his-office-happy-man-working-on-computer-at-his-workplace-1932550823.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://www.shutterstock.com/es/image-photo/young-businessman-using-laptop-his-office-1932550823" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card" id="cards2">
                <img src="https://www.shutterstock.com/shutterstock/photos/1591227439/display_1500/stock-photo-excited-man-looking-at-laptop-screen-surprised-by-good-online-news-happy-male-workers-having-fun-1591227439.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://www.shutterstock.com/es/search/crazy-laptop" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card" id="cards2">
            {/* <div className="card" id="cards2"style={{ width: '25%' }}> */}
                <img src="https://www.shutterstock.com/shutterstock/photos/2306759415/display_1500/stock-photo-freelance-work-distance-online-work-e-working-summer-business-business-man-in-suit-drink-summer-2306759415.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://www.shutterstock.com/es/image-photo/crazy-summer-business-drink-cocktail-using-2288824713" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>
    );
};

export default Card;