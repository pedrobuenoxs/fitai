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
  const foodCategories = ["Grains", "Fruits", "Vegetables", "Dairy", "Protein"];

  const handleLikeChange = (e: any) => {
    if (e.target.checked) {
      setLike([...like, e.target.value]);
    } else {
      setLike(like.filter((item) => item !== e.target.value));
    }
  };

  const handleDislikeChange = (e: any) => {
    if (e.target.checked) {
      setDislike([...dislike, e.target.value]);
    } else {
      setDislike(dislike.filter((item) => item !== e.target.value));
    }
  };
  const clearAllergies = () => {
    setAllergies([]);
  };
  return (
    <>
      <label>O que você gosta de comer?</label>
      <div>
        {foodCategories.map((category) => (
          <div key={category}>
            <input
              type="checkbox"
              id={`like-${category}`}
              value={category}
              checked={like.includes(category)}
              onChange={handleLikeChange}
            />
            <label htmlFor={`like-${category}`}>{category}</label>
          </div>
        ))}
      </div>

      <label>O que você não gosta de comer?</label>
      <div>
        {foodCategories.map((category) => (
          <div key={category}>
            <input
              type="checkbox"
              id={`dislike-${category}`}
              value={category}
              checked={dislike.includes(category)}
              onChange={handleDislikeChange}
            />
            <label htmlFor={`dislike-${category}`}>{category}</label>
          </div>
        ))}
      </div>

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
