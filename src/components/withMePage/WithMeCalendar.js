import React, { useState } from 'react';

const WithMeCalendar = () => {
  const [selectedDay, setSelectedDay] = useState(null); // State to keep track of the selected day

  const weekdays = [
    { 
      id: 1, 
      name: 'Poniedziałek', 
      activities: [
        '9.00 Vinyasa joga', 
        '18.00 Joga od podstaw (gr. zamknięta)'
      ], 
      locations: [
        'Cisza Yoga, (Sierosław k. Poznania)', 
        'Cisza Yoga, (Sierosław k. Poznania)'
      ] 
    },
    { 
      id: 2, 
      name: 'Wtorek', 
      activities: [
        '6.30 Vinyasa joga', 
        '18.00 Vinyasa joga', 
        '19.00 Yin joga'
      ], 
      locations: [
        'Studio Namaste Yoga (Poznań)',
        'Studio Cisza, (Sierosław k. Poznania)', 
        'Studio Cisza, (Sierosław k. Poznania)'
      ] 
    },
    { 
      id: 3, 
      name: 'Środa', 
      activities: [
        '9.00 Joga dla każdego', 
        '18.45 Vinyasa joga'
      ], 
      locations: [
        'Cisza Yoga (Sierosław k. Poznania)', 
        'Strykowo k. Poznania'
      ] 
    },
    { 
      id: 4, 
      name: 'Czwartek', 
      activities: [
        '6.30 Vinyasa joga', 
        '17.00 Vinyasa joga', 
        '18.00 Yin joga', 
        '20.00 Vinyasa slow'
      ], 
      locations: [
        'Studio Namaste Yoga (Poznań)', 
        'Cisza Yoga (Sierosław k. Poznania)', 
        'Cisza Yoga (Sierosław k. Poznania)', 
        'Studio Namaste Yoga (Poznań)'
      ] 
    },
    { 
      id: 5, 
      name: 'Piątek', 
      activities: [
        '9.00 Joga dla każdego', 
        '18.00 Vinyasa joga', 
        '19.00 Yin joga'
      ], 
      locations: [
        'Cisza Yoga (Sierosław k. Poznania)', 
        'Cisza Yoga (Sierosław k. Poznania)', 
        'Cisza Yoga (Sierosław k. Poznania)'
      ] 
    },
    { 
      id: 6, 
      name: 'Niedziela', 
      activities: [
        '16.00 Vinyasa slow', 
        '17.45 Joga nidra'
      ], 
      locations: [
        'Studio Namaste Yoga (Poznań)', 
        'Studio Namaste Yoga (Poznań)'
      ] 
    }
  ];

  const handleDayClick = (id) => {
    setSelectedDay(selectedDay === id ? null : id); // Toggle selected day
  };

  return (
    <div className='max-w-[1366px] mx-auto px-5 lg:py-10'>
      <h2 className="md:text-xl lg:text-xl font-bold mb-4 text-center">Grafik zajęć stacjonarnych</h2>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
        {weekdays.map((day) => (
          <div key={day.id} className={`p-4 ${selectedDay === day.id ? 'bg-black border-white' : 'bg-[#babba1] border-gray-200'}`}>
            <h2 className={`md:text-lg text-center mb-2 cursor-pointer ${selectedDay === day.id ? 'text-white' : 'text-black'}`} onClick={() => handleDayClick(day.id)}>{day.name}</h2>
            {/* Only show details if the day is selected */}
            {selectedDay === day.id && (
              <div>
                {day.activities.map((activity, index) => (
                  <p key={index} className="text-white">
                    {activity}<br/>
                    <span className="text-[#3cc0d1] lg:pb-4">{day.locations[index]}</span>
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WithMeCalendar;
