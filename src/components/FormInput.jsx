export default function FormInput (props) {
  const { id, ...inputProps } = props;

  return (
    <input {...inputProps} className='p-4 bg-layout_black text-lg rounded-lg border border-white border-opacity-50' />
  );
}
