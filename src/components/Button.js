// Exemple de composant réutilisable
// components/Button/Button.js

/**
 * Composant Button réutilisable
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.text - Le texte du bouton
 * @param {string} props.variant - Le style du bouton (primary, secondary, danger)
 * @param {Function} props.onClick - Fonction appelée au clic
 * @param {boolean} props.disabled - État désactivé du bouton
 */
export const Button = ({ text, variant = 'primary', onClick, disabled = false }) => {
  const handleClick = (event) => {
    if (!disabled && onClick) {
      onClick(event);
    }
  };

  return (
    <button 
      className={`btn btn--${variant} ${disabled ? 'btn--disabled' : ''}`}
      onClick={handleClick}
      disabled={disabled}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;