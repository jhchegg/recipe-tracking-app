import React, { useState } from "react";

function RecipeCreate({ onCreate }) {
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.cuisine ||
      !formData.photo ||
      !formData.ingredients ||
      !formData.preparation
    ) {
      alert("Please fill out all recipe fields!!");
      return;
    }

    onCreate(formData);
    // Clear the form
    setFormData({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: ""
    });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr style={{backgroundColor:'Khaki' }}>
            <td><input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            /></td>
            <td><input
              type="text"
              name="cuisine"
              value={formData.cuisine}
              onChange={handleChange}
              placeholder="Cuisine"
            /></td>
            <td><input
              type="text"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              placeholder="Photo URL"
            /></td>
            <td><textarea
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              placeholder="Ingredients"
            /></td>
            <td><textarea
              name="preparation"
              value={formData.preparation}
              onChange={handleChange}
              placeholder="Preparation"
            /></td>
            <td><button type="submit">Create</button></td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
