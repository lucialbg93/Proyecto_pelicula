import React from "react"

export const Watchlist = () =>{

    return(
        <div className="watchlists">
            <div className="watchlist">
                <div className="list_close">
                    <button name="x"></button>
                </div>
                <h1>su lista</h1>
            </div>
            <div className="listcenter">
                <div className="listitem">
                    <img src="" alt="" />
                    <div>
                        <h1>titulo</h1>
                    </div>
                    <div>
                        <button>Visto</button>
                    </div>
                    <div>
                        <button>Eliminar</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}