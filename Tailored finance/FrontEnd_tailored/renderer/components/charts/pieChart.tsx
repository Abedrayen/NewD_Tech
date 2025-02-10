'use client'
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Première Phase', value: 400, fill: '#5DADE2' },    // Soft Blue
  { name: 'En Attente de Signature', value: 300, fill: '#F4D03F' },  // Golden Yellow
  { name: 'Envoi des Offres', value: 300, fill: '#F39C12' },   // Light Orange
  { name: 'Contrat Finalisé', value: 200, fill: '#58D68D' },   // Green
  { name: 'Processus Interrompu', value: 100, fill: '#BDC3C7' }, // Gray
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
         <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.value}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text className='text-xs' x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {` ${(percent * 100).toFixed(2)}%`}
      </text>
    </g>
  );
};

const renderLegend = (props) => {
  const { payload } = props;
  return (
    <div className='flex flex-row flex-wrap mt-10 space-x-3'>
      {payload.map((entry, index) => (
        <div key={`legend-item-${index}`} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <div
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: entry.color,
              marginRight: '8px',
              borderRadius: '50%',
            }}
          />
          <span style={{ color: entry.color }}>{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

export default class ChartCircle extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si';

  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <div className='hidden md:block'>
        <ResponsiveContainer  width="100%" height={300}>
          <PieChart width={300} height={300} margin={{top:20 }}  >
            <Pie
            
              activeIndex={this.state.activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              dataKey="value"
              onMouseEnter={this.onPieEnter}
            />
            <Legend content={renderLegend} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}