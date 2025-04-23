import React from 'react';
import { Tag } from 'antd';
import { WarningOutlined, CloseCircleOutlined, BugOutlined } from '@ant-design/icons';

const SeverityIndicator = ({ severity }) => {
  const severityConfig = {
    Warning: {
      color: 'gold',
      icon: <WarningOutlined />,
      text: 'Warning'
    },
    Critical: {
      color: 'volcano',
      icon: <CloseCircleOutlined />,
      text: 'Critical'
    },
    Fatal: {
      color: 'red',
      icon: <BugOutlined />,
      text: 'Fatal'
    }
  };

  const config = severityConfig[severity];

  return (
    <Tag icon={config.icon} color={config.color}>
      {config.text}
    </Tag>
  );
};

export default SeverityIndicator;