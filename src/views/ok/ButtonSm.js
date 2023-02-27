const ButtonSm = ({ imgsrc, label }) => {
  return (
    <button
      style={{
        background: '#00ADE8',
        borderRadius: '10px',
        padding: '2px 10px',
        maxWidth: '10rem',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: '5px',
        marginTop: '10px',
      }}
    >
      {label}
      <img src={imgsrc} alt="" />
    </button>
  );
};

export default ButtonSm;
