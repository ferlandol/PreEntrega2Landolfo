import React from 'react';

function Result({ searchResults }) {
  const partialMatches = searchResults.filter(result => result.includes('coincidencia'));

  return (
    <div>
      <h1>Resultados de la Búsqueda</h1>
      {}
      {partialMatches.length > 0 ? (
        <ul>
          {partialMatches.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron resultados.</p>
      )}
    </div>
  );
}

export default Result;