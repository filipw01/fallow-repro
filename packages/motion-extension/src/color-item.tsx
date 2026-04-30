import { PaletteColorSwatch } from '@fallow-repro/ui-export-chain/foo'

type ColorItemBadgeProps = {
  color: string
  size?: 'regular'
}

export function ColorItemBadge({
  color,
  size = 'regular',
}: ColorItemBadgeProps) {
  const pixelSize = size === 'regular' ? 16 : 16
  return <PaletteColorSwatch color={`${color}-${pixelSize}`} />
}
