export default function TextArea({ message, onMessageChange }) {
  return (
    <textarea
      className="rounded-lg w-5/6 h-20 placeholder:text-gray-400 px-4"
      placeholder="Mensagem"
      type="text"
      name="Mensagem"
      id="Mensagem"
      value={message}
      onChange={(e) => onMessageChange(e.target.value)}
    />
  );
}
