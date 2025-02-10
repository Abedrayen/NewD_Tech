import React from 'react'

const AddedProduct = ({ product, num }) => {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-md">
      <h2 className="mb-2 text-xl font-semibold">Product {num}</h2>

      <div className="mb-3">
        <label className="block text-gray-700">Product Name</label>
        <input
          type="text"
          disabled
          value={product.selectedProduct}
          className="w-full cursor-not-allowed rounded border bg-gray-100 p-2"
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="st"
          className="block text-gray-700">
          Type
        </label>
        <input
          id="st"
          type="text"
          disabled
          value={product.selectedType}
          className="w-full cursor-not-allowed rounded border bg-gray-100 p-2"
        />
      </div>

      {product.selectedSubType && (
        <div className="mb-3">
          <label
            htmlFor="sst"
            className="block text-gray-700">
            Produit
          </label>
          <input
            id="sst"
            type="text"
            disabled
            value={product.selectedSubType}
            className="w-full cursor-not-allowed rounded border bg-gray-100 p-2"
          />
        </div>
      )}

      {product.selectedOptions?.length > 0 && (
        <div className="mb-3">
          <label className="block text-gray-700">Options</label>
          <ul className="list-inside list-disc">
            {product.selectedOptions.map((option, index) => (
              <li
                key={index}
                className="text-gray-600">
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mb-3">
        <label
          htmlFor="inv"
          className="block text-gray-700">
          Investissement
        </label>
        <input
          id="inv"
          type="text"
          disabled
          value={product.inv}
          className="w-full cursor-not-allowed rounded border bg-gray-100 p-2"
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="invMensuel"
          className="block text-gray-700">
          Investissement Mensuel
        </label>
        <input
          id="invMensuel"
          type="text"
          disabled
          value={product.invMensuel}
          className="w-full cursor-not-allowed rounded border bg-gray-100 p-2"
        />
      </div>
    </div>
  )
}

export default AddedProduct
