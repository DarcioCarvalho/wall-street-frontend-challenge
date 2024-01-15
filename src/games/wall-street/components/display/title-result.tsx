
interface TitleResultProps {
  result: number;
}

interface ResultMessage {
  message: string;
  color: string;
}

export function TitleResult({ result }: TitleResultProps) {
  if (!result) {
    return (
      <h1 className="text-3xl flex gap-4 font-medium text-yellow-300 uppercase drop-shadow-[-2px_2px_0_var(--tw-shadow-color)] shadow-yellow-700"
        style={{ "textShadow": "2px 0 var(--tw-shadow-color), 0 -2px var(--tw-shadow-color)" }}
      >
        Stonks!
      </h1>

    );
  }

  const resultMessage: ResultMessage = result == 1 ?
    {
      message: 'O Mercado Subiu!',
      color: 'text-emerald-300 shadow-emerald-700'
    } :
    {
      message: 'O Mercado Desceu!',
      color: 'text-rose-300 shadow-rose-700'
    };

  return (
    <h1 className={`text-2xl flex gap-4 font-medium uppercase drop-shadow-[-2px_2px_0_var(--tw-shadow-color)] ${resultMessage.color}`}
      style={{ "textShadow": "2px 0 var(--tw-shadow-color), 0 -2px var(--tw-shadow-color)" }}
    >
      {resultMessage.message}
    </h1>
  )

}