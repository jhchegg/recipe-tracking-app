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
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="cuisine"
        value={formData.cuisine}
        onChange={handleChange}
        placeholder="Cuisine"
      />
      <input
        type="text"
        name="photo"
        value={formData.photo}
        onChange={handleChange}
        placeholder="Photo URL"
      />
      <textarea
        name="ingredients"
        value={formData.ingredients}
        onChange={handleChange}
        placeholder="Ingredients"
      />
      <textarea
        name="preparation"
        value={formData.preparation}
        onChange={handleChange}
        placeholder="Preparation"
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default RecipeCreate;
