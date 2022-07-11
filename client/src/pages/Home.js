import React , {useState,useEffect} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { getAllCars } from '../redux/actions/carsActions'
import { Col, Row , Divider , DatePicker, Checkbox} from 'antd'
import {Link} from 'react-router-dom'
import Spinner from '../components/Spinner';
import moment from 'moment'
const {RangePicker} = DatePicker
function Home() {
    const {cars} = useSelector(state=>state.carsReducer)
    const {loading} = useSelector(state=>state.alertsReducer)
    const [totalCars , setTotalcars] = useState([])
    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(getAllCars())
    }, [])

    useEffect(() => {

        setTotalcars(cars)
        
    }, [cars])


    function setFilter(values){

        var selectedFrom = moment(values[0] , 'MMM DD yyyy HH:mm')
        var selectedTo = moment(values[1] , 'MMM DD yyyy HH:mm')

        var temp=[]

        for(var car of cars){

              if(car.bookedTimeSlots.length == 0){
                  temp.push(car)
              }
              else{

                   for(var booking of car.bookedTimeSlots) {

                       if(selectedFrom.isBetween(booking.from , booking.to) ||
                       selectedTo.isBetween(booking.from , booking.to) || 
                       moment(booking.from).isBetween(selectedFrom , selectedTo) ||
                       moment(booking.to).isBetween(selectedFrom , selectedTo)
                       )
                       {

                       }
                       else{
                           temp.push(car)
                       }

                   }

              }

        }


        setTotalcars(temp)


    }

    return (
        <DefaultLayout>

             <Row className='mt-3' justify='center'>
                 
                 <Col lg={20} sm={24} className='d-flex justify-content-left'>

                     <RangePicker showTime={{format: 'HH:mm'}} format='MMM DD yyyy HH:mm' onChange={setFilter}/>
                 
                 </Col>

             </Row>

              {loading == true && (<Spinner/>)}
              <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
{totalCars.map(car=>{
                       return <>
            
                               
 {/* <div class="card-deck mt-16 ml-2 mr-2">
  <div class="card" style={{width: "400px"}}>
    <img class="card-img-top" src={car.image} className="carimg" />
    <div class="card-body">
      <h5 class="card-title">{car.name}</h5>
      <p class="card-text">Rent Per Hour {car.rentPerHour} /-</p>
      <button className="btn1 mr-2"><Link to={`/booking/${car._id}`}>Book Now</Link></button>
    </div>
  </div>
  <div class="card">
  <img class="card-img-top" src={car.image} className="carimg" />
    <div class="card-body">
      <h5 class="card-title">{car.name}</h5>
      <p class="card-text">Rent Per Hour {car.rentPerHour} /-</p>
      <button className="btn1 mr-2"><Link to={`/booking/${car._id}`}>Book Now</Link></button>
    </div>
  </div>
  <div class="card">
  <img class="card-img-top" src={car.image} className="carimg" />
    <div class="card-body">
      <h5 class="card-title">{car.name}</h5>
      <p class="card-text">Rent Per Hour {car.rentPerHour} /-</p>
      <button className="btn1 mr-2"><Link to={`/booking/${car._id}`}>Book Now</Link></button>
    </div>
  </div>
</div> */}

{/* <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
  
    <div class="rounded overflow-hidden shadow bg-gray-300 ">
      <img class="w-full" src={car.image} alt="car" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 uppercase">{car.name}</div>
        <p class="text-gray-700 text-base">
        Rent Per Hour {car.rentPerHour}
        </p>
        <div>
            
        </div>
      </div>
      <button className="bg-indigo-500 text-white px-4 py-2 rounded-xl"><Link to={`/booking/${car._id}`} className="text-white">Book Now</Link></button>
    </div> */}
    
    {/* <div class="rounded overflow-hidden shadow bg-gray-300">
      <img class="w-full" src={car.image} alt="car" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 uppercase">{car.name}</div>
        <p class="text-gray-700 text-base">
        Rent Per Hour {car.rentPerHour}
        </p>
      </div>
      <button className="bg-indigo-500 text-white px-4 py-2 rounded-xl"><Link to={`/booking/${car._id}`} className="text-white">Book Now</Link></button>
    </div> */}

 
    {/* <div class="rounded overflow-hidden shadow bg-gray-300">
      <img class="w-full" src={car.image} alt="car" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 uppercase">{car.name}</div>
        <p class="text-gray-700 text-base">
        Rent Per Hour {car.rentPerHour}
        </p>
      </div>
      <button className="bg-indigo-500 text-white px-4 py-2 rounded-xl"><Link to={`/booking/${car._id}`} className="text-white">Book Now</Link></button>
    </div> */}
  {/* </div> */}
{/*                             
  <div class="card ml-6 mr-6" style={{width: "400px"}}>
    <img class="card-img-top" src={car.image} className="carimg" />
    <div class="card-body">
      <h5 class="card-title">{car.name}</h5>
      <p class="card-text">Rent Per Hour {car.rentPerHour} /-</p>
      <button className="btn1 mr-2"><Link to={`/booking/${car._id}`}>Book Now</Link></button>
    </div>
  </div> */}


      <div class="p-4 md:w-1/3 l">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:shadow-x">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={car.image} alt="blog" />
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3 uppercase">{car.name}</h1>
            <p class="leading-relaxed mb-3">Rent Per Hour {car.rentPerHour} /-</p>
            <p class="leading-relaxed mb-3">Fuel Type {car.fuelType} </p>
            <p class="leading-relaxed mb-3">Seat Capacity {car.capacity} </p>
            <div class="flex items-center flex-wrap ">
            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mx-auto "><Link to={`/booking/${car._id}`} class="text-white">Book Now</Link></button>
            </div>
          </div>
        </div>
      </div>
      
      

 {/* <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src={car.image} alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}


 
<br/>
                
                       </>
                   })}
                   </div>
  </div>
</section>






        </DefaultLayout>
    )
}

export default Home
