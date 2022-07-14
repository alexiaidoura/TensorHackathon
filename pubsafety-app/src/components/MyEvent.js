function MyEvent({data}){
    return (

        <div className="card">
            <h5 className="card-header">{data.event}</h5>
            <div className="card-body">
            <h5>{data.date}</h5>

                <table className="table">
                  <tbody>
                    <tr>
                        <td className="text-white font-weight-bold">Event:</td>
                        <td className="text-white">{data.event}</td>
                    </tr>
                    <tr>
                        <td className="text-white font-weight-bold">Date:</td>
                        <td className="text-white">{data.date}</td>
                    </tr>
                    
                  </tbody>
                </table>

            </div>
        </div>

)};
