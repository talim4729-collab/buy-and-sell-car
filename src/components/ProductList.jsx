import latestcarimage1 from "../assets/Latestcar1.jpg"
import latestcarimage2 from "../assets/Latestcar2.jpg"
import latestcarimage3 from "../assets/Latestcar3.jpg"
import latestcarimage4 from "../assets/Latestcar4.jpg"
import Itmbox from './Itmbox';
const images = [
  latestcarimage1,latestcarimage2,latestcarimage3,latestcarimage4
]
const cars = [
 {brand:"Audi > A6", carname:"Audi R8", year:"2017", gear:"Automatic", location:"Canada", price:"$46908 Fixed"},
 {brand:"BMW > Series 5", carname:"BMW M5", year:"2019", gear:"Automatic", location:"Germany", price:"$62000"},
 {brand:"Mercedes > C Class", carname:"Mercedes C300", year:"2018", gear:"Automatic", location:"USA", price:"$41000"},
 {brand:"Toyota > Supra", carname:"Toyota Supra GR", year:"2020", gear:"Manual", location:"Japan", price:"$53000"},
 {brand:"Ford > Mustang", carname:"Ford Mustang GT", year:"2019", gear:"Manual", location:"USA", price:"$45000"},
 {brand:"Lamborghini > Huracan", carname:"Huracan EVO", year:"2021", gear:"Automatic", location:"Italy", price:"$210000"},
 {brand:"Ferrari > F8", carname:"Ferrari F8 Tributo", year:"2022", gear:"Automatic", location:"Italy", price:"$280000"},
 {brand:"Tesla > Model S", carname:"Tesla Model S Plaid", year:"2023", gear:"Automatic", location:"USA", price:"$99000"},
 {brand:"Nissan > GTR", carname:"Nissan GTR R35", year:"2018", gear:"Automatic", location:"Japan", price:"$115000"},
 {brand:"Porsche > 911", carname:"Porsche 911 Carrera", year:"2020", gear:"Automatic", location:"Germany", price:"$130000"},
 {brand:"Honda > Civic", carname:"Honda Civic Type R", year:"2019", gear:"Manual", location:"UK", price:"$39000"},
 {brand:"Hyundai > Elantra", carname:"Elantra N", year:"2022", gear:"Automatic", location:"Korea", price:"$33000"},
 {brand:"Kia > Stinger", carname:"Kia Stinger GT", year:"2021", gear:"Automatic", location:"Korea", price:"$43000"},
 {brand:"Chevrolet > Camaro", carname:"Camaro SS", year:"2018", gear:"Manual", location:"USA", price:"$42000"},
 {brand:"Dodge > Charger", carname:"Charger Hellcat", year:"2021", gear:"Automatic", location:"USA", price:"$76000"},
 {brand:"Mazda > MX5", carname:"Mazda MX5 Miata", year:"2017", gear:"Manual", location:"Japan", price:"$28000"},
 {brand:"Volvo > XC90", carname:"Volvo XC90", year:"2020", gear:"Automatic", location:"Sweden", price:"$58000"},
 {brand:"Range Rover > Sport", carname:"Range Rover Sport", year:"2022", gear:"Automatic", location:"UK", price:"$95000"},
 {brand:"Jaguar > F Type", carname:"Jaguar F Type", year:"2019", gear:"Automatic", location:"UK", price:"$72000"},
 {brand:"Bugatti > Chiron", carname:"Bugatti Chiron", year:"2023", gear:"Automatic", location:"France", price:"$3000000"}
];

const ProductList = () => {
  return (
    <>
     <section>
        <div className="cards">
             {cars.map((car, index) => (
        <Itmbox
         className='card itms'
          key={index}
          carimage={images[index % images.length]}
          brand={car.brand}
          carname={car.carname}
          link="/"
          year={car.year}
          gear={car.gear}
          location={car.location}
          price={car.price}
        />
      ))}
        </div>
     </section>
    </>
  );
};

export default ProductList;