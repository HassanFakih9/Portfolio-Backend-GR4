import React from 'react';
import './App.css';

const List = ({ items, onDelete }) => {
  const handleDelete = (itemId) => {
    onDelete(itemId);
  };
  if (!items || items.length === 0) {
    // Handle the case when items is empty or undefined
    return <p>No items to display.</p>;
  }
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(items[0]).map((key) => {
            // Exclude certain keys like '_id' and '__v'
            if (key !== '_id' && key !== '__v') {
              return <th key={key}>{key}</th>;
            }
            return null;
          })}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map((doc, index) => (
          <tr key={index}>
            {Object.keys(doc).map((key) => {
              // Exclude certain keys like '_id' and '__v'
              if (key !== '_id' && key !== '__v') {
                // Check if the current field is an image
                if (key === 'image') {
                  return (
                    <td key={key}>
                      <img src={doc[key]} alt="Item" width="100" />
                      {/* <img src={`data:image/png;base64,${doc[key].toString('base64')}`} alt="Skill" width="100" /> */}
                    </td>
                  );
                }
                return <td key={key}>{doc[key]}</td>;
              }
              return null;
            })}
            <td>
              <button onClick={() => handleDelete(doc._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
