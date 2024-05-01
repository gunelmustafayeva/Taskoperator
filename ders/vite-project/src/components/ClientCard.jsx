import React from "react";

function ClientCard({name,phone,card}){
    const isalltrue=name&&phone&&card
    const withoutCard=name&&phone&&!card
        return (
            <div className="card" style={{ width: "18rem", backgroundColor: isalltrue? "gray":withoutCard ?"red": "white"  }}>
              <div className="card-body">
                <h5 className="card-title">Имя клиента: {name || "Anonimous"}</h5>
                {phone && <h6 className="card-subtitle mb-2 text-muted">Телефон: {phone}</h6>}
                <p className="card-text">Номер карты: {card || "is not specified" }</p>
              </div>
            </div>
          );
  }
export default ClientCard