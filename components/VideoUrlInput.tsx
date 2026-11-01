import { Card, Stack, Text, TextInput } from '@sanity/ui'

type Props = {
  value?: string
  onChange: (value: string) => void
}

function extractYoutubeId(url?: string): string | null {
  if (!url) return null
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  )
  return match?.[1] ?? null
}

export function VideoUrlInput(props: Props) {
  const { value, onChange } = props
  const videoId = extractYoutubeId(value)

  return (
    <Stack space={3}>
      <TextInput
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder="https://youtube.com/watch?v=..."
      />

      {videoId ? (
        <Card padding={2} radius={2} shadow={1} border>
          <div
            style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '56.25%',
              borderRadius: 8,
              overflow: 'hidden',
              background: '#000',
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 0,
              }}
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              title="Video preview"
            />
          </div>
        </Card>
      ) : value ? (
        <Text size={1} muted>
          ⚠️ Không nhận diện được YouTube ID
        </Text>
      ) : null}
    </Stack>
  )
}

export default VideoUrlInput