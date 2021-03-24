
/*
import React, { Component } from 'react';
import './bootstrap.min.css'; 
import BootstrapTable from 'react-bootstrap-table-next';

const data = [
  {
      "name": "Urban Beldum",
      "location": "Escuintla",
      "age": 4,
      "infectedtype": "non-imported",
      "state": "symptomatic"
  },
  {
      "name": "Idalia Cumberpatch",
      "location": "Quetzaltenango",
      "age": 36,
      "infectedtype": "communitary",
      "state": "symptomatic"
  },
  {
      "name": "Pat Barnsdale",
      "location": "Alta Verapaz",
      "age": 49,
      "infectedtype": "communitary",
      "state": "asymptomatic"
  },
  {
      "name": "Carter Grotty",
      "location": "Escuintla",
      "age": 27,
      "infectedtype": "communitary",
      "state": "asymptomatic"
  },
  {
      "name": "Adda Wherry",
      "location": "Izabal",
      "age": 4,
      "infectedtype": "non-imported",
      "state": "asymptomatic"
  },
  {
      "name": "Latisha Gheorghe",
      "location": "Santa Rosa",
      "age": 31,
      "infectedtype": "non-imported",
      "state": "symptomatic"
  },
  {
      "name": "Perl Behnke",
      "location": "San Marcos",
      "age": 41,
      "infectedtype": "imported",
      "state": "symptomatic"
  },
  {
      "name": "Tedman Ilden",
      "location": "Sololá",
      "age": 56,
      "infectedtype": "non-imported",
      "state": "symptomatic"
  },
  {
      "name": "Evelin Jorgensen",
      "location": "Escuintla",
      "age": 14,
      "infectedtype": "communitary",
      "state": "symptomatic"
  },
  {
      "name": "Kristoforo Leuchars",
      "location": "Quiché",
      "age": 56,
      "infectedtype": "communitary",
      "state": "asymptomatic"
  },
  {
      "name": "Helli Clayill",
      "location": "Jalapa",
      "age": 54,
      "infectedtype": "imported",
      "state": "symptomatic"
  },
  {
      "name": "Marcela Poleye",
      "location": "Sololá",
      "age": 12,
      "infectedtype": "communitary",
      "state": "symptomatic"
  },
  {
      "name": "Napoleon Roden",
      "location": "El Progreso",
      "age": 29,
      "infectedtype": "imported",
      "state": "asymptomatic"
  },
  {
      "name": "Emelia Giotto",
      "location": "Chimaltenago",
      "age": 56,
      "infectedtype": "imported",
      "state": "symptomatic"
  },
  {
      "name": "Clay Wyeth",
      "location": "Zacapa",
      "age": 10,
      "infectedtype": "non-imported",
      "state": "asymptomatic"
  },
  {
      "name": "Isabel St. Pierre",
      "location": "Santa Rosa",
      "age": 37,
      "infectedtype": "communitary",
      "state": "asymptomatic"
  },
  {
      "name": "Brittne O'Carran",
      "location": "Huehuetenango",
      "age": 17,
      "infectedtype": "communitary",
      "state": "symptomatic"
  },
  {
      "name": "Erna Canton",
      "location": "Alta Verapaz",
      "age": 41,
      "infectedtype": "non-imported",
      "state": "asymptomatic"
  },
  {
      "name": "Barnett Skirling",
      "location": "Petén",
      "age": 16,
      "infectedtype": "communitary",
      "state": "asymptomatic"
  },
  {
      "name": "Marlo Peres",
      "location": "Escuintla",
      "age": 3,
      "infectedtype": "non-imported",
      "state": "symptomatic"
  },
  {
      "name": "Griffith Mattingson",
      "location": "Alta Verapaz",
      "age": 10,
      "infectedtype": "imported",
      "state": "asymptomatic"
  },
  {
      "name": "Ruthie Legrave",
      "location": "Totonicapán",
      "age": 41,
      "infectedtype": "non-imported",
      "state": "symptomatic"
  },
  {
      "name": "Skell Gaskell",
      "location": "Jutiapa",
      "age": 56,
      "infectedtype": "imported",
      "state": "asymptomatic"
  },
  {
      "name": "Patsy Cord",
      "location": "Jalapa",
      "age": 5,
      "infectedtype": "communitary",
      "state": "symptomatic"
  },
  {
      "name": "Willetta Denholm",
      "location": "Suchitepequez",
      "age": 19,
      "infectedtype": "non-imported",
      "state": "asymptomatic"
  },
  {
      "name": "Chariot Cubin",
      "location": "Alta Verapaz",
      "age": 27,
      "infectedtype": "communitary",
      "state": "symptomatic"
  },
  {
      "name": "Terese Grzeskowski",
      "location": "Totonicapán",
      "age": 12,
      "infectedtype": "communitary",
      "state": "asymptomatic"
  },
  {
      "name": "Kissiah Bolesma",
      "location": "Sololá",
      "age": 55,
      "infectedtype": "communitary",
      "state": "symptomatic"
  },
  {
      "name": "Alvira Spittall",
      "location": "Guatemala",
      "age": 8,
      "infectedtype": "imported",
      "state": "symptomatic"
  },
  {
      "name": "Dino Easey",
      "location": "El Progreso",
      "age": 11,
      "infectedtype": "imported",
      "state": "asymptomatic"
  },
  {
      "name": "Minni Galpen",
      "location": "Petén",
      "age": 36,
      "infectedtype": "communitary",
      "state": "asymptomatic"
  },
  {
      "name": "Alford Durram",
      "location": "Chimaltenago",
      "age": 8,
      "infectedtype": "communitary",
      "state": "asymptomatic"
  },
  {
      "name": "Rudy Leggis",
      "location": "San Marcos",
      "age": 47,
      "infectedtype": "non-imported",
      "state": "symptomatic"
  },
  {
      "name": "Robby Woliter",
      "location": "Chimaltenago",
      "age": 9,
      "infectedtype": "communitary",
      "state": "asymptomatic"
  },
  {
      "name": "Elmer Bransden",
      "location": "Izabal",
      "age": 58,
      "infectedtype": "imported",
      "state": "symptomatic"
  },
  {
      "name": "Emilee Scowcraft",
      "location": "Quiché",
      "age": 1,
      "infectedtype": "non-imported",
      "state": "asymptomatic"
  },
  {
      "name": "Bent Reilly",
      "location": "Jalapa",
      "age": 1,
      "infectedtype": "imported",
      "state": "symptomatic"
  },
  {
      "name": "Una Moores",
      "location": "Retalhuleu",
      "age": 15,
      "infectedtype": "imported",
      "state": "asymptomatic"
  },
  {
      "name": "Jannelle Birtle",
      "location": "Santa Rosa",
      "age": 20,
      "infectedtype": "communitary",
      "state": "symptomatic"
  },
  {
      "name": "Ertha MacMeeking",
      "location": "Santa Rosa",
      "age": 10,
      "infectedtype": "non-imported",
      "state": "asymptomatic"
  },
  {
      "name": "Tabina Haryngton",
      "location": "Guatemala",
      "age": 29,
      "infectedtype": "non-imported",
      "state": "asymptomatic"
  },
  {
      "name": "Sephira Zanotti",
      "location": "Quiché",
      "age": 56,
      "infectedtype": "non-imported",
      "state": "symptomatic"
  },
  {
      "name": "Ruddy Gibbie",
      "location": "Retalhuleu",
      "age": 31,
      "infectedtype": "non-imported",
      "state": "asymptomatic"
  },
  {
      "name": "Roxanna McCullouch",
      "location": "Huehuetenango",
      "age": 32,
      "infectedtype": "communitary",
      "state": "symptomatic"
  },
  {
      "name": "Arlie Greensmith",
      "location": "Jalapa",
      "age": 21,
      "infectedtype": "non-imported",
      "state": "symptomatic"
  },
  {
      "name": "Duke Kimbly",
      "location": "Jutiapa",
      "age": 41,
      "infectedtype": "non-imported",
      "state": "asymptomatic"
  },
  {
      "name": "Joana Clissell",
      "location": "Guatemala",
      "age": 5,
      "infectedtype": "imported",
      "state": "asymptomatic"
  },
  {
      "name": "Udall Gyves",
      "location": "Jalapa",
      "age": 29,
      "infectedtype": "non-imported",
      "state": "asymptomatic"
  },
  {
      "name": "Raoul Hamberston",
      "location": "Totonicapán",
      "age": 52,
      "infectedtype": "non-imported",
      "state": "symptomatic"
  },
  {
      "name": "Wit Minghetti",
      "location": "Jalapa",
      "age": 39,
      "infectedtype": "communitary",
      "state": "asymptomatic"
  },
  {
      "name": "Kermy Welling",
      "location": "Totonicapán",
      "age": 42,
      "infectedtype": "communitary",
      "state": "symptomatic"
  },
  {
      "name": "Staffard Attride",
      "location": "Retalhuleu",
      "age": 29,
      "infectedtype": "communitary",
      "state": "symptomatic"
  },
  {
      "name": "Kristel Yegorev",
      "location": "Sacatepequez",
      "age": 25,
      "infectedtype": "imported",
      "state": "symptomatic"
  },
  {
      "name": "Adlai Stollmeyer",
      "location": "Sacatepequez",
      "age": 29,
      "infectedtype": "communitary",
      "state": "asymptomatic"
  },
  {
      "name": "Lemar McEwen",
      "location": "Suchitepequez",
      "age": 25,
      "infectedtype": "non-imported",
      "state": "asymptomatic"
  },
  {
      "name": "Maia Burdon",
      "location": "Jalapa",
      "age": 18,
      "infectedtype": "communitary",
      "state": "symptomatic"
  },
  {
      "name": "Florinda Malia",
      "location": "Suchitepequez",
      "age": 40,
      "infectedtype": "non-imported",
      "state": "asymptomatic"
  },
  {
      "name": "Hobart Ply",
      "location": "Petén",
      "age": 47,
      "infectedtype": "imported",
      "state": "asymptomatic"
  },
  {
      "name": "Arri Ruthven",
      "location": "Alta Verapaz",
      "age": 30,
      "infectedtype": "non-imported",
      "state": "symptomatic"
  },
  {
      "name": "Kore Dowley",
      "location": "San Marcos",
      "age": 30,
      "infectedtype": "non-imported",
      "state": "symptomatic"
  },
  {
      "name": "Hamlin Antonsson",
      "location": "El Progreso",
      "age": 1,
      "infectedtype": "imported",
      "state": "asymptomatic"
  }
];


function RenderPortfolio({portfolio}) {
  Object.values(portfolio).map(function (deptArray) { 
    return deptArray.map(function (person) {
      return (
        <div className='row' key={some-unique-key}>
          <div className='col-md-4'>{person.location}</div>
        </div>
      )            
    })
  })
}


class Reporte9 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : data
        };
    }

    render() {

        const portfolio_list = this.state.data.map( (element) => {
            return (
                <div key={element.url}>
                    <RenderPortfolio portfolio = {element} />
                </div>
            );
        });

        return(
            <React.Fragment>
                {portfolio_list}
            </React.Fragment>
        );
    }
}

export default Reporte9;

*/