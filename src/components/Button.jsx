export default function Button({ label, onClick, variant = 'primary' }) {
  return (
    <button className={`button button-${variant}`} type="button" onClick={onClick}>
      {label}
    </button>
  );
}
