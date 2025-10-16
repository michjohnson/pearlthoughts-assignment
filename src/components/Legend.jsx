import React from "react";

const colors = {
  Checkup: "#3b82f6",
  Consultation: "#10b981",
  "Follow-up": "#f59e0b",
  Procedure: "#8b5cf6",
};

export default function Legend() {
  return (
    <div className="flex space-x-4 mt-4">
      {Object.entries(colors).map(([type, color]) => (
        <div key={type} className="flex items-center space-x-1">
          <div
            style={{ backgroundColor: color }}
            className="w-4 h-4 rounded"
          ></div>
          <span>{type}</span>
        </div>
      ))}
    </div>
  );
}
