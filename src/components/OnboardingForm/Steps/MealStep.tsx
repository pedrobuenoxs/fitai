import React, { useState } from "react";

interface MealStepProps {
  like: string[];
  dislike: string[];
  allergies: string[];
  setLike: (like: string[]) => void;
  setDislike: (dislike: string[]) => void;
  setAllergies: (allergies: string[]) => void;
}

const MealStep: React.FC<MealStepProps> = ({
  like,
  dislike,
  allergies,
  setLike,
  setDislike,
  setAllergies,
}) => {
  const foodCategories = [
    {
      emoji: "🍞",
      name: "Cereais",
      subcategories: [
        { emoji: "🍚", name: "Arroz integral" },
        { emoji: "🌾", name: "Aveia" },
        { emoji: "🌰", name: "Quinoa" },
        { emoji: "🍞", name: "Pão integral" },
        { emoji: "🥖", name: "Massa integral" },
        { emoji: "🍙", name: "Arroz branco" },
        { emoji: "🍜", name: "Massas" },
        { emoji: "🥐", name: "Pão francês" },
      ],
    },
    {
      emoji: "🍎",
      name: "Frutas",
      subcategories: [
        { emoji: "🍏", name: "Maçãs" },
        { emoji: "🍊", name: "Laranjas" },
        {
          emoji: "🍓",
          name: "Frutas vermelhas (Morango, Amora, Mirtilo, Framboesa)",
        },
        { emoji: "🍌", name: "Bananas" },
        { emoji: "🍇", name: "Uvas" },
        { emoji: "🍍", name: "Abacaxi" },
        { emoji: "🥭", name: "Manga" },
        { emoji: "🥑", name: "Abacate" },
        { emoji: "🍑", name: "Pêssegos" },
        { emoji: "🍒", name: "Cerejas" },
        { emoji: "🍉", name: "Melancia" },
        { emoji: "🍈", name: "Melão" },
      ],
    },
    {
      emoji: "🥦",
      name: "Legumes",
      subcategories: [
        {
          emoji: "🥬",
          name: "Folhas verdes (Espinafre, Couve, Alface, Acelga)",
        },
        {
          emoji: "🥦",
          name: "Crucíferas (Brócolis, Couve-flor, Couve-de-bruxelas, Repolho)",
        },
        {
          emoji: "🥕",
          name: "Legumes de raiz (Cenoura, Beterraba, Nabo, Rabanete)",
        },
        {
          emoji: "🍠",
          name: "Tubérculos (Batata, Batata-doce, Mandioca, Inhame)",
        },
        {
          emoji: "🍆",
          name: "Frutas leguminosas (Abóbora, Abobrinha, Berinjela, Tomate, Pimentão)",
        },
        { emoji: "🌽", name: "Milho" },
        { emoji: "🥒", name: "Pepino" },
        { emoji: "🍄", name: "Cogumelos (Champignon, Shiitake, Portobello)" },
        {
          emoji: "🌶️",
          name: "Pimentas (Pimenta vermelha, Pimenta verde, Pimenta amarela, Pimenta-do-reino)",
        },
      ],
    },

    {
      emoji: "🥛",
      name: "Laticínios",
      subcategories: [
        { emoji: "🥛", name: "Leite" },
        { emoji: "🧀", name: "Queijo" },
        { emoji: "🍦", name: "Iogurte" },
      ],
    },
    {
      emoji: "🥩",
      name: "Proteínas",
      subcategories: [
        { emoji: "🍗", name: "Aves" },
        { emoji: "🥩", name: "Carne bovina" },
        { emoji: "🐖", name: "Carne suína" },
        { emoji: "🐟", name: "Peixe" },
        {
          emoji: "🦐",
          name: "Frutos do mar ",
        },
        { emoji: "🥚", name: "Ovos" },
        { emoji: "🌱", name: "Leguminosas" },
        {
          emoji: "🥜",
          name: "Nozes e castanhas ",
        },
        { emoji: "🌻", name: "Sementes" },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [showSubcategories, setShowSubcategories] = useState(false);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setShowSubcategories(true);
  };

  const handleLikeChange = (subcategory: string) => {
    if (like.includes(subcategory)) {
      setLike(like.filter((item) => item !== subcategory));
    } else {
      setLike([...like, subcategory]);
    }
  };

  const handleDislikeChange = (subcategory: string) => {
    if (dislike.includes(subcategory)) {
      setDislike(dislike.filter((item) => item !== subcategory));
    } else {
      setDislike([...dislike, subcategory]);
    }
  };

  const clearAllergies = () => {
    setAllergies([]);
  };

  return (
    <>
      <label>Escolha uma categoria de alimentos:</label>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {foodCategories.map(({ name, emoji }) => (
          <button
            key={name}
            onClick={() => handleCategoryClick(name)}
            style={{
              backgroundColor: "transparent",
              border: "none",
              margin: "0 0.5rem",
            }}
          >
            {emoji} {name}
          </button>
        ))}
      </div>
      <br></br>
      {showSubcategories && (
        <>
          {/* <div
            style={{
              borderBottom: "1px solid #ccc",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            I like
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gridGap: "1rem",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            {foodCategories
              .find((category) => category.name === selectedCategory)
              ?.subcategories.map((subcategory) => (
                <div key={subcategory.name}>
                  <button
                    onClick={() => handleLikeChange(subcategory.name)}
                    style={{
                      backgroundColor: like.includes(subcategory.name)
                        ? "lightgreen"
                        : "transparent",
                      border: "none",
                      borderRadius: "15px",
                      padding: "0.5rem",
                      boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)",
                      margin: "0.5rem",
                    }}
                  >
                    {subcategory.name} {subcategory.emoji}
                  </button>
                </div>
              ))}
          </div> */}
          <br></br>
          <div
            style={{
              borderBottom: "1px solid #ccc",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            I dont like
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gridGap: "1rem",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            {foodCategories
              .find((category) => category.name === selectedCategory)
              ?.subcategories.map((subcategory) => (
                <div key={subcategory.name}>
                  <button
                    onClick={() => handleDislikeChange(subcategory.name)}
                    style={{
                      backgroundColor: dislike.includes(subcategory.name)
                        ? "lightcoral"
                        : "transparent",
                      border: "none",
                      borderRadius: "15px",
                      padding: "0.5rem",
                      boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)",
                      margin: "0.5rem",
                    }}
                  >
                    {subcategory.name} {subcategory.emoji}
                  </button>
                </div>
              ))}
          </div>
        </>
      )}
      <br></br>
      <label htmlFor="allergies">Você tem alguma alergia?</label>
      <input
        type="text"
        id="allergies"
        value={allergies}
        onChange={(e) => setAllergies([...allergies, e.target.value])}
      />
      <button onClick={clearAllergies}>Eu não tenho alergias</button>
    </>
  );
};

export default MealStep;
