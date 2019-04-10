import React from "react";


function Navbar({ message, score, topScore }) {
  return (
      
    <nav className="bg-nav  navbar">

        <div class="navbar-fixed">
    
            <nav>
                <div class="nav-wrapper">
                    <div className="col list-inline-item my-auto nav-calc-font m-0 p-0 text-center">
                        {/* <h4>Click All 15 Images to Win</h4>  */}
                        {message}
                    </div>
                </div>
            </nav>

        </div>

        <div className="col list-inline-item my-auto nav-calc-font m-0 p-0 score-li-width text-center">
            SCORE: {score} |  HIGH SCORE: {topScore}
        </div>

    </nav>
  );
}

export default Navbar;

