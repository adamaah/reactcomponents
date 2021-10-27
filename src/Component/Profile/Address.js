import React from "react";


function Address () {

    return (

        <React.Fragment>
            
            <div className="container defaultcss">
                <div className="row">
                    <h2 className="monAdresse">
                        Mon adresse :
                    </h2>
                    <p className="texteAdresse">
                        J'habite à Yoff, près du marché. 
                    </p>
                    <a href="https://goo.gl/maps/zaUv5Mskn2ufim1a9" target="_blank" className="lienAdresse">
                        Cliquez ici pour me retrouver 
                    </a>
                </div>
            </div>

        </React.Fragment>

    );
}
export default Address;



