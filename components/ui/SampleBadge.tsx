import React from 'react';

interface SampleBadgeProps {
  label?: string;
  className?: string;
}

export default function SampleBadge({ label = 'Muestra', className = '' }: SampleBadgeProps) {
  return (
    <span className={`sample-badge ${className}`}>
      {label}
    </span>
  );
}
