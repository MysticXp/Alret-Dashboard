import React from 'react';
import { Card, Tag, Divider } from 'antd';

const DimensionFilter = ({ alert }) => {
  const { labels } = alert;

  const renderDimension = (title, value) => {
    const items = value.split(',').map(item => item.trim());
    
    return (
      <div style={{ marginBottom: 16 }}>
        <h4>{title}</h4>
        <div>
          {items.map((item, index) => (
            <Tag key={index} color="blue">{item}</Tag>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Card title="Effect" bordered={false}>
      {renderDimension('Business', labels.domain)}
      <Divider />
      {renderDimension('Country', labels.country)}
      <Divider />
      {renderDimension('Device', labels.device)}
    </Card>
  );
};

export default DimensionFilter;