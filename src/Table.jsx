import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

const Table = () => {

  const exampleData = [
    { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del Producto 1' },
    { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del Producto 2' },
    { id: 3, nombre: 'Producto 3', descripcion: 'Descripción del Producto 3' },
    { id: 4, nombre: 'Producto 4', descripcion: 'Descripción del Producto 4' },
    { id: 5, nombre: 'Producto 5', descripcion: 'Descripción del Producto 5' },
    { id: 6, nombre: 'Producto 6', descripcion: 'Descripción del Producto 6' },
    { id: 7, nombre: 'Producto 7', descripcion: 'Descripción del Producto 7' },
    { id: 8, nombre: 'Producto 8', descripcion: 'Descripción del Producto 8' },
    { id: 9, nombre: 'Producto 9', descripcion: 'Descripción del Producto 9' },
    { id: 10, nombre: 'Producto 10', descripcion: 'Descripción del Producto 10' },
    { id: 11, nombre: 'Producto 11', descripcion: 'Descripción del Producto 11' },
    // Agrega más datos según sea necesario
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(exampleData); // Tu array de datos de la API aquí

  //Implementación del buscador
  const handleSearch = (search) => {
    setSearchTerm(search);
  };

  const filteredData = data.filter((item) =>
    item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //Implementación de la paginación
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 2;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Filtrar datos basados en la página actual
  const startIndex = currentPage * perPage;
  const endIndex = startIndex + perPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  return (
    <>
    <input
        type="text"
        placeholder="Buscar elemento..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    <table className="table">
        {/* Encabezados de la tabla */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
          </tr>
        </thead>
        {/* Cuerpo de la tabla */}
        <tbody>
          {paginatedData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td>{item.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    {/* paginación va aca */}
    <nav aria-label="Page navigation">
      <ReactPaginate
        containerClassName={'pagination justify-content-center'}
        activeClassName={'active'}
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        nextLabel={"Siguiente"}
        previousLabel={"Anterior"}
        pageCount={Math.ceil(filteredData.length / perPage)}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        />
      </nav>
    </>
  )
}

export default Table