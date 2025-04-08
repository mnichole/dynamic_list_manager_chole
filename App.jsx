import React, { useState } from 'react';

function DynamicListManager() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState(['First Item']); 

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem(''); 
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Dynamic List Manager</h2>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter an item"
          value={newItem}
          onChange={handleInputChange}
          style={styles.input}
        />
        <button onClick={handleAddItem} style={styles.addButton}>
          Add Item
        </button>
      </div>
      <div style={styles.listContainer}>
        <ul>
          {items.map((item, index) => (
            <li key={index} style={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'sans-serif',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    maxWidth: '400px',
    margin: '20px auto',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'left',
    marginBottom: '20px',
    color: 'green',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  inputContainer: {
    display: 'flex',
    marginBottom: '15px',
    border: '1px solid lightgreen', 
    borderRadius: '3px', 
    overflow: 'hidden',
    backgroundColor: '#ffffff',
  },
  input: {
    flexGrow: 1,
    padding: '10px',
    border: 'none', 
    fontSize: '16px',
    outline: 'none',
  },
  addButton: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  listContainer: {
    border: '1px solid lightgreen',
    borderRadius: '3px',
    backgroundColor: '#e9f9f0',
    padding: '20px 15px',
    minHeight: '100px',

  },
  listItem: {
    textAlign: 'left',
    padding: '8px 0',
    borderBottom: '1px solid #eee',
    listStyleType: 'disc',
    marginLeft: '20px',
    color: '#28a745',
  },
};

export default DynamicListManager;