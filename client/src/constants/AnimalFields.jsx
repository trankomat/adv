
let name, species, color, legs, description;
const Fields = [

    {
      id: "name",
      label: "Name",
      name: "name",
      value: name,
    },
    {
      id: "species",
      label: "Species",
      name: "species",
      value: species,
    },
    {
      id: "color",
      label: "Color",
      name: "color",
      value: color
    },
    {
      id: "legs",
      label: "Legs",
      name: "legs",
      value: legs,
    },
    {
      id: "description",
      label: "Description",
      name: "description",
      multiline: true,
      rows: 4,
      value: description,
    },
  ];

  export default Fields;