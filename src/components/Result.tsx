import { useState } from 'react';

const Styles = {
  Container: {
    position: 'relative',
  },
  Message: {
    position: 'absolute',
    top: 0,
    right: 0,
    transform: 'translateX(100%)',
    background: '#334155',
    color: 'white',
    padding: '6px 16px',
    borderRadius: 16,
    whiteSpace: 'nowrap',
    animation: 'fade-in 500ms',
  },
} as const;

interface ResultProps {
  image: string;
  text: string;
}

function Result({ image, text }: ResultProps) {
  const [visible, setVisible] = useState(false);

  const handleHover = () => setVisible(true);
  const handleLeave = () => setVisible(false);

  return (
    <div style={Styles.Container}>
      <img src={image} width={120} alt="logo" onMouseEnter={handleHover} onMouseLeave={handleLeave} />
      {visible && <p style={Styles.Message}>{text}</p>}
    </div>
  );
}

export default Result;
