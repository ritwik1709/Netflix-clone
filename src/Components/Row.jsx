import React from 'react';
import Card from './Card';
import '../Styles/Row.scss';

const imgurl="https://image.tmdb.org/t/p/original";

const Row = ({title,arr=[]}) => {
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div>
           {
            arr.map((item,index)=>{
                return (
                    <Card key={index} img={`${imgurl}/${item.poster_path}`}/>
                )
            })
           }
        </div>
    </div>
  )
}

export default Row