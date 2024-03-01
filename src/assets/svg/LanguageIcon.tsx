import React from 'react'
import EndeavorFancySVG, { Props } from './EndeavorFancySVG'

const LanguageIcon: React.FC<Props> = (props: Props) => {
  return (
    <EndeavorFancySVG
      width={props.width || '24'}
      height={props.height || '24'}
      fill={props.fill || 'none'}
      stroke={props.stroke || '#08786b'}
      strokeWidth={props.strokeWidth || '2'}
    >
      <path
        fill={props.fill}
        strokeWidth={props.strokeWidth}
        d='M12,23 C18.0751322,23 23,18.0751322 23,12 C23,5.92486775 18.0751322,1 12,1 C5.92486775,1 1,5.92486775 1,12 C1,18.0751322 5.92486775,23 12,23 Z M12,23 C15,23 16,18 16,12 C16,6 15,1 12,1 C9,1 8,6 8,12 C8,18 9,23 12,23 Z M2,16 L22,16 M2,8 L22,8'
      ></path>
    </EndeavorFancySVG>
  )
}

export default LanguageIcon