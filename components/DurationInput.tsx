import { Button, Flex, Stack, TextInput } from '@sanity/ui'
import { Icon } from '@sanity/icons'

const PRESETS_SECONDS = [15, 20, 30, 45, 60, 90, 120, 300, 600, 900]
const PRESETS_REPS = [5, 6, 8, 10, 12, 15, 20]

type Props = {
  value?: number
  onChange: (value: number | null) => void
  mode?: 'time' | 'reps'
}

export function DurationInput(props: Props) {
  const { value, onChange, mode = 'time' } = props
  const presets = mode === 'reps' ? PRESETS_REPS : PRESETS_SECONDS
  const unit = mode === 'reps' ? 'lần' : 's'

  return (
    <Stack space={3}>
      <Flex gap={2} align="center">
        <TextInput
          type="number"
          value={value?.toString() ?? ''}
          onChange={(e) => {
            const v = e.target.value
            onChange(v ? Number(v) : null)
          }}
          placeholder={`Số ${unit}`}
          style={{ flex: 1 }}
        />
        <Button
          icon={<Icon symbol="trash" />}
          mode="bleed"
          tone="critical"
          padding={2}
          onClick={() => onChange(null)}
          title="Xóa giá trị"
        />
      </Flex>

      <Flex gap={1} wrap="wrap">
        {presets.map((preset) => (
          <Button
            key={preset}
            text={`${preset}${unit}`}
            mode={value === preset ? 'default' : 'ghost'}
            tone={value === preset ? 'primary' : 'default'}
            fontSize={1}
            padding={2}
            onClick={() => onChange(preset)}
          />
        ))}
      </Flex>
    </Stack>
  )
}

export default DurationInput