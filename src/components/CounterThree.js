import React, { useState } from 'react';

function CounterThree() {
  const [name, setName] = useState({firstName: '', lastName: ''})
  return (
    <div>
        <form>
            <input type='text' value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})} />
            <input type='text' value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})} />
            <h2>{name.firstName}</h2>
            <h2>{name.lastName}</h2>
        </form>
    </div>
  )
}

export default CounterThree