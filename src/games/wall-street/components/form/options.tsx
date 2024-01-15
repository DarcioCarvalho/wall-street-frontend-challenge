import { useContext } from 'react'
import colors from 'tailwindcss/colors';
import colorExtend from '@/games/utils/colorExtend';


import { Trending } from '../transaction-panel/enums/trending.enum'
import { WallStreetGameContext } from '@/core/providers/games/wall-street-game.provider'
import { TrendUpIcon } from '../icons/trend-up-icon'
import { TrendDownIcon } from '../icons/trend-down-icon'
import { TrendZeroIcon } from '../icons/trend-zero-icon'

type Props = {
  selected: string
  setSelected: Function
  handleMousePosition: Function
}


export default function OptionChooser({
  selected,
  setSelected,
  handleMousePosition
}: Props) {

  const { soundClick } = useContext(WallStreetGameContext)

  const handleClick = (event) => {
    soundClick()
    setSelected(event)
  }

  const trendButtonStyle = "flex flex-row flex-1 justify-center items-end gap-5 text-lg w-full font-medium rounded-sm px-0 py-2 text-gray-200";

  return (
    <div className="grid gap-4">
      <div className="font-medium text-xs">Selecionar Tendência</div>

      <div className="grid grid-cols-3 md:grid-cols-1 gap-2 md:gap-4">
        <button
          type="button"
          onBlur={() => handleMousePosition('up')}
          onMouseOver={() => handleMousePosition('up')}
          onMouseOut={() => handleMousePosition('white')}
          onClick={() => handleClick(Trending.UP)}
          className={`${trendButtonStyle} bg-buy hover:text-greenLight-200 ${selected == Trending.UP
            ? 'active'
            : 'border-transparent hover:border-transparent'
            }`}
        >
          <TrendUpIcon colorHover={colorExtend.greenLight[200]} />
          2x
        </button>

        <button
          type="button"
          onClick={() => handleClick(Trending.IDLE)}
          className={`${trendButtonStyle} bg-bull hover:text-amber-200 ${selected == Trending.IDLE
            ? 'active'
            : 'border-transparent hover:border-transparent'
            } `}
        >
          <TrendZeroIcon colorHover={colors.amber[200]} />
          20x
        </button>
        <button
          type="button"
          onBlur={() => handleMousePosition('down')}
          onMouseOver={() => handleMousePosition('down')}
          onMouseOut={() => handleMousePosition('white')}
          onClick={() => handleClick(Trending.DOWN)}
          className={`${trendButtonStyle} bg-sell hover:text-redLight-300 ${selected == Trending.DOWN
            ? 'active'
            : 'border-transparent hover:border-transparent'
            }`}
        >
          <TrendDownIcon colorHover={colorExtend.redLight[300]} />
          2x
        </button>
      </div>
    </div>
  )
}
