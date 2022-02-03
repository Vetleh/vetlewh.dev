import React, { useState } from 'react';

import './Studies.css';
import ntnu from '../../images/ntnu_uten_slagord_neg.png';
import arrow from '../../images/right-arrow.png';


function Studies() {
  const [showGrades, setShowGrades] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  let handleClick = (right: boolean) => {
    if(right){
      if(currentPage == studies.length - 1) setCurrentPage(0)
      else setCurrentPage(currentPage+1)
    }
    //not right, hence left
    else if(!right){
      if(currentPage == 0) setCurrentPage(studies.length -1);
      else setCurrentPage(currentPage-1);
    }
  }
  const studies = [
    {name: "Dataingeniør", start: "August 2018", end: "juni 2021", logo: ntnu, courses: [
      {code: "TDT101", name: "hahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", semester: "autumn 2018", grade: "C"},
      {code: "TDT102", name: "haha", semester: "autumn 2018", grade: "C"},
      {code: "TDT103", name: "haha", semester: "autumn 2018", grade: "C"},
      {code: "TDT104", name: "haha", semester: "autumn 2018", grade: "C"},
      {code: "TDT104", name: "haha", semester: "autumn 2018", grade: "C"},
      {code: "TDT104", name: "haha", semester: "autumn 2018", grade: "C"},
      {code: "TDT104", name: "haha", semester: "autumn 2018", grade: "C"},
      {code: "TDT104", name: "haha", semester: "autumn 2018", grade: "C"},
      {code: "TDT104", name: "haha", semester: "autumn 2018", grade: "C"},
      {code: "TDT104", name: "haha", semester: "autumn 2018", grade: "C"},
      {code: "TDT104", name: "haha", semester: "autumn 2018", grade: "C"}

  
    ]},
    {name: "Datateknologi", start: "August 2021", end: "", logo: ntnu, courses: [
  
    ]}
  ]


  let displaying;
  if(showGrades){
    displaying = 
      <div className='grades'>
        <h2>{studies[currentPage].name}</h2>
        <div className='table-wrapper'>
            <table className='grade-table'>
                <thead>
                <tr>
                    <th>Fagkode</th>
                    <th>Fag</th>
                    <th>Semester</th>
                    <th>Karakter</th>
                </tr>
                </thead>
                <tbody>
                  {
                  studies[currentPage].courses.map((course) => {
                    return (
                    <tr key={course.code}>
                      <td>{course.code}</td>
                      <td>{course.name}</td>
                      <td>{course.semester}</td>
                      <td>{course.grade}</td>
                    </tr>
                    )
                    })
                      
                  }
                
                </tbody>
            </table>
            <p onClick={() => setShowGrades(!showGrades)}>Click me to see hide!</p>
        </div>
      </div>
  }
  else {
    displaying = 
      <div className='carusel'>
        <img src={arrow} className='right' onClick={() => handleClick(true)}></img>
        <img src={arrow} className='left' onClick={() => handleClick(false)}></img>
        <img className='logo' src={studies[currentPage].logo}></img>
        <h2>{studies[currentPage].name}</h2>
        <h3>{studies[currentPage].start + " - " + studies[currentPage].end}</h3>
        <p onClick={() => setShowGrades(!showGrades)}>Click me to see grades!</p>
      </div>
  }
  return (
    <div className='studies'>
      {displaying}
    </div>
  );
}

export default Studies;
