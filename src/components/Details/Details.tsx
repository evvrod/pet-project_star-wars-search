import Close from '../Close/Close';
import InfoCharacter from '../InfoCharacter/InfoCharacter';

export default function Details({ id }: { id: number }) {
  return (
    <>
      <Close />
      <InfoCharacter id={id} />
    </>
  );
}
