function OneEvent({data}){
    const isThisWeek = {data.thisweek};
    return (
        <div className="card">
            <h5 className="card-header">{data.event}</h5>
            <div className="card-body">
            <h5>{data.location}</h5>

                <table className="table">
                  <tbody>
                    <tr>
                        <td className="text-white font-weight-bold">Title:</td>
                        <td className="text-white">{data.event}</td>
                    </tr>
                    <tr>
                        <td className="text-white font-weight-bold">Subtitle:</td>
                        <td className="text-white">{data.location}</td>
                    </tr>
                    <tr>
                        <td className="text-white font-weight-bold">Author:</td>
                        <td className="text-white">{data.date}</td>
                    </tr>
                    <tr>
                        <td className="text-white font-weight-bold">Publisher:</td>
                        <td className="text-white">{data.sponsor}</td>
                    </tr>
                    <tr>
                        <td className="text-white font-weight-bold">Description:</td>
                        <td className="text-white">{data.agegroup}</td>
                    </tr>
                  </tbody>
                </table>

            </div>
        </div>

)};
