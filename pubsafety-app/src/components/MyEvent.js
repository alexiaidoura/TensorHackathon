function MyEvent({data}){
    return (
        <>
            <h5>{data.event}</h5>
            <h5>{data.date}</h5>
            <h5>{data.location}</h5>
            <hr></hr>

                <table className="table">
                  <tbody>
                    <tr>
                        <td className="text-black font-weight-bold">Event:</td>
                        <td className="text-black">{data.event}</td>
                    </tr>
                    <tr>
                        <td className="text-black font-weight-bold">Date:</td>
                        <td className="text-black">{data.date}</td>
                    </tr>
                    
                  </tbody>
                </table>


         </>
)};
