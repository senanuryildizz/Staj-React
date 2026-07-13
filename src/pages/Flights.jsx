import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";


function Flights(){

    const [flights,setFlights] = useState([]);


    useEffect(()=>{

        fetch("/flights.json")
        .then(response => response.json())
        .then(data => {

            setFlights(data);

        });


    },[]);



    return(

        <main style={{padding:"30px"}}>

            <h1>
                Tüm Uçuşlar
            </h1>


            {
                flights.map((flight)=>(

                    <ProductCard

                        key={flight.id}

                        productName={
                            `${flight.from} → ${flight.to}`
                        }

                        airline={
                            flight.airline
                        }

                        price={
                            flight.price
                        }

                        time={
                            flight.time
                        }

                        direct={
                            flight.direct
                        }

                    />

                ))
            }


        </main>

    )

}


export default Flights;