
'use client'
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', NewClients: 20, OldClients: 10 },
  { name: 'Feb', NewClients: 40, OldClients: 20 },
  { name: 'Mar', NewClients: 30, OldClients: 60 },
  { name: 'Apr', NewClients: 50, OldClients: 40 },
  { name: 'May', NewClients: 70, OldClients: 30 },
  { name: 'Jun', NewClients: 60, OldClients: 80 },
  { name: 'Jul', NewClients: 90, OldClients: 70 },
];

export default class SimpleChart extends PureComponent {
  

  render() {
    return (
       <div  className='hidden md:block'>
         <ResponsiveContainer width={'100%'} minHeight={300}>
        <LineChart
       
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 15,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
            <XAxis stroke='#7C8DB5' dataKey="name" />
            <YAxis stroke='#7C8DB5' />
            <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
            <Legend
             
              align="right"
              verticalAlign="top"
              iconType="circle"
              formatter={(value) => (
                <span style={{ color: value === 'NewClients' ? 'green' : '#FE971B' }}>{value === 'NewClients' ? 'Nouveaux Clients' : 'Clients Existants'}</span>
              )}
            />
            <Line type="monotone" dataKey="NewClients" stroke="green" strokeWidth={2} />
            <Line type="monotone" dataKey="OldClients" stroke="#FE971B" strokeWidth={2} />
        </LineChart>
        </ResponsiveContainer>
        </div>
    );
  }
}
