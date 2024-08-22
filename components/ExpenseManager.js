import React, { useState } from 'react';

const ExpenseManager = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, itemName: 'Veggies', amount: 230.00, date: '07/15/2018', category: 'Food' },
    { id: 2, itemName: 'Apples', amount: 300.00, date: '07/13/2018', category: 'Shopping' },
    { id: 3, itemName: 'Goa Trip', amount: 550.00, date: '06/12/2018', category: 'Travel' },
    { id: 4, itemName: 'Medicines', amount: 400.00, date: '05/15/2018', category: 'Health' },
    { id: 5, itemName: 'Hospital Bills', amount: 340.00, date: '07/03/2018', category: 'Health' },
    { id: 6, itemName: 'Sweets', amount: 200.00, date: '07/02/2018', category: 'Food' }
  ]);

  const handleDelete = (id) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Personal Expense Manager</h2>
      <button style={styles.addButton}>Add Expense</button>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Item #</th>
            <th style={styles.th}>Item Name</th>
            <th style={styles.th}>Amount</th>
            <th style={styles.th}>Expense Date</th>
            <th style={styles.th}>Category</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={expense.id} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
              <td style={styles.td}>{index + 1}</td>
              <td style={styles.td}>{expense.itemName}</td>
              <td style={styles.td}>${expense.amount.toFixed(2)}</td>
              <td style={styles.td}>{expense.date}</td>
              <td style={styles.td}>{expense.category}</td>
              <td style={styles.td}>
                <button style={styles.editButton}>Edit</button>
                <button style={styles.deleteButton} onClick={() => handleDelete(expense.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    maxWidth: '80%',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  addButton: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '20px',
    display: 'block',
    marginLeft: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px',
  },
  th: {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '10px',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  td: {
    padding: '10px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  },
  evenRow: {
    backgroundColor: '#f2f2f2',
  },
  oddRow: {
    backgroundColor: 'white',
  },
  editButton: {
    backgroundColor: '#28a745',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '3px',
    marginRight: '5px',
    cursor: 'pointer',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
};

export default ExpenseManager;
