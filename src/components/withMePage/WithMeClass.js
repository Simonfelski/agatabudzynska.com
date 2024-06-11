import React from 'react'

const WithMeClass = (props) => {

  const isEven = props.type.id % 2 === 0;

  return (
    <div className="max-w-[1366px] lg:mx-auto my-5">
      <div className="py-4 lg:p-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className={`md:w-1/2 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
          <h2 className="text-center font-bold p-5 text-lg md:text-xl lg:text-2xl">{props.type.title}</h2>
          <p className="text-justify md:text-lg">{props.type.description}</p>
        </div>
        <div className={`md:w-2/3 ${isEven ? 'md:order-1' : 'md:order-2'} md:pr-5 md:pl-5 pt-5`}>
          <img src={props.type.coverImg} alt="Styl jogi" className="w-full rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default WithMeClass
