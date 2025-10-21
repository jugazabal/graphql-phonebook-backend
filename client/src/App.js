import React, { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import './App.css';

const ALL_PERSONS = gql`
  query {
    allPersons {
      name
      phone
      address {
        street
        city
      }
      id
    }
  }
`;

const ADD_PERSON = gql`
  mutation addPerson($name: String!, $phone: String, $street: String!, $city: String!) {
    addPerson(name: $name, phone: $phone, street: $street, city: $city) {
      name
      phone
      address {
        street
        city
      }
      id
    }
  }
`;

const Persons = ({ persons }) => {
  return (
    <div>
      <h2>Persons</h2>
      {persons.map(person => (
        <div key={person.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc' }}>
          <strong>{person.name}</strong><br />
          {person.phone && <>Phone: {person.phone}<br /></>}
          Address: {person.address.street}, {person.address.city}
        </div>
      ))}
    </div>
  );
};

const PersonForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');

  const [addPerson, { loading, error }] = useMutation(ADD_PERSON, {
    refetchQueries: [{ query: ALL_PERSONS }],
    onCompleted: () => {
      setName('');
      setPhone('');
      setStreet('');
      setCity('');
    }
  });

  const submit = (event) => {
    event.preventDefault();
    addPerson({ variables: { name, phone: phone || null, street, city } });
  };

  return (
    <div style={{ marginBottom: '30px' }}>
      <h2>Add a new person</h2>
      {error && <div style={{ color: 'red' }}>Error: {error.message}</div>}
      <form onSubmit={submit}>
        <div style={{ marginBottom: '10px' }}>
          Name: <input
            value={name}
            onChange={({ target }) => setName(target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          Phone: <input
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          Street: <input
            value={street}
            onChange={({ target }) => setStreet(target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          City: <input
            value={city}
            onChange={({ target }) => setCity(target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add'}
        </button>
      </form>
    </div>
  );
};

function App() {
  const { loading, error, data } = useQuery(ALL_PERSONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="App" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>GraphQL Phonebook</h1>
      
      <PersonForm />
      
      {data && <Persons persons={data.allPersons} />}
    </div>
  );
}

export default App;
