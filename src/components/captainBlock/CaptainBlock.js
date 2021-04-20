import Title from '../title/Title';
import Input from '../input/Input';

const CaptainBlock = () => {
  return (
    <>
      <Title text="Заявка на участие в рейде на Испанский флот" />
      <Input placeholder="Имя капитана" name="captain" />
      <Input placeholder="Имя корабля" name="shipName" />
    </>
  );
};

export default CaptainBlock;
